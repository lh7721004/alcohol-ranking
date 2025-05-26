import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import BottleInput from './pages/BottleInput'
import QR from './pages/QR'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/bottleinput" element={<BottleInput/>} />
          <Route path="/qr" element={<QR/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
