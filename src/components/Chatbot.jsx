"use client"
import { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.setAttribute('chatbotId', 'VMWFkPyfijQ4hJbwBKORt');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);
  }, []);

  return (
    <script>
      {`
        window.embeddedChatbotConfig = {
          chatbotId: "VMWFkPyfijQ4hJbwBKORt",
          domain: "www.chatbase.co"
        };
      `}
    </script>
  );
};

export default ChatbotEmbed;