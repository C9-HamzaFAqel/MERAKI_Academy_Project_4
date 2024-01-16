import React from 'react'
import "./LoginTest.css"
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { useContext,useState } from 'react'
import { selectContext } from '../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function LoginTest() {
  const navigate=useNavigate()
  const {token,setToken}=useContext(selectContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <MDBContainer fluid className="p-3">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>
          
        <MDBCol col='70' md='6'>

        <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-100 mb-3">Please enter your login and password</p>

          <br/>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  onChange={(e) => {
          setEmail(e.target.value);
        }}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => {
          setPassword(e.target.value);
        }}/>

          

          <div className='text-center text-md-start mt-4 pt-2'>
            
            <Button type="submit"  onClick={() => {
          const dataLogin = { email, password };
          
           axios
            .post("http://localhost:5000/users/login", dataLogin)
            .then((res) => {
              console.log(res);
              setToken(res.data.token)
              localStorage.setItem("token",res.data.token)
              navigate("/")
            })
            .catch((err) => {
              console.log(err);
            }); 
            
        }}>Login</Button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger" onClick={()=>{
              navigate("/register")
            }}>Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>


      </div>

    </MDBContainer>
  );
}


