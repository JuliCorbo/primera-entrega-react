import { useEffect, useState } from "react";
import ProductListPresentacional from "./ProductListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

const ProductListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });

  }, [categoryName]);

  return <ProductListPresentacional items={items} />;
};

export default ProductListContainer;