import error from "../../assets/error.jpg";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <section className="mainSection text-center my-3">
        <div className="w-100 d-flex justify-content-center">
      <img className="w-50" src={error} alt="error 404" />
        </div>
      <div>
        <Link className="mt-3 btn text-black" style={{backgroundColor: 'rgb(242, 169, 182)'}} to='/'>Volver al inicio</Link>
      </div>
    </section>
  );
};

export default Error404;