import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User_Context from './global/User_Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <User_Context>
    <App />
    </User_Context>
  </StrictMode>,
)
