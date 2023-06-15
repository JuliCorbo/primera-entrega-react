import Layout from "./components/layout/Layout";

import CartContainer from "./components/page/cart/CartContainer";
import ProductDetailContainer from "./components/page/cart/productDetail/ProductDetailContainer";
import ProductListContainer from "./components/page/productList/ProductListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductListContainer />} />

          <Route path="/category/:categoryName" element={<ProductListContainer />} />

          <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
          
          <Route path="/carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

