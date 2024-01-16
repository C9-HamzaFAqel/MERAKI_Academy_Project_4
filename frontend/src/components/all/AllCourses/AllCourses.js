


 import "./AllCourses.css";
import axios from "axios";
import React, { useContext } from "react";
import { Card, Container,Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectContext } from "../../../App";
export const AllCourses = () => {
  const navigate=useNavigate()
  const {elemId,setElemId,AllCourse, setAllCourse}=useContext(selectContext)
  useEffect(() => {
    axios
      .get("http://localhost:5000/course/all/courses")
      .then((res) => {
        setAllCourse(res.data.courses);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  return (
    <div className="all" style={{margin:"10px"}}>
       
      {AllCourses ? (
        <div>
          <Row xs={1} md={3} className="g-4">
          {AllCourse.map((elem, i) => {
            
            return (
              <div className="course" onClick={()=>{setElemId(elem._id)
                
                navigate("/courseById")
              }}>
                
     
        <Col >
          <Card style={{margin:"0 5px 0 5px"}} >
            <Card.Img variant="top" src={elem.image  }   width="60" height="160" />
            <hr style={{margin:"8px 0 0 0"}}/>
            <Card.Body>
              <Card.Title>{elem.title}</Card.Title>
              <Card.Text>
              {elem.Teacher.firstName}
              :
                الاستاذ 
                
                
                <br/>
                الصف
                :
                {elem.grade}
                <br/>
                ( {elem.price}
                JD  ):
                السعر 
                
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    
               {/*  <Container> 
                <Row>
                
                <Col>
                
                <p>{elem.title}</p>
                
                 
                
                <p> {elem.grade}الصف:ا </p>
               
                
                <p> السعر : $ {elem.price}</p>
                
                </Col>
                <Col>

                <img src={elem.image} />
                </Col>
                </Row>
               
                </Container> */}
                {/*   <Card style={{ minWidth: '1px', margin: '10px' }}>
  <Card.Img variant="lift" src={elem.image} />
  <Card.Body>
    <Card.Title>{elem.title}</Card.Title>
    <Card.Text>{elem.grade}الصف:ا 
    <br/>
       السعر : $ {elem.price} 
    </Card.Text>
    <Button variant="primary">Example Button</Button>
  </Card.Body>
</Card>   */}
              </div>
            );
          })}
          </Row>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}; 
 