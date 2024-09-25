import './App.css'
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Administrador from './components/pages/Administrador'
// import DetalleProducto from './components/pages/DetalleProducto'
import Error404 from './components/pages/Error404'
import Inicio from './components/pages/Inicio'
import Login from './components/pages/Login'
import FormularioProducto from './components/pages/producto/FormularioProducto'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route exact path='/administrador/crear' element={<FormularioProducto titulo="nuevo producto" creandoProducto={true}></FormularioProducto>}></Route>
      <Route exact path='/administrador/editar' element={<FormularioProducto titulo="editar producto" creandoProducto={false}></FormularioProducto>}></Route>
      <Route exact path='/login' element={<Login></Login>}></Route>
      <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
