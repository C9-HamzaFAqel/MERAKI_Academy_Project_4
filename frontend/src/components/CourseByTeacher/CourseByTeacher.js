import React, { useContext ,useState,useEffect} from 'react'
import { selectContext } from '../../App';
import axios from 'axios';
import { Card, Container,Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./CourseByTeacher.css"
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const CourseByTeacher = () => {
    const [corse, setCorse] = useState([]);
    const {selectedId,setSelectedId,elemId,setElemId,token}=useContext(selectContext)
    const [delet, setDelet] = useState(false)
    const [deletId, setDeletId] = useState("")
 const navigate=useNavigate()
 const {teacher}=useParams()
    useEffect(() => { 
        
        
       const getCorseByTeacher = () => {
           axios
             .get(`https://meraki-academy-project-4.onrender.com/course/serch_1/${teacher}`)
             .then((res) => {
               setCorse(res.data.courses);
             })
             .catch((err) => {
               console.log("err.message", err.message);
             });
         };
         getCorseByTeacher()
     }, [selectedId]);
  return (
    <div className='teacher'>
      
    
    
        {corse ? (
          <div >
            <Row xs={1} md={3} className="g-4">
            {corse.map((elem, i) => {
              
              return (
                <div className="course">
                  
          
       
          <Col >
            <Card style={{margin:"0 5px 0 5px"}} >
            <div  onClick={()=>{setElemId(elem._id)
                  
                  navigate(`/courseById/${elem._id}`)
                }} > 
              <Card.Img variant="top" src={elem.image  }   width="60" height="160" />
              <hr style={{margin:"8px 0 0 0"}}/></div>
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>
               
                  <br/>
                  الصف
                  :
                  {elem.grade}
                  <br/>
                  ( {elem.price}
                  JD  ):
                  السعر 
                  <br/>
  
                 
                </Card.Text>
                
                <div> 
                <Row>
                <Col>
                 <Card.Link href="#" onClick={()=>{
                  setDeletId(elem._id)
                  setDelet(true)
                
                 }}>حذف</Card.Link>
                 </Col>
                     <Col> 
                 <Card.Link href="#"onClick={()=>{
                  setElemId(elem._id)
                  navigate("/UpdateCourse")
                 }}>تعديل</Card.Link>  
                 </Col>
                 
                 </Row>
                 </div>
              </Card.Body>
            </Card>
          </Col>
        
          {delet&& <div
      className="modal show"
      style={{ display: 'block' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>تأكيد على حذف الدورة</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>  هل ما زلت ترغب بحذف الدورة؟ </p>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="primary" onClick={()=>{
             axios.delete(`https://meraki-academy-project-4.onrender.com/course/${deletId}`,{
              headers: {
                authorization: `Bearer ${token}`,
              },
            }).then((res)=>{}).catch((err)=>{console.log(err);})
            navigate(0)
            setDelet(false)
            
            }}>حذف</Button>
        <Button variant="primary" onClick={()=>{
            setDelet(false)
            
          }}>تراجع </Button>
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>}
                </div>
              );
            })}
            </Row>
          </div>
        ) : (
          <div></div>
        ) }
       

    </div>
  )
}
