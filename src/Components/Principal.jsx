
import React, { useState } from 'react'
import { ListarPokemons } from './ListarPokemons'

import { PokemonUseFetch } from './PokemonUseFetch'
import { Container, Col} from 'react-bootstrap'


export const Principal = () => {

    const [url, setUrl]= useState('https://pokeapi.co/api/v2/pokemon')
    const estado=PokemonUseFetch(url)
    const {cargando, data}=estado
    console.log("dentro de principal")
    
    cargando? console.log('cargando'): console.log(data.results)

    return (
        <div>
           
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
            
                <ListarPokemons results={data.results}/>
          
                
           
            }
             <Container style={{textAlign: 'center'}}>
              
                <button style={{ border: '0px solid ', padding: '20px', color: 'white'}} onClick={()=>setUrl(data.previous)}><img style={{width: "50px"}} src="https://res.cloudinary.com/danimel/image/upload/v1635544505/right-arrow2_s0u4ct.png"/></button>
                <button style={{ margin: '20px', border: '0px solid ', padding: '20px', color: 'white'}} onClick={()=>setUrl(data.next)}><img style={{width: "50px"}} src="https://res.cloudinary.com/danimel/image/upload/v1635544505/right-arrow_rhb93q.png"/></button>

            </Container>
        </div>
    )
}
