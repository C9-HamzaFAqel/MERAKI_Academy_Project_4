import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBRadio,
    MDBSelect
  }
  from 'mdb-react-ui-kit';
  import "./Register.css"
  import { Form } from 'react-bootstrap';
export const Register = () => {
  return (
    <div className='divreg'>
      <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">انشاء حساب</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
         <MDBRow>
           <MDBCol>  <MDBInput label='الاسم الاول' id='form1' type='text' className='w-100'/>  </MDBCol>
         <MDBCol>  <MDBInput label='اسم العائلة' id='form1' type='text' className='w-100'/>  </MDBCol>
         </MDBRow>
         <br/><MDBCol >
         <Form.Select aria-label="Default select example"  onChange={(e)=>{
    
}}>
      <option value="">اختر الصف المستهدف بالدورة</option>
      <option >الصف الأول</option>
      <option >الصف الثاني</option>
      <option >الصف الثالث</option>
      <option >الصف الرابع</option>
      <option >الصف الخمس</option>
      <option >الصف السادس</option>
      <option >الصف السابع</option>
      <option >الصف الثامن</option>
      <option >الصف التاسع</option>
      <option >الصف العاشر</option>
      <option >اول ثانوي</option>
      <option >توجيهي</option>
    </Form.Select>
</MDBCol>
<MDBCol md='3' className='ps-5'>
  <h6 className="mb-0">المرحلة الدراسية</h6>
</MDBCol>
        </div>
          
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' type='password'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your password' id='form4' type='password'/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
      {/*  <MDBContainer fluid>
     <MDBRow>  
    <MDBRow className='d-flex justify-content-center align-items-center'>

      
        
        <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
        <MDBCol> 
          <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' className='imgReg'  alt="Sample photo"/>
          </MDBCol>
          <MDBCol> 
          <MDBCardBody className='px-5'>

            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='datepicker mb-4' label='Select a date' id='form2' type='text'/>
              </MDBCol>

              

            </MDBRow>

          

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Registration code' id='form3' type='text'/>
              </MDBCol>
            </MDBRow>

            <MDBBtn color='success' className='mb-4' size='lg'>Submit</MDBBtn>

          </MDBCardBody>
          </MDBCol>
        </MDBCard>

      
    </MDBRow>
    </MDBRow>
  </MDBContainer> */}</div>
  )
}
