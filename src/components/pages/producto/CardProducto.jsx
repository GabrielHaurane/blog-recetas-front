import { Col, Card, Button, CardFooter } from "react-bootstrap";
import DetalleProducto from "../DetalleProducto"
import { Link } from "react-router-dom";
const CardProducto = ({recetas}) => {
  return (
    <div className="my-2 col-3">
            <Card>
              <Card.Img variant="top" src={recetas.imagen} />
              <Card.Body>
                <h5 className="verdeOscuro">{recetas.nombreReceta} </h5>
                <div className="p-0 m-0">
                  <b>Categoria: {recetas.categoria} </b>
                </div>
                <Card.Text>
                  {recetas.descripcion_breve}
                </Card.Text>
              </Card.Body>
              <CardFooter>
                <div className="text-end">
                  <Link
                    to={`./DetalleProducto/${recetas.id}`}
                    className="btn text-black" style={{backgroundColor: 'rgb(242, 169, 182)'}}
                  >
                    Ver detalle
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
  );
};

export default CardProducto;