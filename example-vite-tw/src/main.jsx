import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './js/Navbar.jsx'
import Slider from './js/Slider.jsx'
import CollectionsCard from './js/CollectionsCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Slider/>
    <CollectionsCard/>
  </StrictMode>,
)
