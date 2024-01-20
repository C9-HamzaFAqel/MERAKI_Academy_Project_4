import React,{useContext, useState} from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    
    MDBRadio,
    MDBTextArea,
    MDBFile
  }
  from 'mdb-react-ui-kit';
  import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { selectContext } from '../../App';

export const UpdateCourse = () => {
    const {token,elemId}=useContext(selectContext)
    const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
const [title, setTitle] = useState("")
const [grade, setGrade] = useState("")
const [describtion, setDescribtion] = useState("")
const [price, setPrice] = useState()

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
    <div className='creatCourse'>
        <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center'>
  <MDBCol lg='9' className='my-5'>

    <h1 class="text-white mb-4">تعديل الدورة</h1>

    <MDBCard>
      <MDBCardBody className='px-4'>

        <MDBRow className='align-items-center pt-4 pb-3'>

         

          <MDBCol md='9' className='pe-5'>
            <MDBInput label="اكتب العنوان الجديد اذا رغبت بتعديله" size='lg' id='form1' type='text' onChange={(e)=>{
             setTitle(e.target.value)
             
            }} />
          </MDBCol>
          <MDBCol md='3' className='ps-5'>
            <h6 className="mb-0">العنوان</h6>
          </MDBCol>
        </MDBRow>
        <hr className="mx-n3" />
        
        <MDBRow className='align-items-center pt-4 pb-3'>



<MDBCol md='9' className='pe-5'>
<Form.Select aria-label="Default select example"  onChange={(e)=>{
    setGrade(e.target.value)
}}>
      <option value="">اختر الصف الجديد اذا رغبت بتغييره</option>
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
</MDBRow>
        <hr className="mx-n3" />

        <MDBRow className='align-items-center pt-4 pb-3'>

         

          <MDBCol md='9' className='pe-5'>
            <MDBInput label='اضف التكلفة الجديدة بالدينار الاردني' size='lg' id='form2' type='Number' onChange={(e)=>{setPrice(e.target.value)}} />
          </MDBCol>
          <MDBCol md='3' className='ps-5'>
            <h6 className="mb-0">تكلفة الدورة</h6>
          </MDBCol>
        </MDBRow>

        <hr className="mx-n3" />

        <MDBRow className='align-items-center pt-4 pb-3'>

          

          <MDBCol md='9' className='pe-5'>
            <MDBTextArea label='ملاحظات / شرح عن محتويات الدورة ' id='textAreaExample' rows={3} onChange={(e)=>{setDescribtion(e.target.value)}} />
          </MDBCol>
          <MDBCol md='3' className='ps-5'>
            <h6 className="mb-0">ملاحظات اضافية</h6>
          </MDBCol>
        </MDBRow>

        <hr className="mx-n3" />

        <MDBRow className='align-items-center pt-4 pb-3'>

          

          <MDBCol md='9' className='pe-5'>
            <MDBFile size='lg' id='customFile' onChange={(e)=>{
                setImage(e.target.files[0])
            }}/>
            <div className="small text-muted mt-2">مثال : صورة لغلاف الكتاب / صورة خلال شرح المادة<button onClick={uploadImage}>تحميل</button></div>
          </MDBCol>



          
          <MDBCol md='3' className='ps-5'>
          
            <h6 className="mb-0">قم بتحميل صورة جديدة للدورةاذا رغبت بتغييرها</h6>
          </MDBCol>
        </MDBRow>
           
        <hr className="mx-n3" />

        <MDBBtn className='my-4' size='lg' onClick={()=>{
            
            const dataBody={title:title,grade:grade,describtion:describtion,price:price,image:url}
            
            axios.put(`http://localhost:5000/course/${elemId}`,dataBody,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{}).catch((err)=>{console.log(err.data);})
        }}>تعديل </MDBBtn>
       
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
       </div>
  )
}