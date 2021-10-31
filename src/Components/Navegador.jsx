import React  from "react";
import {
  Navbar,
  Nav, 
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Components/Reducers/actions/actionLogin";

export const Navegador = () => {

  const dispatch = useDispatch();
  
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
  
    history.push("/login");
  };

    return (
        <div>
<Navbar style={{background: "turquoise"}}>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link style={{ color: "violet" }} href="/home">
                  
              <Link
                  to="/"
                  
                >
                  <img
                    style={{ width: "40px",  marginLeft: "20px", marginBottom:'10px', }}
                    src="https://res.cloudinary.com/danimel/image/upload/v1633825804/house_sin7vi.png"
                  />
                </Link>
              </Nav.Link>

              <Nav.Item>
                <Nav.Link
                
                >
                    <img  style={{width: "150px"}} src="https://res.cloudinary.com/danimel/image/upload/v1635097090/2560px-International_Pok%C3%A9mon_logo.svg_wh9xyh.png" alt="" />
                </Nav.Link>
              </Nav.Item>

                <Nav.Item>
                <Nav.Link
                  
                >
           
                </Nav.Link>
              </Nav.Item>

                            
        
            </Nav>
            <Nav>
              <Nav.Item>
              <form  className="d-flex ">
                            <input
                           type="search"
                           placeholder="Buscar Pokemon"
                           style={{ marginTop: '10px',  width:'200px', height: "40px", background: "turquoise", border: "2px solid white", borderRadius: '13px', fontSize: "15px"}}
                                // value={busq}
                                // onChange={handleInputChange}
                            />
                            <img  style={{ width: '30px', marginLeft: '5px'}}  src="https://res.cloudinary.com/danimel/image/upload/v1635098283/lupa_2_pp4uqj.png"/>
              </form>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link
                 
                >
                  <Link to="/login" style={{marginLeft: '10px',fontSize: '10px', color: 'white' }}>
                    <img
                      style={{ width: "40px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633825804/perfil_na6vdw.png"
                    />
                  Loguin
                  </Link>
                </Nav.Link>
                </Nav.Item>
               
                <Nav.Link eventKey={2} href="#memes">
                <Nav.Item>
                 
                <NavDropdown.Item
                    eventKey={2}
                    href="#action/3.4"
                    onClick={handleLogout}
                    style={{ color: "turquoise",  margin: "3px" }}
                    eventKey="link-7"
                  >
                      <img
                      style={{ width: "30px", margin: "3px" }}
                      src="https://res.cloudinary.com/danimel/image/upload/v1633823741/logout_1_jivecp.png"
                    />
                  </NavDropdown.Item>
                </Nav.Item>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


    </div>
    )
}
