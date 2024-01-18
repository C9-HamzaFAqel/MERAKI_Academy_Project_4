import axios from 'axios'
import React,{useState,useEffect, useContext} from 'react'
import { selectContext } from '../../App'
import { Card, Container,Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
export const CartCourse = () => {
    const [cartCourse, setCartCourse] = useState([])
    const {token,setElemId}=useContext(selectContext)
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:5000/cart/myCourse",{
            headers: {
              authorization: `Bearer ${token}`,
            }}).then((res)=>{
              console.log(res.data.myCorse);
              setCartCourse(res.data.myCorse)
            }).catch((err)=>{
                console.log(err);
            })
      },[])
  return (
    <div>
        {cartCourse ? (
        <div >
          <Row xs={1} md={3} className="g-4">
          {cartCourse.map((elem, i) => {
            
            return (
              <div >
                
        
     {/* <img alt="جو اكاديمي حساب" src="/_next/image?url=%2Fimages%2Fstudent_icon.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" srcset="/_next/image?url=%2Fimages%2Fstudent_icon.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fimages%2Fstudent_icon.png&amp;w=256&amp;q=75 2x" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"> */}
        <Col >
          <Card style={{margin:"0 5px 0 5px"}} >
          <div  onClick={()=>{setElemId(elem._id)
                
                navigate(`/courseById/${elem._id}`)
              }} > 
            <Card.Img variant="top" src={elem.corse.image  }   width="60" height="160" />
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
