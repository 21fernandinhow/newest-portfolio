import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { MessagesProvider } from './context/MessagesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <MessagesProvider>
        <App />
      </MessagesProvider>
    </LanguageProvider>
  </StrictMode>,
)
