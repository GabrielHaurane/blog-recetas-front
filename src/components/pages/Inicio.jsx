import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto.jsx";
import banner from "../img/banner.jpg"
import { useEffect, useState } from "react";
import { leerRecetaAPI } from "../../helpers/queries.js";


const Inicio = () => {
  const [recetas, setRecetas] = useState([]);
  useEffect(()=>{
    obtenerRecetas()
  },[])
  const obtenerRecetas = async () => {
    try {
      const datos = await leerRecetaAPI();
      if (datos.status === 200) {
        const rect = await datos.json()
        setRecetas(rect)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="mainSection">
      <div className="container">
        <h2>Nuestras Recetas</h2>
        <div className="row flex-wrap">
          {
            recetas.map((recetas,index)=>(
              <CardProducto key={index} recetas={recetas} ></CardProducto>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Inicio;
