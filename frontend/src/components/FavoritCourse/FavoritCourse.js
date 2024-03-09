import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { selectContext } from "../../App";
import { Card, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FavoritCourse.css"
export const FavoritCourse = () => {
  const [FavCourse, setFavCourse] = useState([]);
  const { token, setElemId } = useContext(selectContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://meraki-academy-project-4.onrender.com/favorit/myFavorit", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFavCourse(res.data.myFavorit);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="allFav">
      
      {FavCourse ? 
        <div>
          <Row xs={1} md={3} className="g-4">
            {FavCourse.map((elem, i) => {
              return (
                
                <div>
                  <Col>
                    <Card style={{ margin: "10px 20px 0 5px" }}>
                      <div
                        onClick={() => {
                          setElemId(elem.course._id);
                          navigate(`/courseById/${elem.course._id}`);
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={elem.course.image}
                          width="60"
                          height="160"
                        />
                        <hr style={{ margin: "8px 0 0 0" }} />
                      </div>
                      <Card.Body>
                        <Card.Title>{elem.course.title}</Card.Title>
                        <Card.Text>
                          <br />
                          الصف :{elem.course.grade}
                          <br />( {elem.course.price}
                          JD ): السعر
                          <br />
                        </Card.Text>

                       
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        </div>
       : 
        <div></div>
      }
    </div>
  );
};
