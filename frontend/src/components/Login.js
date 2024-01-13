import React from 'react'
import { useContext,useState } from 'react'
import { selectContext } from '../App'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Login = () => {
    const {token,setToken}=useContext(selectContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div>
        <input
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
      <button
        onClick={() => {
          const dataLogin = { email, password };
          console.log(dataLogin);
           axios
            .post("http://localhost:5000/users/login", dataLogin)
            .then((res) => {
              console.log(res);
              setToken(res.data.token)
              localStorage.setItem("token",res.data.token)
            })
            .catch((err) => {
              console.log(err);
            }); 
            
        }}
      >
        Login
      </button>
      <Link to="/register">sign up</Link>
    </div>
  )
}
