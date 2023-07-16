import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWirdget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  const imgCarrito =
    "https://img1.freepng.es/20171220/jpe/shopping-cart-png-5a3a8fca5f1485.3449050215137873383895.jpg";
  return (
    <div>
        <Link to="/cart">
              <img className="imgCarro" src={imgCarrito} alt="carrito de compras" />
              {
                cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
              }

        </Link>



      
      
    </div>
  );
};

export default CartWirdget;
