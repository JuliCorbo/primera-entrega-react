import { useEffect } from "react"

import { useNavigate } from "react-router-dom"

const CartContainer = () => {

  const navigate = useNavigate()

  const realizarCompra = ()=>{
    console.log("se compraron los productos")
    // navegar
    navigate("/")
  }

  return (
    <div>
        
        <button onClick={realizarCompra}>Comprar</button>
    </div>
  )
}

export default CartContainer