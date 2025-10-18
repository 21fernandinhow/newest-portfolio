import React, { createContext, useContext, useState } from "react";
import { systemMessage } from "../samanthaPrompt";
import { useLanguage } from "./LanguageContext";

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface MessagesContextType {
  messages: Message[];
  sendMessageToAI: (text: string, role: "user" | "system") => void;
  isWaitingAnswer: boolean;
}

interface MessageProviderProps {
  children: React.ReactNode;
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) throw new Error("useMessages must be used within a MessagesProvider");
  return context;
};

export const MessagesProvider = ({ children }: MessageProviderProps) => {
  const { translation, language } = useLanguage();

  const encriptedKey = import.meta.env.VITE_GEMINI_APIKEY;
  const decriptedKey = atob(encriptedKey).split("").reverse().join("");

  const model = "gemini-2.5-flash";

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        systemMessage +
        new Date().toISOString() +
        " converse com ele no idioma: " +
        language,
    },
    {
      role: "assistant",
      content: translation.samantha.initialMessage,
    },
  ]);

  const [isWaitingAnswer, setIsWaitingAnswer] = useState(false);

  const sendMessageToAI = async (messageText: string, role: "user" | "system") => {
    setIsWaitingAnswer(true);
    const newArrayMessages = [...messages, { role, content: messageText }];
    setMessages(newArrayMessages);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${decriptedKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: newArrayMessages.map((msg) => ({
              role: msg.role === "assistant" ? "model" : "user",
              parts: [{ text: msg.content }],
            })),
          }),
        }
      );

      const data = await response.json();

      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Desculpe, não consegui gerar uma resposta agora.";

      setMessages([
        ...newArrayMessages,
        { role: "assistant", content: reply },
      ]);
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
    }

    setIsWaitingAnswer(false);
  };

  return (
    <MessagesContext.Provider
      value={{ messages, sendMessageToAI, isWaitingAnswer }}
    >
      {children}
    </MessagesContext.Provider>
  );
};