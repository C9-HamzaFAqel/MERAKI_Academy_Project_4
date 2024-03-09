import React, { useContext, useEffect, useState } from "react";
import { selectContext } from "../../App";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import {Col, Container} from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Row} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import "./CourseById.css"
import { MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

export const CourseById = () => {
  const { elemId, setElemId, token ,Videos, setVideos} = useContext(selectContext);
  const [CourseById, setCourseById] = useState(null);
   const [toggle, setToggle] = useState(false)
   const [comments, setcomments] = useState([])
   const [comment, setComment] = useState("")
   const [forbidden, setForbidden] = useState(false)
   const navigate=useNavigate()
   const {id}=useParams()
  useEffect(() => {
    
   
    axios
      .get(`https://meraki-academy-project-4.onrender.com/course/serch_2/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCourseById(res.data.course);
        setcomments(res.data.course.comment)
        setVideos(res.data.course.video)
      })
      .catch((err) => {
        
        if(err.response.statusText==="Forbidden"){
         setForbidden(true)
        }
      });
  }, [elemId]);

  return (
    <div className="ById">
       {forbidden&& 
       <div
      className="modal show"
      style={{ display: 'block' ,marginTop:"5%"}}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>لم تقم بتسجيل الدخول</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>يجب عليك تسجيل الدخول لتتمكن من مشاهدة تفاصيل الدورة والتعليقات</p>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="primary" onClick={()=>{
            navigate("/")}}>الصفحة الرئيسية</Button>
        <Button variant="primary" onClick={()=>{
            navigate("/register")
          }}>انشاء حساب</Button>
          <Button variant="primary" onClick={()=>{
            navigate("/Login")
          }}>تسجيل الدخول</Button>
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>}
      {CourseById&&
      <div>
        
      <div className="Card_1"> 
        <Card style={{ height: '20rem' }} className="body_1">
    <Row>
  
      <Col>
      <Card.Body >
        <br/>
        <Card.Title>{CourseById.title}</Card.Title><br/><br/>
        <Card.Text>
         {CourseById.describtion}
        </Card.Text>
        
      </Card.Body>
      </Col>
      
        <Col>
      <Card.Img variant="top" src={CourseById.image} height="300" width="45%"/>
      </Col>
       </Row>
    </Card>
    </div>
    <div className="Card_2">

    <Card style={{ height: '20rem' }}>
      <Card.Body>
      <button className="buttonFavorit" onClick={()=>{
        const bodyFav={course:elemId}
      
        axios.post("https://meraki-academy-project-4.onrender.com/favorit/creat",bodyFav,{
          headers: {
            authorization: `Bearer ${token}`,
          },
        }).then((res)=>{

        }).catch((err)=>{
          console.log(err);
        })
      }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></button>
        <br/>
        <Card.Subtitle id="price" className="mb-2 text-muted"><h3>{CourseById.price}JD </h3></Card.Subtitle><br/><br/><br/>
        <Card.Text>
        عند التسجيل بالدورة يمكنك استخدامها والرجوع اليها في اي وقت ،كما يمكنك الاحتفاظ بالفيديوهات والمادة بعد الانتهاء من الدورة 
        </Card.Text>
        
        <Button variant="primary" className="buttonCart" size="sm" onClick={()=>{
          const body={corse:elemId}
          axios.post("https://meraki-academy-project-4.onrender.com/cart/creat",body,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{

          }).catch((err)=>{
            console.log(err.data);
          })
        }}>تسجيل بالدورة    .</Button>
<br/>
        
        
      </Card.Body>
    </Card></div>
    <div className="creatComment">
      
    <InputGroup className="mb-3"  >
        <Button variant="primary" style={{marginTop:"10px"}} onClick={()=>{
          const textComment={comment:comment}
          axios.post(`https://meraki-academy-project-4.onrender.com/comment/creat/${CourseById._id}`,textComment,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{
            setcomments([...comments,res.data.course.comment])
            navigate(0)
          }).catch((err)=>{
            console.log(err);
          })
          document.getElementById('myInput').value = ''
          
        }}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12"/>
</svg></Button>
        
        <Form.Control id="myInput" placeholder="اكتب تعليق" onChange={(e)=>{
      setComment(e.target.value)
    }} />
      </InputGroup>
      
    </div>
    <div className="comment">
    
   
    
    {toggle&& <div className="divvcomm">
   { comments.map((elem,i)=>{
      return(  
        <div style={{marginRight:"4rem",marginTop:"1rem"}}>
<Card>
      <Card.Header><div> 
      <p  className="p-header"> {elem.commenter.firstName} <img src={elem.commenter.Image} width="50px" height="45px"  style={{border:"solid 1px black"}} /></p>
      
      </div></Card.Header>
      <Card.Body>
        
        <Card.Text >
          <p > {elem.comment}    </p>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    )}
    )}</div>}
    
      {toggle?
      <p class="small fw-bold mt-2 pt-1 mb-0" 
      onClick={()=>{
      setToggle(false)
      
    }}> <a href="#!"
                class="link-danger">اخفاء التعليقات
                </a>({CourseById.comment.length})</p>:<p class="small fw-bold mt-2 pt-1 mb-0" onClick={()=>{
      setToggle(true)
      
    }}> <a href="#!"
                class="link-danger">مشاهدة جميع التعليقات
                </a>({CourseById.comment.length})</p>}
      
    
    </div>
   </div>}
    </div>
  );
};
