import React, { useEffect, useState } from "react";
import { ProductListPresentacional } from "./ProductListPresentacional";



 const ProductList =()=>{
    const [ frase, setFrase] = useState("todavia no")

    useEffect(()=>{
        const tarea = new Promise((resolve, reject) =>{
          setTimeout(()=>{
            resolve("ya esta")
          },3000)|
        });
        
        tarea
            .then((res)=>{
                setFrase(res)
            })
            .catch((err)=>{
                console.log("catch: ", err)
            })



    },[])

    return <h1> {frase} </h1>

  
}  

export default ProductList