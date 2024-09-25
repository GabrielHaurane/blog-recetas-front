import './App.css'
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetalleProducto from './components/pages/DetalleProducto'
import Error404 from './components/pages/Error404'
import Inicio from './components/pages/Inicio'
import Login from './components/pages/Login'
import RutasAdmin from './components/Routes/RutasAdmin'
import RutasProtegidas from './components/Routes/RutasProtegidas'
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/detalleproducto/:id' element={<DetalleProducto></DetalleProducto>}></Route>
      <Route exact path="/administrador/*" element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }></Route>
      <Route exact path='/login' element={<Login></Login>}></Route>
      <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
