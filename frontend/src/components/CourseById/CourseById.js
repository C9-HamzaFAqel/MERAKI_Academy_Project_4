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
      .get(`http://localhost:5000/course/serch_2/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.course.video);
        setCourseById(res.data.course);
        setcomments(res.data.course.comment)
        setVideos(res.data.course.video)
      })
      .catch((err) => {
        console.log(err.response.statusText
          );
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
      style={{ display: 'block', position: 'initial' }}
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
        <Card style={{ height: '20rem' }}>
    <Row>
  
      <Col>
      <Card.Body>
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
        const bodyFav={corse:elemId}
        console.log(bodyFav);
        console.log(elemId);
        axios.post("http://localhost:5000/favorit/creat",bodyFav,{
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
          axios.post("http://localhost:5000/cart/creat",body,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{

          }).catch((err)=>{
            console.log(err.data);
          })
        }}>Add  to  Cart    .<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Button>
<br/>
        <div className="link"><Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#" onClick={()=>{
          
          navigate("/video")
        }}>فيديوهات الشرح</Card.Link></div>
        
      </Card.Body>
    </Card></div>
    <div className="creatComment">
      
    <InputGroup className="mb-3"  >
        <Button variant="outline-secondary" onClick={()=>{
          const textComment={comment:comment}
          axios.post(`http://localhost:5000/comment/creat/${CourseById._id}`,textComment,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{
            setcomments([...comments,res.data.course.comment])
          }).catch((err)=>{
            console.log(err);
          })
          document.getElementById('myInput').value = ''
          
        }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12"/>
</svg></Button>
        
        <Form.Control id="myInput" placeholder="اكتب تعليق" onChange={(e)=>{
      setComment(e.target.value)
    }} />
      </InputGroup>
      {/* <Container> 
        <Row>  
        <Col> 
    <button className="butnComment">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12"/>
</svg>
    </button>
    </Col>
          <Col>   
    <MDBInput wrapperClass='mb-4' placeholder="اكتب تعليق" id='newComment' type='text' size="lg" className="inputComment" />
    </Col>
   
    </Row>
    </Container> */}
    </div>
    <div className="comment">
    
   
    
    {toggle&& 
    comments.map((elem,i)=>{
      return(  
        <div style={{margin:"1rem"}}>
<Card>
      <Card.Header><div> 
      <p  className="p-header"> {elem.commenter.firstName} <img src={elem.commenter.Image} width="50px" height="45px"   /></p>
      
      </div></Card.Header>
      <Card.Body>
        
        <Card.Text >
          <p > {elem.comment}    </p>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    )}
    )}
    
      {toggle?<p class="small fw-bold mt-2 pt-1 mb-0" onClick={()=>{
      setToggle(false)
      
    }}> <a href="#!"
                class="link-danger">اخفاء التعليقات
                </a>({CourseById.comment.length})</p>:<p class="small fw-bold mt-2 pt-1 mb-0" onClick={()=>{
      setToggle(true)
      
    }}> <a href="#!"
                class="link-danger">مشاهدة جميع التعليقات
                </a>({CourseById.comment.length})</p>}
      
    
    </div>
    {/* <p>{CourseById.title}</p>
      <img src={CourseById.image} />
      <h3>مشاهدة المحاضرات</h3>
      
      
      {CourseById.comment.map((com, i) => {
        
        return (
          <>
             <h5>{com.commenter.firstName}</h5> 
            <p>{com.comment}</p>
          </>
        );
        })} */}</div>}
    </div>
  );
};
