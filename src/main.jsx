import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import GridGenerator from './GridGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GridGenerator />
  </StrictMode>,
)
