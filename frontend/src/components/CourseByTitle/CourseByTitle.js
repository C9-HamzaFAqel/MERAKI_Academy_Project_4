import "./CouresByTitle.css"
import axios from "axios";
import React, { useContext } from "react";
import { Card, Container,Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { selectContext } from "../../App";

export const CourseByTitle = () => {
    const navigate=useNavigate()
  const {elemId,setElemId,AllCourse, setAllCourse}=useContext(selectContext)
    const serch=JSON.parse(localStorage.getItem("a"))
    return (
        <div className="all" style={{margin:"10px"}}>
           
          {serch ? (
            <div>
              <Row xs={1} md={3} className="g-4">
              {serch.map((elem, i) => {
                
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
}
