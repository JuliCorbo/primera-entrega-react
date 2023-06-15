import { useCount } from "../../hooks/useCount";
import "./ProductCard.css"

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="countContainer">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};