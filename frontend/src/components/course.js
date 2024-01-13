import React, { useContext } from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { selectContext } from '../App';
export const Course = () => {
    const [corse, setCorse] = useState([]);
    const {selectedId,setSelectedId}=useContext(selectContext)
    const [elemId, setElemId] = useState("")
    const [showHide, setShowHide] = useState(false)
    useEffect(() => { 
         if (!selectedId) return;
        const getCorseByTeacher = () => {
            axios
              .get(`http://localhost:5000/course/serch_1/${selectedId}`)
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
    <div>
        {corse.map((elem,i)=>{
            return(
               <>
               <div >
              

               <h3>{elem.title}</h3>
               
               <img src={elem.image}></img>
                  
                 <p>{elem.price}</p> 
                  <p>{elem.grade}</p>
                  
                  <p onClick={()=>{
                    {showHide?setShowHide(false):setShowHide(true)}
                   
                   setElemId(elem._id)
                    
                  }} >{showHide?"hide comments" : "comments"}</p>
                 {(showHide&&elem._id===elemId)&&elem.comment.map((com,i)=>{
                   
                   return (
                            <>
                            <h3>{com.commenter.firstName}</h3> 
                            <p>{com.comment}</p>                               
                             </>

                   )
               }) }
                  </div>
               </>

            )
        })}
      <button onClick={()=>{
        setSelectedId("")
      }}>back</button>
   </div>
  )
}
