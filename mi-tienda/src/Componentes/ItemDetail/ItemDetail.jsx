import React, { useState } from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext} from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock, descrip }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos Agregados: " + cantidad)
    const item = {id, nombre, precio}
    agregarProducto(item, cantidad);
  }

  return (
    <div className="divDetail">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>      
      <strong>{descrip}</strong>
      <br/>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
    </div>
  );
};

export default ItemDetail;
