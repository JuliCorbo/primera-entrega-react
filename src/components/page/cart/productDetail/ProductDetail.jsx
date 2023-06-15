import { ItemCount } from "../../../common/productCard/ItemCount";
import "./ProductDetail.css"

const ProductDetail = ({ productSelected }) => {

  const onAdd = (cantidad) => {
    
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <>
      <div className="detailProduct">
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>No hay stock</h3>
      )}
    </>
  );
};

export default ProductDetail;