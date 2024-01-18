import React, { useContext } from 'react'
import { selectContext } from '../../App'

export const Video = () => {
    const {Videos, setVideos}=useContext(selectContext)
    console.log(Videos);
  return (
    <div>
     
       
       {Videos.map((elem,i)=>{
        return(
            <div>
            <video width="550" height="400" controls>
         <source src={elem} type="video/mp4"/>
            </video>
              
            </div>
        )
         
       })}
       
        
        </div>
    
  )
}
