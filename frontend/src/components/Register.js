import axios from "axios";
import React, { useState, useEffect } from "react";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Image, setImage] = useState("")
  const [grade, setGrade] = useState("")
  const [Specialization, setSpecialization] = useState("")
  const [role, setRole] = useState("")
const [buttonInput, setButtonInput] = useState(false)

  return (
    <div>

        {buttonInput?<div>
        <input
        type="text"
        placeholder="first name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <input id="email"
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input type="text" placeholder="grade" onChange={(e)=>{
        setGrade(e.target.value)
      }} />

      <input type="text" placeholder="Specialization" onChange={(e)=>{
        setSpecialization(e.target.value)
      }} /> </div>:<div> <button onClick={()=>{
        setRole("659c48a4d89ecd369adc20b8")
        setButtonInput(true)
      }}>student</button>
      <button onClick={()=>{
        setRole("659c2864a51ce618919355bd")
        setButtonInput(true)
      }}>teacher</button></div>
       }
      
      <button
        onClick={() => {
          const dataRegister = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            country: country,
            email: email,
            password: password,
            role :role
          };
          
            axios
              .post("http://localhost:5000/users/register/", dataRegister)
              .then((RegisterRes) => {console.log(RegisterRes);})
              .catch((err) => {
                console.log(err);
              });
            
          
        }}
      >
        Register
      </button>
    </div>
  );
};
