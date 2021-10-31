import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { PokemonUseFetch } from "./PokemonUseFetch";
import { Link } from "react-router-dom"


export const CardPokemon = ({ url }) => {

    const estado = PokemonUseFetch(url);
    const { cargando, data } = estado;

    const [show, setShow] = useState(false);

    return (
        <div>
            {cargando ? (
                <h1 style={{ textAlign: "center" }}> cargando</h1>
            ) : (
                <Container>
                   <Row>
                       <Col>
                                <Card
                                    style={{
                                        width: "10rem",
                                        boxShadow: "3px 25px 60px turquoise",
                                        margin: "10px",
                                    }}
                                >
                                    <h3 style={{ textAlign: "center" }}>{data.name}</h3>
                                    <img
                                        style={{
                                            width: "8rem",
                                            boxShadow: "2px 15px 30px turquoise",
                                            margin: "15px",
                                        }}
                                        src={data.sprites.front_default}
                                    ></img>
                                    <h8 style={{marginLeft:'50px'}}>#: {data.id}</h8>
                                    <p>Heigth: {data.height}, Weight: {data.weight}, Tipo: {data.types.map(tipos => tipos.type.name)},
                                    Abilities: {data.abilities[0].ability.name}</p>
                                    {/* <Link to={`/detalle/${data.name} `}> <img  style={{margin: '20px', borderRadius: '10px',padding: '10px', fontZise: '19px', alignContent: 'center', width: "50px"}}src="https://res.cloudinary.com/danimel/image/upload/v1635553614/click_1_eufvlq.png"/></Link> */}
                                    <button onClick={() => setShow(true)} style={{ justifyContent: 'center', marginBottom: '5px', borderRadius: '15px', padding: '5px', background:'white', border: '1px solid turquoise'}}><img style={{borderRadius: '25px',   alignContent: 'center', width: "30px" }} src="https://res.cloudinary.com/danimel/image/upload/v1635553614/click_1_eufvlq.png" /></button>
                                  
                           </Card>
                                         </Col>
                   </Row>
                  
                    <Modal
                            style={{
                              marginLeft: '30px',
                                boxShadow: "2px 25px 60px turquoise",
                                margin: "30px",
                              }}
                              size="lg"
                            show={show}
                            onHide={() => setShow(false)}
                           
                        >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                       <h1 style={{textAlign: 'center'}}>{data.name}</h1>
                        </Modal.Title>
                        </Modal.Header>
                       
                        <Modal.Body>
                           
                        <Container style={{margin: '20px', justifyContent: 'center'}}>
                          
                            <img style={{margin: '10px', width: '100px'}} src={data.sprites.back_default} />
                            <img style={{margin: '10px', width: '150px'}} src={data.sprites.other.dream_world.front_default} />
                            <img style={{margin: '10px', width: '100px'}} src={data.sprites.back_shiny} />
                            <img style={{margin: '10px', width: '100px'}}  src={data.sprites.front_shiny} />
                        </Container>

                    <div style={{marginLeft: '30px', marginRight: '30px'}}>
                        <h3 style={{textAlign: 'center'}}>#: {data.id}</h3>
                        <h4 style={{textAlign: 'center'}}> Base Experience: {data.base_experience} EXP</h4>
                        <h5>Height: {data.height}</h5>
                        <h5>Weight: {data.weight}</h5>
                        <h5>Types: {data.types.map(tipos => tipos.type.name).join("/")}</h5>
                        <h5 style={{textAlign: 'justify'}}>Moves: {data.moves.map(mov => mov.move.name).join(", ")}</h5>
                    </div>

                   
                      <Link to="/"><button style={{borderRadius: '10px', padding: '10px',  textAlign: 'center',}}><img style={{width: '40px'}} src="https://res.cloudinary.com/danimel/image/upload/v1635544505/right-arrow2_s0u4ct.png"/></button></Link>
                   
                        </Modal.Body>
                        </Modal>
                    </Container>
                 
              
            )}
          
        </div>
    );
};
