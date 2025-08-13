import { ContentCarousel } from "./components/ContentCarousel"
import { FloatingChat } from "./components/FloatingChat"
import { MessageInput } from "./components/MessageInput"
import { Samantha } from "./components/Samantha"
import ThemeButton from "./components/ThemeButton"
import { MessagesProvider } from "./context/MessagesContext"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import { ProjectPage } from "./pages/ProjectPage"
import './styles/index.scss'

const App = () => {

  return (
    <>
      <MessagesProvider>

        <ThemeButton />

        <ContentCarousel
          items={[
            <HomePage />,
            <ProjectPage
              title="tudoaqui.click"
              projectUrl="https://tudoaqui.click"
              imgSrc="./tudoaqui.webp"
              slug="tudoaqui"
            />,
            <ProjectPage
              title="Bolso Cheio AI"
              projectUrl="https://bolsocheio.ai"
              imgSrc="./bolsocheioai.webp"
              slug="bolsocheio"
            />,
            <ProjectPage
              title="ByteClass"
              projectUrl="https://byteclass.dev"
              imgSrc="./byteclass.webp"
              slug="byteclass"
            />,
            <ProjectPage
              title="Time Messages"
              projectUrl="https://timemessages.vercel.app"
              imgSrc="./time-messages.webp"
              slug="timemessages"
            />,
            <ProjectPage
              title="Quanto falta para copa"
              projectUrl="https://quantofaltaparacopa.com.br"
              imgSrc="./quantofaltaparacopa.webp"
              slug="quantofaltaparacopa"
              customClass="trophy"
            />,
            <ContactPage />
          ]}
        />

        <FloatingChat />

        <Samantha />

        <MessageInput />

      </MessagesProvider>
    </>
  )
}

export default App
