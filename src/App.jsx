import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Catalogo from './pages/catalogo/Catalogo'
import Home from './pages/Home'
import Filme from './pages/filme/Filme'
import Favoritos from './pages/favoritos/Favorito'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path='/filme/:id' element={<Filme />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App