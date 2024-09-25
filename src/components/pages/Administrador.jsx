import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { leerProductoAPI } from '../../helpers/queries';
import ItemProducto from './producto/ItemProducto'
import Swal from 'sweetalert2';

const Administrador = () => {
    const [listaProductos, setListaProductos] = useState([])
    useEffect(()=>{
        obtenerProducto();
    })
    const obtenerProducto = async ()=>{
        const respuesta = await leerProductoAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json()
            setListaProductos(datos)
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `en estos momentos no podemos mostrar los productos, intenta mas tarde`,
                
              })
        }
    }
    return (
        <section className='container'>
            <div className='d-flex justify-content-between align-items-center my-5'>
                <h1 className='display-4'>Productos Disponibles</h1>
                <Link className='btn btn-primary' to="/administrador/crear">
                <i className="bi bi-file-plus"></i>
                </Link>
            </div>
            <hr />
            <Table responsive striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Code</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>URL de imagen</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaProductos.map((producto, posicion)=> <ItemProducto key={producto.id} producto={producto} fila={posicion + 1} setListaProductos={setListaProductos}></ItemProducto>)
                    }
                </tbody>
            </Table>
        </section>
    );
};

export default Administrador;