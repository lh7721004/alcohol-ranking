import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import BottleInputPage from './pages/BottleInputPage'
import QRPage from './pages/QRPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/bottleinput" element={<BottleInputPage/>} />
          <Route path="/qr" element={<QRPage/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
