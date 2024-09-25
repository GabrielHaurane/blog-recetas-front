import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { leerRecetaAPI } from '../../helpers/queries';
import ItemProducto from './producto/ItemProducto'
import Swal from 'sweetalert2';

const Administrador = () => {
    const [listaRecetas, setListaRecetas] = useState([])
    useEffect(()=>{
        obtenerReceta();
    }, [])
    const obtenerReceta = async ()=>{
        const respuesta = await leerRecetaAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json()
            setListaRecetas(datos)
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `en estos momentos no podemos mostrar los Recetas, intenta mas tarde`,
                
              })
        }
    }
    return (
        <section className='container mainSection'>
            <div className='d-flex justify-content-between align-items-center my-5'>
                <h1 className='display-4'>Recetas Disponibles</h1>
                <Link className='btn text-dark' style={{backgroundColor: 'rgb(242, 169, 182)'}} to="/administrador/crear">
                <i className="bi bi-file-plus"></i>
                </Link>
            </div>
            <hr />
            <Table responsive striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Code</th>
                        <th>Receta</th>
                        <th>URL de imagen</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaRecetas.map((recetas, posicion)=> <ItemProducto key={recetas.id} recetas={recetas} fila={posicion + 1} setListaRecetas={setListaRecetas}></ItemProducto>)
                    }
                </tbody>
            </Table>
        </section>
    );
};

export default Administrador;