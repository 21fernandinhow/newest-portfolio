import { IoMdSend } from "react-icons/io"
import { useMessages } from "../context/MessagesContext";
import { useState } from "react";

export const MessageInput = () => {
    const { sendMessageToAI, isWaitingAnswer } = useMessages()
    const [userInputText, setUserInputText] = useState("")

    const handleSend = () => {
        sendMessageToAI(userInputText, 'user')
        setUserInputText("")
    }

    return (
        <div className="user-message-input glass-background-container">
            <input
                placeholder="Digite aqui sua mensagem..."
                onChange={(e) => setUserInputText(e.target.value.slice(0, 250))}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && !isWaitingAnswer) {
                        e.preventDefault();
                        handleSend()
                    }
                }}
                value={userInputText}
            />
            <button
                onClick={handleSend} disabled={isWaitingAnswer}
            >
                <IoMdSend />
            </button>
        </div>
    )
}