import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({inicial, stock, funcionAgregar}) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="divContador">
      <button className="btnProducto" onClick={decrementar}> - </button>
      <strong> {contador} </strong>
      <button className="btnProducto" onClick={incrementar}> + </button>
      </div>
      <button onClick={() => funcionAgregar(contador) }>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
