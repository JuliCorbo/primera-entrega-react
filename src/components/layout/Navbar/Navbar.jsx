// import { Button } from "@mui/material"
import "./Navbar.css"
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";

import { Link } from "react-router-dom";
const Navbar = () =>{

    return(
        <div className="containerNavbar">
            
         
                <Link to="/">Inicio</Link>
           <Link to="/category/Filtros">Filtros</Link>
           <Link to="/category/Escapes">Escapes</Link>
           <Link to="/category/Valvulas">Valvulas</Link>
           <Link to="/category/Rodados">LLantas</Link>
            
           

            {/* react icons */}
          
            
          <Badge badgeContent={7} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        
        </div>
    )

}
export default Navbar
