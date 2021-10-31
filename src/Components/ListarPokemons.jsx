import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { CardPokemon } from "./CardPokemon";



export const ListarPokemons = ({ results }) => {
  return (
    <Container>
            <Row>
              {results.map((poke) => (
              <Col>
              
              <Card style={{margin:'30px', justifyContent: 'center', }} key={poke.name}>
                <CardPokemon url={poke.url} />
              
              </Card>
              </Col>
                        ))}
            </Row>
    
    </Container>
  );
};
