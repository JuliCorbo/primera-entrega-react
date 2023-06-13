import Navbar from "./components/layout/Navbar/Navbar"
import FetchingDeDatosContenedor from "./components/page/fetchingDeDatos/FetchingDeDatosContenedor"
import ProductList from "./components/page/productList/ProductList"
import { ProductListPresentacional } from "./components/page/productList/ProductListPresentacional"



const app = () =>{
    return (
        <div>
            
            <Navbar/>
            <ProductListPresentacional/>
           <FetchingDeDatosContenedor/>
           <ProductList/>

        </div>
     
    )
}

export default app
