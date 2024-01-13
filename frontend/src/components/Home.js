import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectContext } from "../App";

const Home = () => {
  const [teacher, setTeacher] = useState([]);
  const {setSelectedId,selectedId}=useContext(selectContext)

  useEffect(() => {
    const getAllTeacher = () => {
      axios
        .get("http://localhost:5000/users/teacher")
        .then((res) => {
          setTeacher(res.data.result);
        })
        .catch((err) => {
          console.log("err.message", err.message);
        });
    };

    getAllTeacher();
  }, []);

 
  return (
    
    <div>
      {teacher.map((elem, i) => {
        return (
          <>
            <div
              onClick={() => {
               setSelectedId(elem._id)
               
              }}
            >
              <img src={elem.Image}></img>
              <h3>
                {elem.firstName} {elem.lastName}
              </h3>
              <p>{elem.Specialization}</p>
            </div>
          </>
        );
      })}
    </div>

  );
};

export default Home;
