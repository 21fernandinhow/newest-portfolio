import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useMessages } from "../context/MessagesContext";
import { MessageInput } from "./MessageInput";

interface ChatDrawerProps {
    isOpen: boolean
}

export const ChatDrawer = ({ isOpen }: ChatDrawerProps) => {

    const { translation } = useLanguage()
    const { messages } = useMessages()

    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className={`chat-drawer ${isOpen ? "open" : ""}`}>
            <div className="chat-body" ref={messagesContainerRef}>
                {messages.filter((msg) => msg.role !== "system").map((msg, index) => (
                    <div
                        key={index}
                        className={`chat-message ${msg.role === "user" ? "user-message" : ""}`}
                    >
                        {msg.role === "user" ? <h4>{translation.you}</h4> : <h4>Samantha</h4>}
                        <p>{msg.content}</p>
                    </div>
                ))}
            </div>
            <MessageInput />
        </div>
    );
}