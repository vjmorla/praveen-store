import React from 'react'
import { MessageCircle } from 'lucide-react'
import { SITE } from '../data/siteConfig'

export default function WhatsAppButton() {
  const phone = SITE.whatsapp || ''
  const href = phone ? `https://wa.me/${phone.replace(/[^0-9]/g, '')}` : '#'
  return (
    <a
      aria-label="WhatsApp"
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center"
    >
      <MessageCircle size={20} />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
