
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';




import React,{ useContext, useState } from 'react'
import "./NavbarAfterLogin.css"




import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';
import { selectContext } from '../../App';

export function NavbarAfterLogin() {
  const navigate=useNavigate()
  const [title, setTitle] = useState("")
  const {AllCourse, setAllCourse,token,setSelectedId,selectedId,setToken}=useContext(selectContext)
  const [role, setRole] = useState(localStorage.getItem("role"))
  const [signOut, setSignOut] = useState(false)
  return (
   <div className='divNav'>
    
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Nav.Link href="#home" onClick={()=>{
            setSelectedId("")
            navigate("/")
          }}>الصفحة الرئيسية</Nav.Link>
           
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="ابحث باستخدام اسم الدورة"
                    className="me-2"
                    onChange={(e)=>{
                      setTitle(e.target.value)
                      const a =AllCourse.filter((elem,i)=>{
                        return elem.title.includes(e.target.value)
                      })
                      let atoString1 = JSON.stringify(a);
              localStorage.setItem("a", atoString1)
                      navigate("/courseByTitle")
                    }}
                  />
                 {/*  <Button variant="outline-success" onClick={()=>{
            const a =AllCourse.filter((elem,i)=>{
              return elem.title.includes(title)
            })
            let atoString1 = JSON.stringify(a);
    localStorage.setItem("a", atoString1)
            navigate("/courseByTitle")
            }}>بحث</Button> */}
                </Form>
                <Navbar.Brand href="#"><h4>{localStorage.getItem("name") }اهلا بك   </h4></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              
              </Offcanvas.Header>
             
              <Offcanvas.Body>
                <Nav.Link>
                <img src={localStorage.getItem("image")} width="50px" height="45px"   /> {localStorage.getItem("name")} 
                </Nav.Link>
                
                <hr/>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 {role==="teacer"?
                 <>  <Nav.Link href="#action1" onClick={()=>{
                    navigate("/CraetCourse")
                  }}>انشاء دورة </Nav.Link>
                  <Nav.Link href="#action2" onClick={()=>{
                    setSelectedId(localStorage.getItem("id"))
                    navigate(`/CourseByTeacher/${localStorage.getItem("id")}`)
                  }}>دوراتي</Nav.Link></>:
                  <>  <Nav.Link href="#action1" onClick={()=>{
                    navigate("/favorit")
                  }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>الدورات المفضلة </Nav.Link>
                  <Nav.Link href="#action2" onClick={()=>{
                    setSelectedId(localStorage.getItem("id"))
                    navigate(`/Cart`)
                  }}>دوراتي</Nav.Link></> }
                  <Nav.Link> <button type="button" className="btn btn-primary" onClick={()=>{setSignOut(true)}}>
      تسجيل الخروج
    </button> </Nav.Link>
                   {signOut&&
                   <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title> تأكيد على تسجيل الخروج  </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>اذا رغيت بتسجيل الخروج اضغط على تسجيل الخروج 
            للالغاء اضغط على تراجع
          </p>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="primary" onClick={()=>{
           localStorage.clear();


           setToken(null);
       
           navigate('/');}}>تسجيل الخروج </Button>
        
          <Button variant="primary" onClick={()=>{
            setSignOut(false)
          }}>تراجع </Button>
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>

                   }
                
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
   </div>
    
  );
}

