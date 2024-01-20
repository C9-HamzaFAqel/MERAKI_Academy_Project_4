import axios from 'axios'
import React,{useState,useEffect, useContext} from 'react'
import { selectContext } from '../../App'
import { Card, Container,Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./CartCourse.css"
export const CartCourse = () => {
    const [cartCourse, setCartCourse] = useState([])
    const {token,setElemId}=useContext(selectContext)
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:5000/cart/myCourse",{
            headers: {
              authorization: `Bearer ${token}`,
            }}).then((res)=>{
              setCartCourse(res.data.myCorse)
            }).catch((err)=>{
                console.log(err);
            })
      },[])
  return (
    <div className='allCart'>
        {cartCourse ? (
        <div >
          <Row xs={1} md={3} className="g-4">
          {cartCourse.map((elem, i) => {
            
            return (
              <div >
                
        
        <Col >
          <Card style={{margin:"10px 20px 0 5px"}} >
          <div  onClick={()=>{setElemId(elem._id)
                
                navigate(`/courseById/${elem.corse._id}`)
              }} > 
       
            <Card.Img variant="top" src={elem.corse.image}   width="60" height="160" />
            <hr style={{margin:"8px 0 0 0"}}/></div>
            <Card.Body>
              <Card.Title>{elem.corse.title}</Card.Title>
              <Card.Text>
             
                <br/>
                الصف
                :
                {elem.corse.grade}
                <br/>
                ( {elem.corse.price}
                JD  ):
                السعر 
                <br/>

               
              </Card.Text>
              
              <div> 
              <Row>
              
                <Card.Link href="#" style={{marginRight:"35px"}} onClick={()=>{
          
          navigate("/video")
        }}>فيديوهات الشرح</Card.Link>
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
