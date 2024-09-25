import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { buscarRecetaAPI } from "../../helpers/queries";
const DetalleProducto = () => {
  const {id} = useParams()
  const [recetas,setRecetas]=useState({})
  useEffect(()=>{
    const encontrarRect = async()=>{
      const data = await buscarRecetaAPI(id)
      const rect = await data.json()
      setRecetas(rect)
    }
    encontrarRect()
  },[])

  return (
    <div className="mainSection">
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-2">
              <img className="w-100" src={recetas.imagen} />
            </div>
            <div className="col-10">
          <Card.Title>{recetas.nombreReceta} </Card.Title>
          <Card.Title>{recetas.categoria} </Card.Title>
          <Card.Text>
            {recetas.descripcion}
          </Card.Text>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
        <Link className="mt-3 btn text-black" style={{backgroundColor: 'rgb(242, 169, 182)'}} to='/'>Volver al inicio</Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default DetalleProducto;