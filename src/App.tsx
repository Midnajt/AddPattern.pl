import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ForDevsPage from './pages/ForDevsPage'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-bg font-body text-text">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dla-devow" element={<ForDevsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
