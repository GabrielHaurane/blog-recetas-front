import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import banner from "../img/banner.jpg"


const Inicio = () => {
  return (
    <div className="mainSection">
      <img
        className="banner"
        src={banner}
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />

        <Row>
          <CardProducto></CardProducto>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
