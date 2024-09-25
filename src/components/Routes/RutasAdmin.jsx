import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Administrador from '../pages/Administrador';
import FormularioReceta from '../pages/producto/FormularioProducto';

const RutasAdmin = () => {
    return (
        <Routes>
            <Route
            exact
            path='/'
            element={<Administrador></Administrador>}
            ></Route>
            <Route
            exact
            path='/crear'
            element={
                <FormularioReceta
                titulo="nuevo Producto"
                creandoReceta={true}
                ></FormularioReceta>
            }
            ></Route>
            <Route
            exact
            path='/editar/:id'
            element={
                <FormularioReceta
                titulo="editar producto"
                creandoReceta={false}
                ></FormularioReceta>
            }
            ></Route>
        </Routes>
    );
};

export default RutasAdmin;