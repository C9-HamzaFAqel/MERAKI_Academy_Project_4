
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';




import React,{ useContext, useState } from 'react'





import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';
import { selectContext } from '../../App';

export function NavbarAfterLogin() {
  const navigate=useNavigate()
  const [title, setTitle] = useState("")
  const {AllCourse, setAllCourse,token,setSelectedId,selectedId}=useContext(selectContext)
  const [role, setRole] = useState(localStorage.getItem("role"))
  return (
   <div className='divNav'>
    
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Nav.Link href="#home" onClick={()=>{
            setSelectedId("")
            navigate("/")
          }}>Home</Nav.Link>
            <Navbar.Brand href="#"><h4>Aqel Academy</h4></Navbar.Brand>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 {role==="teacer"?
                 <>  <Nav.Link href="#action1" onClick={()=>{
                    console.log(true);
                    navigate("/CraetCourse")
                  }}>انشاء دورة </Nav.Link>
                  <Nav.Link href="#action2" onClick={()=>{
                    setSelectedId(localStorage.getItem("id"))
                    navigate(`/CourseByTeacher/${localStorage.getItem("id")}`)
                  }}>دوراتي</Nav.Link></>:
                  <>  <Nav.Link href="#action1" onClick={()=>{
                    console.log(true);
                    navigate("/favorit")
                  }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>الدورات المفضلة </Nav.Link>
                  <Nav.Link href="#action2" onClick={()=>{
                    setSelectedId(localStorage.getItem("id"))
                    navigate(`/Cart`)
                  }}>دوراتي</Nav.Link></> }
                  
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
               {/*  <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
   </div>
    
  );
}

