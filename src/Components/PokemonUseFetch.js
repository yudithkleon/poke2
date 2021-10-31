//

import React, {useState, useEffect} from 'react'

export const PokemonUseFetch = (url) => {

    const [obtener, setObtener] = useState({cargando: true, data: null} )
   
    useEffect(() => {
       getDatos(url)
    }, [url])


   const getDatos = async (url)=>{
       try{
        setObtener({cargando: true, data: null})
        const resp=await fetch(url)
        const data= await resp.json()
        setObtener({cargando:false, data})
       }
       catch(e){
           console.log(e)
       }
      
   }
    return obtener
}
