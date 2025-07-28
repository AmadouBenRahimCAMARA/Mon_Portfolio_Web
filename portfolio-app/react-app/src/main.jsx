import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css' // Importation de App.css
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
