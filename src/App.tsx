import { Suspense } from "react";
import { ContentCarousel } from "./components/ContentCarousel";
import { FloatingChat } from "./components/FloatingChat";
import { MessageInput } from "./components/MessageInput";
import { Samantha } from "./components/Samantha";
import ThemeButton from "./components/ThemeButton";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { GlobalLoader } from "./components/GlobalLoader";
import { useLanguage } from "./context/LanguageContext";
import { useMessages } from "./context/MessagesContext";
import './styles/index.scss';

const App = () => {

  const { translation } = useLanguage()
  const { sendMessageToAI } = useMessages()

  return (
    <>
      <ThemeButton />

      <Suspense fallback={<GlobalLoader />}>

        <ContentCarousel
          items={[
            { content: <HomePage /> },
            {
              content: <ProjectPage
                title="tudoaqui.click"
                projectUrl="https://tudoaqui.click"
                imgSrc="./tudoaqui.webp"
                slug="tudoaqui"
              />,
              onFirstView: () => sendMessageToAI(translation.userViewProject + "tudoaqui.click", "system")
            },
            {
              content: <ProjectPage
                title="Bolso Cheio AI"
                projectUrl="https://bolsocheio.ai"
                imgSrc="./bolsocheioai.webp"
                slug="bolsocheio"
              />,
              onFirstView: () => sendMessageToAI(translation.userViewProject + "Bolso Cheio AI", "system")
            },
            {
              content: <ProjectPage
                title="ByteClass"
                projectUrl="https://byteclass.dev"
                imgSrc="./byteclass.webp"
                slug="byteclass"
              />,
              onFirstView: () => sendMessageToAI(translation.userViewProject + "ByteClass", "system")
            },
            {
              content: <ProjectPage
                title="Time Messages"
                projectUrl="https://timemessages.vercel.app"
                imgSrc="./time-messages.webp"
                slug="timemessages"
              />,
              onFirstView: () => sendMessageToAI(translation.userViewProject + "Time Messages", "system")
            },
            {
              content: <ProjectPage
                title="Horas Iguais"
                projectUrl="https://significadohorasiguais.com"
                imgSrc="./horasiguais.webp"
                slug="horasiguais"
                customClass="trophy"
              />,
              onFirstView: () => sendMessageToAI(translation.userViewProject + "Horas Iguais", "system")
            },
            {
              content: <ProjectPage
                title="Quanto falta para copa"
                projectUrl="https://quantofaltaparacopa.com.br"
                imgSrc="./quantofaltaparacopa.webp"
                slug="quantofaltaparacopa"
                customClass="trophy"
              />,
              onFirstView: () => sendMessageToAI(translation.userViewProject + "Quanto falta para copa", "system")
            },
            { content: <ContactPage /> }
          ]}
        />

        <FloatingChat />
        <Samantha />
        <MessageInput />

      </Suspense>
    </>
  );
};

export default App;