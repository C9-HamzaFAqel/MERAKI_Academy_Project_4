import "./App.css";

import { Routes, Route } from "react-router-dom";

import { createContext } from "react";
import { useState } from "react";

import { CourseById } from "./components/CourseById/CourseById";
import { LoginTest } from "./components/logintest/LoginTest";
 import {UpdateCourse} from "./components/UpdateCourse/UpdateCourse";
import { NavbarBeforLogin } from "./components/NavbarBeforLogin/NavbarBeforLogin";
import { AllCourses } from "./components/all/AllCourses";
import { CourseByTitle } from "./components/CourseByTitle/CourseByTitle";
import { NavbarAfterLogin } from "./components/NavbarAfterLogin/NavbarAfterLogin";
import { CreatCourse } from "./components/CreatCourse/CreatCourse";
import { CourseByTeacher } from "./components/CourseByTeacher/CourseByTeacher";
import { FavoritCourse } from "./components/FavoritCourse/FavoritCourse";
import { CartCourse } from "./components/CartCoutse/CartCourse";
import { Register } from "./components/Register/Register";
import { Video } from "./components/Video/Video";
import {Error} from "./components/Error"
export const selectContext = createContext();
function App() {
  const [selectedId, setSelectedId] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [elemId, setElemId] = useState("");
  const [AllCourse, setAllCourse] = useState([]);
  const [Videos, setVideos] = useState([])
  return (
    <selectContext.Provider
      value={{
        selectedId,
        setSelectedId,
        token,
        setToken,
        elemId,
        setElemId,
        AllCourse,
        setAllCourse,
        Videos, setVideos
      }}
    >
      <div className="App">
        {token ? <NavbarAfterLogin /> : <NavbarBeforLogin />}
        
        <div className="layout">
        <Routes>
          <Route path="/courseByTitle" element={<CourseByTitle />} />
          <Route path="/Login" element={<LoginTest />} />
          <Route path="/" element={<AllCourses />} />
          
          <Route path="/Register"  element={<Register/>}/>
          <Route path="/courseById/:id" element={<CourseById />} />
          <Route path="/CraetCourse" element={<CreatCourse />} />
          <Route path="/CourseByTeacher/:teacher" element={<CourseByTeacher />} />
          <Route path="/UpdateCourse"  element={<UpdateCourse/>}/>
          <Route path="/favorit" element={<FavoritCourse/>} />
          <Route path="/Cart" element={<CartCourse/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        </div>
      </div>
    </selectContext.Provider>
  );
}

export default App;


