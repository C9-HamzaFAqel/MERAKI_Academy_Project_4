import React,{ useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBarBeforLogin.css"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { selectContext } from '../../App';

export const NavbarBeforLogin = () => {
  const navigate=useNavigate()
  const [title, setTitle] = useState("")
  const {AllCourse, setAllCourse}=useContext(selectContext)
  return (
    <div className='divNav'>
      
<Navbar className="aaa">
      <Container >
        
        <NavDropdown title={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={()=>{
                navigate("/Login")
              }} >تسجيل الدخول</NavDropdown.Item>
              <NavDropdown.Item href="/register">
                مستخدم جديد
              </NavDropdown.Item>
              
            </NavDropdown>

            <Navbar.Brand className='text' >أهلا بكم بمنصة عقل للتعلم عن بعد</Navbar.Brand>


        <Navbar.Toggle />
        
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="ابحث باستخدام اسم الدورة"
              className=" mr-sm-2"
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={()=>{
            const a =AllCourse.filter((elem,i)=>{
              return elem.title.includes(title)
            })
            let atoString1 = JSON.stringify(a);
    localStorage.setItem("a", atoString1)
            navigate("/courseByTitle")
            }}>بحث</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
    </div>
  )
}
