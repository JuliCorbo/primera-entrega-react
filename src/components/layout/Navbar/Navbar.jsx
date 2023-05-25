import { Button } from "@mui/material"
import "./Navbar.css"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Navbar = () =>{

    return(
        <div className="contenedor-navbar">
            <img src="" alt="" />
            <ul className="menu">
            <Button href="/" variant="contained">
                    Shop
            </Button>
            <Button href="/" variant="contained">
                     Ofertas
            </Button>
            <Button href="/" variant="contained">
                    Nuevos
            </Button>
            </ul>

            {/* react icons */}
            <AiOutlineShoppingCart size={70}/>
        </div>
    )

}
export default Navbar
