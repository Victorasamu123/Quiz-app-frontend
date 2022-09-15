import React from 'react'
import "../styles/Signup.css"
import icon1 from "../images/Dribbble (3)_1.jpg"
import { Link } from 'react-router-dom'
const Signin = () => {
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
            <input type="email" placeholder="Enter email Address" id="emailadd"/>
            </div>
            <div class="password-input">
            <label for="password">Password</label> <br/>
            <input type="password" placeholder="Enter password at least 8 character" id="password"/>
            </div>
            <div id="warning"></div>
            <button class="sign-in-button" onclick="signUpPage()">sign in</button>
            <div class="confirmation">
                Already have an account?<Link to="/" className='link'>signup</Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Signin;