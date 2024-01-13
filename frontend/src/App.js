import "./App.css";
import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import { Course } from "./components/course";
import { createContext } from "react";
import { useState } from "react";
import { Fixed } from "./components/fixed";
import { Nav } from "./components/Nav";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
export const selectContext=createContext()
function App() {
  const [selectedId, setSelectedId] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <selectContext.Provider value={{selectedId,setSelectedId,token,setToken}} > 

    <div className="App">
      <h1>Hello, World!</h1>
      <Nav/>
      
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>} />
        <Route path= "/course"  element={<Course/>} />
      </Routes>
    </div>
    </selectContext.Provider>

  );
}

export default App;
