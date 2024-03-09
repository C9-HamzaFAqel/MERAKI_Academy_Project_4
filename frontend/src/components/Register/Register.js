import React,{useState} from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBFile,
    MDBIcon,
    MDBCheckbox,
    MDBRadio,
    MDBSelect
  }
  from 'mdb-react-ui-kit';
  import "./Register.css"
  import { Form } from 'react-bootstrap';
  import { Modal } from 'react-bootstrap';
  import Button from 'react-bootstrap/Button';
import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
export const Register = () => {
  const navugate=useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("")
  const [grade, setGrade] = useState("")
  const [role, setRole] = useState("")
  const [errPass, setErrPass] = useState(false)
const [selsectImage, setSelsectImage] = useState(true)
const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
const uploadImage = () => {
  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "hazemfowzi")
  data.append("cloud_name","dlfdvvzgu")
  fetch("  https://api.cloudinary.com/v1_1/dlfdvvzgu/image/upload",{
  method:"post",
  body: data
  })
  .then(resp => resp.json())
  .then(data => {
  setUrl(data.url)
  
  })
  .catch(err => console.log(err))
  }
  return (
    <div className='divreg'>
      {selsectImage?
      <div className='divselect'>

        <MDBRow>
          <h3 className='hh3'>لطفا اختر نوع الحساب الذي تريد التسجيل به</h3>
          </MDBRow>
        <div className="d-flex flex-row align-items-center mb-4 ">
        
         <MDBRow>
         <MDBCol className='imgs' onClick={()=>{
            setRole("659c48a4d89ecd369adc20b8")
            setSelsectImage(false)
         }}>  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTossI2aJSW5bCn0V6bw8wraVjAp1-0aozW6Q&usqp=CAU' width="350px" height="400px" />
          <h4>حساب الطالب</h4>  </MDBCol>

           <MDBCol className='imgs'  onClick={()=>{
            setRole("659c2864a51ce618919355bd")
            setSelsectImage(false)
         }}>   <img src='https://w7.pngwing.com/pngs/893/553/png-transparent-elementary-teaching-theme-math-teacher-pupil.png' width="350px" height="400px"/>
          <h4>حساب المعلم</h4>  </MDBCol>
         </MDBRow>
         
          
         </div> </div>: 
         errPass?
         <div
           className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>الرمزين غير متطابقين</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>يجب أن يكون الرمزين متطابقين لكي يتم انشاء حسابك <br/>
          قم باعادة كتابة رمزين متطابقين</p>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="primary" onClick={()=>{
            setErrPass(false)}}> موافق</Button>
        
          
        </Modal.Footer>
      </Modal.Dialog>
         </div>
         :
         <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">انشاء حساب</h1>
         <br/>
        <div className="d-flex flex-row align-items-center mb-4 ">
         <MDBRow>
         <MDBCol>  <MDBInput label='اسم العائلة' id='form1' type='text' className='w-100' onChange={(e) => {
          setLastName(e.target.value);
        }}/>  </MDBCol>

           <MDBCol>  <MDBInput label='الاسم الاول' id='form1' type='text' className='w-100'  onChange={(e) => {
          setFirstName(e.target.value);
        }}/>  </MDBCol>
         </MDBRow>
         
          
         </div>
         <div className="d-flex flex-row align-items-center mb-4 ">
         <MDBRow>
         <MDBCol><MDBInput label='المدينة' id='form1' type='text' className='w-100' onChange={(e) => {
          setCountry(e.target.value);
        }}/></MDBCol>
         <MDBCol>  <MDBInput label='العمر' id='form1' type='number' className='w-100'  onChange={(e) => {
          setAge(e.target.value);
        }}/>   </MDBCol>
         
         </MDBRow>
         </div>
         <div className="d-flex flex-row align-items-center mb-4 ">
         <MDBRow className='align-items-center pt-4 pb-3'>



<MDBCol md='7' className='pe-5'>
<Form.Select aria-label="Default select example" onChange={(e)=>{
        setGrade(e.target.value)
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
<MDBCol md='5' className='ps-5'>
  <h6 className="mb-0">المرحلة الدراسية</h6>
</MDBCol>
</MDBRow> 
        
        </div>
          
        <div className="d-flex flex-row align-items-center mb-4">
      
        <MDBRow className='align-items-center pt-4 pb-3'>

         

<MDBCol md='7' className='pe-5'>
  <MDBInput label='  ' size='lg' id='form2' type='email' onChange={(e) => {
          setEmail(e.target.value);
        }} />
</MDBCol>
<MDBCol md='5' className='ps-5'>
  <h6 className="mb-0">البريد الالكتروني</h6>
</MDBCol>
</MDBRow>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
      
      <MDBRow className='align-items-center pt-4 pb-3'>

       

<MDBCol md='7' className='pe-5'>
<MDBInput label='  ' size='lg' id='form2' type='password'  onChange={(e) => {
          setPassword(e.target.value);
        }} />
</MDBCol>
<MDBCol md='5' className='ps-5'>
<h6 className="mb-0">الرقم السري</h6>
</MDBCol>
</MDBRow>
      </div>
      <div className="d-flex flex-row align-items-center mb-4">
      
        <MDBRow className='align-items-center pt-4 pb-3'>

         

<MDBCol md='7' className='pe-5'>
  <MDBInput label='  ' size='lg' id='form2' type='password' onChange={(e)=>{setRePass(e.target.value)}} />
</MDBCol>
<MDBCol md='5' className='ps-5'>
  <h6 className="mb-0">اعد كتابة الرقم السري</h6>
</MDBCol>
</MDBRow>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
        <MDBRow className='align-items-center pt-4 pb-3'>
         <MDBCol md='9' className='pe-5'>
            <MDBFile size='lg' id='customFile' onChange={(e)=>{
                setImage(e.target.files[0])
            }}/>
            <div className="small text-muted mt-2"> انقر على تحميل قبل النقر على انشاء حساب<button onClick={uploadImage}>تحميل</button></div>
          </MDBCol>




          <MDBCol md='3' className='ps-5'>
          
            <h6 className="mb-0">قم بتحميل صورة شخصية</h6>
          </MDBCol>
        </MDBRow> 
</div>
        <MDBBtn className='mb-4' size='lg' onClick={()=>{
           if(password===rePass){
            const body ={
              firstName: firstName,
              lastName: lastName,
              age: age,
              country: country,
              email: email,
              password: password,
              role :role,
              grade :grade,
              Image:url
            }
            axios
            .post("https://meraki-academy-project-4.onrender.com/users/register/", body)
            .then((RegisterRes) => {navugate("/login")})
            .catch((err) => {
              console.log(err);
            });
            setSelsectImage(false)
           }else{
            setErrPass(true)
          }
         
        }}>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
       
      
      }
      
      </div>
  )
}
