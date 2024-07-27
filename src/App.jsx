import { useState } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Produtos from './pages/produtos'
import Sobre from './pages/sobre'
import Contato from './pages/contato'
import Cabelos from './pages/cabelos'
import ProdutosMasculino from './pages/produtos-masculino'
import Maquiagem from './pages/maquiagem'
import Perfumaria from './pages/perfumaria'
import Presentes from './pages/presentes'
import CorpoeBanho from './pages/corpoebanho'
import Skincare from './pages/skincare'
import Boca from './pages/boca'
import Rosto from './pages/rosto'
import Olhos from './pages/olhos'
import Paletas from './pages/paletas'
import Unhas from './pages/unhas'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/produtos" element={<Produtos/>}/>
         <Route path="/sobre" element={<Sobre/>}/>
         <Route path="/contato" element={<Contato/>}/>
         <Route path="/cabelos" element={<Cabelos/>}/>
         <Route path="/produtos-masculino" element={<ProdutosMasculino/>}/>
         <Route path="/maquiagem" element={<Maquiagem/>}/>
         <Route path="/perfumaria" element={<Perfumaria/>}/>
         <Route path="/presentes" element={<Presentes/>}/>
         <Route path="/corpoebanho" element={<CorpoeBanho/>}/>
         <Route path="/skincare" element={<Skincare/>}/>
         <Route path="/boca" element={<Boca/>}/>
         <Route path="/rosto" element={<Rosto/>}/>
         <Route path="/olhos" element={<Olhos/>}/>
         <Route path="/paletas" element={<Paletas/>}/>
         <Route path="/unhas" element={<Unhas/>}/>
    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
