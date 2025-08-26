import { IoMdSend } from "react-icons/io"
import { useMessages } from "../context/MessagesContext";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const MessageInput = () => {
    const { sendMessageToAI, isWaitingAnswer } = useMessages()
    const { translation } = useLanguage()
    const [userInputText, setUserInputText] = useState("")

    const handleSend = () => {
        sendMessageToAI(userInputText, 'user')
        setUserInputText("")
    }

    return (
        <div className="user-message-input">
            <input
                placeholder={translation.typeHere}
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