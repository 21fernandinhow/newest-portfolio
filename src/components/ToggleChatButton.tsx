import { IoMdClose } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";

interface ToggleChatButtonProps {
    chatIsOpen: boolean
    toggleChat: () => void
}

export const ToggleChatButton = ({ chatIsOpen, toggleChat }: ToggleChatButtonProps) => (
    <button className="toggle-chat-button" onClick={toggleChat}>
        {chatIsOpen ? <IoMdClose /> : <IoChatbubblesSharp />}
    </button>
)
