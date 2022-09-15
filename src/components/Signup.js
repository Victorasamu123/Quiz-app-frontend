import React from 'react'
import "../styles/Signup.css"
import icon1 from "../images/Dribbble (3)_1.jpg"
const Signup = () => {
  return (
    <>
      <section className='section'>
      <div class="first-half-body">
            <div class="product-logo">
                my<span class="logo-item">N</span>ote
              </div>
              <img src={icon1} alt="" width="400" class="central-img"/>
        </div>
      </section>
    </>
  )
}

export default Signup;