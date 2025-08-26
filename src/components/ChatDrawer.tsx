import { useLanguage } from "../context/LanguageContext";
import { useMessages } from "../context/MessagesContext";
import { MessageInput } from "./MessageInput";

interface ChatDrawerProps {
    isOpen: boolean
}

export const ChatDrawer = ({ isOpen }: ChatDrawerProps) => {

    const { translation } = useLanguage()
    const { messages } = useMessages()

    return (
        <div className={`chat-drawer ${isOpen ? "open" : ""}`}>
            <div className="chat-body">
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