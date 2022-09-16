import React from 'react'
import "../styles/Signup.css"
import { useRef, useState } from 'react'
import axios from "axios"
import icon1 from "../images/Dribbble (3)_1.jpg"
import { Link } from 'react-router-dom'
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const signin=()=>{
    let regexForEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    let regexForPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if (email==""||password==""&&!regexForEmail.test(email)||!regexForPassword.test(password)
    ) {
      if(email==""){
        setemailerror("please this field is required !!")
      }else if(!regexForEmail.test(email)){
        setemailerror("please enter a correct email format !!") 
      }else if(!email==""||regexForEmail.test(email)){
        setemailerror("")
      }
      if(password==""){
        setpassworderror("please this field is required !!")
      }else if(!regexForPassword.test(password)){
        setpassworderror("password must contain uppercase,lowercase and numbers !!") 
      }else if(!password==""||regexForPassword.test(password)){
        setpassworderror("")
      }
   }
    else{
      alert("correct login")
    }
  }
  return (
    <>
      <section className='section'>
      <div class="first-half-body">
            <div class="product-logo">
                my<span class="logo-item">Q</span>uiz
              </div>
              <img src={icon1} alt="" width="400" class="central-img"/>
        </div>
        <div class="second-half-body">
            <h2>Login to myQuiz</h2>
            <div class="email-input">
            <label for="email">Email Address</label> <br/>
            <input type="email" placeholder="Enter email Address"  onChange={(e)=>setemail(e.target.value)} value={email}/>
            <div className='text-danger'>{emailerror}</div>
            </div>
            <div class="password-input">
            <label for="password">Password</label> <br/>
            <input type="password" placeholder="Enter password at least 8 character" onChange={(e)=>setpassword(e.target.value)}/>
            <div className='text-danger'>{passworderror}</div>
            </div>
            <div id="warning"></div>
            <button class="sign-in-button" onClick={signin}>sign in</button>
            <div class="confirmation">
                Do not have an account?<Link to="/" className='link'>signup</Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Signin;