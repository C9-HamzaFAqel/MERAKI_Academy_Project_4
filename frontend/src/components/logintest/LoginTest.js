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
  return (<MDBContainer fluid className="p-3">

  <MDBRow>

    <MDBCol col='10' md='6'>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
    </MDBCol>
      
    <MDBCol col='70' md='6'>

    <h2 className="fw-bold mb-2 text-center">تسجيل الدخول</h2>
          <p className="text-white-100 mb-3">   الرجاء ادخال البريد الالكتروني والرقم السري الخاص بك  </p>

      <br/>

      <MDBInput wrapperClass='mb-4' label='البريد الالكتروني' id='formControlLg' type='email' size="lg"  onChange={(e) => {
      setEmail(e.target.value);
    }}/>
      <MDBInput wrapperClass='mb-4' label='الرقم السري' id='formControlLg' type='password' size="lg" onChange={(e) => {
      setPassword(e.target.value);
    }}/>

      

      <div className='text-center text-md-start mt-4 pt-2'>
        
        <Button type="submit"  onClick={() => {
      const dataLogin = { email, password };
      
       axios
        .post("https://meraki-academy-project-4.onrender.com/users/login", dataLogin)
        .then((res) => {
          setToken(res.data.token)
          localStorage.setItem("token",res.data.token)
          localStorage.setItem("id",res.data.IdUser)
          localStorage.setItem("role",res.data.role.role)
          localStorage.setItem("name",res.data.firstName+" "+res.data.lastName+" ")
          localStorage.setItem("image",res.data.Image)
          navigate("/")
        })
        .catch((err) => {
          console.log(err);
        }); 
        
    }}>تسجيل الدخول</Button>
        <p className="small fw-bold mt-2 pt-1 mb-2">لا تملك حساب على المنصة ؟ <a href="#!" className="link-danger" onClick={()=>{
          navigate("/register")
        }}>انشاء حساب</a></p>
      </div>

    </MDBCol>

  </MDBRow>

  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2024. All rights reserved.
    </div>


  </div>

</MDBContainer>


    
  );
}


