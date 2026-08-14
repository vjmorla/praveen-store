<#
PowerShell helper to install Git (via winget when available), configure user, initialize repo,
commit all changes, and push to a remote repository. Run this locally in the project folder.

Usage (run in project root):
  PowerShell -ExecutionPolicy Bypass -File .\scripts\setup-and-push.ps1

Notes:
- Installation requires administrative rights for winget installs.
- Pushing to a remote will prompt for credentials (HTTPS) or use your SSH agent if configured.
#>

function Write-Info($m) { Write-Host "[info] $m" -ForegroundColor Cyan }
function Write-Err($m) { Write-Host "[error] $m" -ForegroundColor Red }

Write-Info "Checking for Git..."
try {
  $gitVersion = & git --version 2>$null
  if ($LASTEXITCODE -eq 0) {
    Write-Info "Git is already installed: $gitVersion"
  } else {
    throw "not-found"
  }
} catch {
  Write-Info "Git not found. Checking for winget to install..."
  try {
    & winget --version > $null 2>&1
    if ($LASTEXITCODE -eq 0) {
      Write-Info "Installing Git via winget (may require admin rights)..."
      & winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
      if ($LASTEXITCODE -ne 0) { Write-Err "winget install failed. Please install Git manually from https://git-scm.com/download/win"; exit 1 }
    } else {
      Write-Err "winget is not available. Please install Git manually from https://git-scm.com/download/win and re-run this script."; exit 1
    }
  } catch {
    Write-Err "Could not install Git automatically. Please install Git manually from https://git-scm.com/download/win and re-run this script."; exit 1
  }
}

Write-Info "Configuring Git user.name and user.email (local repo config)."
$name = Read-Host "Enter your name for Git commits (e.g. 'Praveen')"
if ([string]::IsNullOrWhiteSpace($name)) { Write-Err "Name is required"; exit 1 }
$email = Read-Host "Enter your email for Git commits (e.g. 'you@example.com')"
if ([string]::IsNullOrWhiteSpace($email)) { Write-Err "Email is required"; exit 1 }
git config --local user.name "$name"
git config --local user.email "$email"

if (-not (Test-Path -Path .git)) {
  Write-Info "Initializing Git repository..."
  git init
} else {
  Write-Info "Repository already initialized."
}

Write-Info "Staging all files..."
git add .

Write-Info "Committing changes..."
$msg = Read-Host "Enter commit message (default: 'Deploy: update site')"
if ([string]::IsNullOrWhiteSpace($msg)) { $msg = "Deploy: update site" }
git commit -m "$msg" 2>$null
if ($LASTEXITCODE -ne 0) { Write-Info "No changes to commit or commit failed (maybe already committed)." }

$remote = Read-Host "Enter remote repository URL (HTTPS or SSH). Leave empty to skip pushing"
if (-not [string]::IsNullOrWhiteSpace($remote)) {
  Write-Info "Setting branch to 'main' and configuring remote..."
  git branch -M main
  # If origin already exists, update it
  $exists = git remote | Select-String -Pattern '^origin$' -Quiet
  if ($exists) {
    Write-Info "Updating existing 'origin' remote"
    git remote set-url origin $remote
  } else {
    git remote add origin $remote
  }

  Write-Info "Pushing to remote 'origin' (this may prompt for credentials)..."
  git push -u origin main
  if ($LASTEXITCODE -ne 0) {
    Write-Err "Push failed. If you need help with authentication or repo permissions, follow the instructions in the README or ask me."
    exit 1
  } else {
    Write-Info "Push succeeded."
  }
} else {
  Write-Info "Remote not provided — skipping push. You can add a remote later with: git remote add origin <url>"
}

Write-Info "Done. If you want, connect this repo to Vercel for automatic deploys from GitHub/GitLab/Bitbucket."
