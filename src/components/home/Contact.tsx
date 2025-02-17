import React, { useState } from 'react'
import Container from '../layout/Container'
import { ChatBubbleLeftIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const contactInfo = [
    { id: 'discord', icon: ChatBubbleLeftIcon, label: 'Discord', value: 'vdjq' },
    { id: 'phone', icon: PhoneIcon, label: 'Phone', value: '572-500-3007' }
  ]

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-glow">
            Let's Connect
          </h1>
          <p className="text-gray-300 text-lg mb-12">
            Message me on any of these platforms.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCopy(item.value, item.id)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 
                         cursor-pointer transition-all duration-300 hover:bg-white/10 
                         hover:border-white/20 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-gray-400 font-mono">{item.value}</p>
                </div>
              </div>
              
              <div className={`absolute inset-0 flex items-center justify-center bg-black/80 rounded-2xl
                              transition-opacity duration-300 ${copiedField === item.id ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-green-400 font-medium">Copied!</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Prefer email? Contact me at{' '}
            <a href="mailto:iamvdjq@outlook.com" 
               className="text-white hover:text-purple-400 transition-colors">
              iamvdjq@outlook.com
            </a>
          </p>
        </div>
      </Container>

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  )
} 