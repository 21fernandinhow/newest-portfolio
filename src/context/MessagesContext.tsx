import React, { createContext, useContext, useEffect, useState } from "react";
import { systemMessage } from "../samanthaPrompt";

export interface Message {
  role: string
  content: string
}

interface MessagesContextType {
  messages: Message[];
  sendMessageToAI: (text: string, role: string) => void;
  isWaitingAnswer: boolean
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) throw new Error("useMessages must be used within a MessagesProvider");
  return context;
};

export const MessagesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const apiKey = import.meta.env.VITE_OPENAI_APIKEY;
  const model = "gpt-3.5-turbo"
  const [messages, setMessages] = useState<Message[]>([])
  const [isWaitingAnswer, setIsWaitingAnswer] = useState(false)

  const sendMessageToAI = async (messageText: string, role: string) => {

    setIsWaitingAnswer(true)
    const newArrayMessages = [...messages, { role: role, content: messageText }]
    setMessages(newArrayMessages)

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: model,
          messages: newArrayMessages, // messages
          max_tokens: 250,
          temperature: 0.5
        }),
      });

      const data = await response.json();
      setMessages([
        ...newArrayMessages,
        { role: 'assistant', content: data.choices[0].message.content.slice(0, 250) }
      ]);

    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }

    setIsWaitingAnswer(false)
  }

  useEffect(() => {
    if (messages.length === 0 && !isWaitingAnswer) sendMessageToAI(`${systemMessage} ${new Date().toISOString()}`, 'system')
  }, [])

  return (
    <MessagesContext.Provider value={{ messages, sendMessageToAI, isWaitingAnswer }}>
      {children}
    </MessagesContext.Provider>
  );
};