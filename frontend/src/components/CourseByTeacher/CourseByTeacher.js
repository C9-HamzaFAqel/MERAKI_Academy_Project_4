import React, { useContext ,useState,useEffect} from 'react'
import { selectContext } from '../../App';
import axios from 'axios';
import { Card, Container,Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./CourseByTeacher.css"
export const CourseByTeacher = () => {
    const [corse, setCorse] = useState([]);
    const {selectedId,setSelectedId,elemId,setElemId}=useContext(selectContext)
 const navigate=useNavigate()
 const {teacher}=useParams()
    useEffect(() => { 
        
        
       const getCorseByTeacher = () => {
           axios
             .get(`http://localhost:5000/course/serch_1/${teacher}`)
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
               <Card.Link href="#">حذف</Card.Link>
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
      
    
              </div>
            );
          })}
          </Row>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
