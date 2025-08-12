import { FloatingChat } from "./components/FloatingChat"
import { MessageInput } from "./components/MessageInput"
import { Samantha } from "./components/Samantha"
import { MessagesProvider } from "./context/MessagesContext"
import './styles/index.scss'

const App = () => {

  return (
    <>
      <MessagesProvider>
        <FloatingChat />
        <Samantha />
        <MessageInput />
      </MessagesProvider>
    </>
  )
}

export default App
