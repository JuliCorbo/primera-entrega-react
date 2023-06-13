import  { useEffect, useState } from 'react'
import  FetchingDeDatos  from "./FetchingDeDatos";

const FetchingDeDatosContenedor = () => {
    const [users, setUsers] = useState ([]);
    console.log(users)

    useEffect(()=>{
      

        const promiseData = fetch  ("https://jsonplaceholder.typicode.com/users")
        promiseData
        .then((res)=>res.json())
        .then((data)=> setUsers(data))
     
        .catch((err)=>{console.log("no",err)})
     

    },[])

   

  return <FetchingDeDatos />
}

export default FetchingDeDatosContenedor


