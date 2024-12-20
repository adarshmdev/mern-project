import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import HostelFinderHomePage from './pages/HostelFinderHomePage.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HostelFinderHomePage />
  </StrictMode>,
)
