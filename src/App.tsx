import { Suspense, useState } from "react";
import { GlobalLoader } from "./components/GlobalLoader";
import { ThemeButton } from "./components/ThemeButton";
import { ToggleChatButton } from "./components/ToggleChatButton";
import { ContentCarousel } from "./components/ContentCarousel";
import { Samantha } from "./components/Samantha";
import { ChatDrawer } from "./components/ChatDrawer";
import { FooterAIButton } from "./components/FooterAIButton";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { ContactPage } from "./pages/ContactPage";
import './styles/index.scss';


const App = () => {

  const [chatIsOpen, setChatIsOpen] = useState(false)

  return (
    <>
      <ThemeButton />

      <Suspense fallback={<GlobalLoader />}>

        <ToggleChatButton chatIsOpen={chatIsOpen} toggleChat={() => setChatIsOpen(prevState => !prevState)} />

        <ContentCarousel
          items={[
            <HomePage />,
            <ProjectPage
              title="tudoaqui.click"
              projectUrl="https://tudoaqui.click"
              imgSrc="./tudoaqui.webp"
              slug="tudoaqui"
              openChat={() => setChatIsOpen(true)}
            />,
            <ProjectPage
              title="Bolso Cheio AI"
              projectUrl="https://bolsocheio.ai"
              imgSrc="./bolsocheioai.webp"
              slug="bolsocheio"
              openChat={() => setChatIsOpen(true)}
            />,
            <ProjectPage
              title="ByteClass"
              projectUrl="https://byteclass.dev"
              imgSrc="./byteclass.webp"
              slug="byteclass"
              openChat={() => setChatIsOpen(true)}
            />,
            <ProjectPage
              title="Time Messages"
              projectUrl="https://timemessages.vercel.app"
              imgSrc="./time-messages.webp"
              slug="timemessages"
              openChat={() => setChatIsOpen(true)}
            />,
            <ProjectPage
              title="Horas Iguais"
              projectUrl="https://significadohorasiguais.com"
              imgSrc="./horasiguais.webp"
              slug="horasiguais"
              customClass="trophy"
              openChat={() => setChatIsOpen(true)}
            />,
            <ProjectPage
              title="Quanto falta para copa"
              projectUrl="https://quantofaltaparacopa.com.br"
              imgSrc="./quantofaltaparacopa.webp"
              slug="quantofaltaparacopa"
              customClass="trophy"
              openChat={() => setChatIsOpen(true)}
            />,
            <ContactPage />
          ]}
        />

        <Samantha />

        <FooterAIButton openChat={() => setChatIsOpen(true)} />

        <ChatDrawer isOpen={chatIsOpen} />

      </Suspense>
    </>
  );
};

export default App;