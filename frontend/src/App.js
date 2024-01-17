import "./App.css";

import { Routes,Route } from "react-router-dom";

import { createContext } from "react";
import { useState } from "react";



import { CourseById } from "./components/CourseById/CourseById";
import { LoginTest } from "./components/logintest/LoginTest";

import { NavbarBeforLogin } from "./components/NavbarBeforLogin/NavbarBeforLogin";
import { AllCourses } from "./components/all/AllCourses";
import { CourseByTitle } from "./components/CourseByTitle/CourseByTitle";
import { NavbarAfterLogin } from "./components/NavbarAfterLogin/NavbarAfterLogin";
import { CreatCourse } from "./components/CreatCourse/CreatCourse";
export const selectContext=createContext()
function App() {
  const [selectedId, setSelectedId] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [elemId, setElemId] = useState("")
  const [AllCourse, setAllCourse] = useState([]);
  return (
    <selectContext.Provider value={{selectedId,setSelectedId,token,setToken,elemId,setElemId,AllCourse, setAllCourse}} > 

    <div className="App">
      {token?<NavbarAfterLogin/>:<NavbarBeforLogin/>}
    
   

    <Routes>
      <Route path="/courseByTitle" element={<CourseByTitle/>}/>
      <Route path="/Login" element={<LoginTest/>}/>
      <Route path="/" element={<AllCourses/>} />
      {/* <Route path="/register" element={<Register/>}/> */}
      <Route path="/courseById" element={<CourseById/>} />
      <Route path="/CraetCourse" element={<CreatCourse/>} />

    </Routes>

    
   
    
    </div>
    </selectContext.Provider>

  );
}

export default App;



{/*  <Nav/>
      <LoginTest/>
      <ColorSchemesExample/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>} />
        <Route path= "/course"  element={<Course/>} />
        <Route path="/courseById" element={<CourseById/>} />
      </Routes> */}