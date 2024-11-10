'use client'

import { useEffect, useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

const CHATBOT_CONFIG = {
  chatbotId: 'VMWFkPyfijQ4hJbwBKORt',
  domain: 'www.chatbase.co'
} as const

const ChatbotEmbed = () => {
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadChatbot = async () => {
      try {
        // Check if script is already loaded
        if (document.querySelector(`script[src*="${CHATBOT_CONFIG.domain}"]`)) {
          return
        }

        const script = document.createElement('script')
        script.src = 'https://www.chatbase.co/embed.min.js'
        script.async = true
        script.defer = true
        script.setAttribute('chatbotId', CHATBOT_CONFIG.chatbotId)
        script.setAttribute('domain', CHATBOT_CONFIG.domain)

        // Handle script loading errors
        script.onerror = () => {
          setError('Failed to load chatbot. Please refresh the page or try again later.')
          script.remove()
        }

        // Cleanup function
        const cleanup = () => {
          script.remove()
          delete window.embeddedChatbotConfig
        }

        // Set global config
        window.embeddedChatbotConfig = CHATBOT_CONFIG

        document.body.appendChild(script)

        // Cleanup on unmount
        return cleanup
      } catch (err) {
        setError('An error occurred while initializing the chatbot.')
        console.error('Chatbot initialization error:', err)
      }
    }

    loadChatbot()
  }, [])

  return (
    <div className="relative">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {/* Chatbot will be mounted here by the external script */}
      <div id="chatbot-container" className="min-h-[500px]" />
    </div>
  )
}

declare global {
  interface Window {
    embeddedChatbotConfig?: typeof CHATBOT_CONFIG
  }
}

export default ChatbotEmbed
