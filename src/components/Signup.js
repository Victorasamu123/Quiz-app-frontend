import React, { useRef, useState } from 'react'
import axios from "axios"
import "../styles/Signup.css"
import icon1 from "../images/Dribbble (3)_1.jpg"
import { Link } from 'react-router-dom'
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstnameerror, setfirstnameerror] = useState("");
  const [lastnameerror, setlastnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const signup =()=>{
    let regexForFirstName=/^[\w]{3,}$/
    let regexForLastName=/^[\w]{3,}$/
    let regexForEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    let regexForPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
   if (firstname==""||lastname==""||email==""||password==""&&!regexForFirstName.test(firstname)||!regexForLastName.test(lastname)||!regexForEmail.test(email)||!regexForPassword.test(password)
    ) {
      if(firstname==""){
        setfirstnameerror("please this field is required !!")
      }else if(!regexForFirstName.test(firstname)){
        setfirstnameerror("firstname must be at least 3 character and space is not allowed !!") 
      }else if(!firstname==""||regexForFirstName.test(firstname)){
        setfirstnameerror("")
      }
      if(lastname==""){
        setlastnameerror("please this field is required !!")
      }else if(!regexForLastName.test(lastname)){
        setlastnameerror("lastname must be at least 3 character and space is not allowed !!") 
      }else if(!lastname==""||regexForLastName.test(firstname)){
        setlastnameerror("")
      }
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
      <div className="first-half-body">
            <div className="product-logo">
                my<span className="logo-item">Q</span>uiz
              </div>
              <img src={icon1} alt="" width="400" className="central-img"/>
        </div>
        <div className="second-half-body">
            <h2>Welcomme to myQuiz</h2>
            <div className="fullname-input">
            <label for="Fullname">Firstname</label> <br/>
            <input type="text" placeholder="Enter your Fullname" id="fullname" onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
            <div className='text-danger'>{firstnameerror}</div>
            </div>
            <div className="fullname-input mt-2">
            <label for="Fullname">Lastname</label> <br/>
            <input type="text" placeholder="Enter your Fullname" id="fullname" onChange={(e)=>setlastname(e.target.value)} value={lastname}/>
            <div className='text-danger'>{lastnameerror}</div>
            </div>
            <div className="email-input">
            <label for="email">Email  Address</label> <br/>
            <input type="email" placeholder="Enter email Address" id="emailadd" onChange={(e)=>setemail(e.target.value)} value={email}/>
            <div className='text-danger'>{emailerror}</div>
            </div> 
            <div className="password-input">
            <label for="password">Password</label> <br/>
            <input type="password" placeholder="Enter password at least 8 character" id="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <div className='text-danger'>{passworderror}</div>
            </div>
            <div id="warning"></div>
            <button  className="sign-in-button" onClick={signup}>sign up</button>
            <div className="confirmation">
                Already have an account?<Link to="/signin" className='link'>Log in</Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Signup;