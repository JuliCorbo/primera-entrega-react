import ProductCard from "../../common/productCard/ProductCard";
import "./ProductList.css"
const ProductListPresentacional = ({ items }) => {
 
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ProductListPresentacional;