import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaAPI, leerRecetaAPI } from "../../../helpers/queries.js";
import { Link } from "react-router-dom";

const ItemProducto = ({recetas, fila, setListaRecetas}) => {
    const borrarReceta = ()=>{
        Swal.fire({
            title: "estas seguro de borrar la receta?",
            text: "no puedes revertir la operacion",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(242, 169, 182)",
            cancelButtonColor: "rgb(169, 60, 80)",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
          }).then(async(result) => {
            if (result.isConfirmed) {
              // pedir a la api borrar el receta
              const respuesta = await borrarRecetaAPI(recetas._id)
              if (respuesta.status === 200) {
                Swal.fire({
                  title: "receta eliminada",
                  text: `La receta ${recetas.nombreReceta}, fue borrada correctamente`,
                  icon: "success"
                });
                // actualizar el state del administrador
                const recetaAPI = await leerRecetaAPI();
                if (recetaAPI.status === 200) {
                  const recetasActualizados = await recetaAPI.json()
                  setListaRecetas(recetasActualizados)
                } 
                // setListarecetas
      
              } else {
                Swal.fire({
                  title: "Ocurrio un error",
                  text: `La receta ${recetas.nombreReceta}, no fue borrado. intente mas tarde`,
                  icon: "error"
                });
              }
            }
          });
    }
    return (
      <tr>
      <td className="text-center">{fila}</td>
      <td>{recetas.nombreReceta}</td>
      <td className="text-center">
        <img
          src={recetas.imagen}
          className="img-thumbnail"
          alt={recetas.nombreRecetas}
        ></img>
      </td>
      <td>{recetas.categoria}</td>
      <td className="text-center">
        <Link className="btn text-dark me-lg-2" style={{backgroundColor: 'rgb(242, 169, 182)'}}  to={`/administrador/editar/${recetas._id}`} variant="warning">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button style={{backgroundColor: 'rgb(169, 60, 80)'}} onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemProducto;