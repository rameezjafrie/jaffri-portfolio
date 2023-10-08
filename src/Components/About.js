import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'

const About = () => {
  return (
    <div>
      <Header/>
      <section class="about" id="about">

<h1 class="heading"><span>About</span> Me</h1>

<div className="row">
    <div class="info">
        <h3><span>Name: </span>Syed Rameez Husnain Jaffri</h3>
        
        <h3><span>Post: </span>Full Stack Developer</h3>
        <h3><span>Language: </span> Urdu & English </h3>
        <NavLink>
            <button class="btn">Download CV <i class="fas fa-download"></i></button>
        </NavLink>
    </div>

    <div className="counter">
        <div class="box">
            <span>2+</span>
            <h3>Years of Experience</h3>
        </div>
        <div class="box">
            <span>100+</span>
            <h3>Projects Completed</h3>
        </div>
        <div class="box">
            <span>210+</span>
            <h3>Happy Clients</h3>
        </div>
        <div class="box">
            <span>10+</span>
            <h3>Awards Won</h3>
        </div>

    </div>
</div>
</section>
    </div>
  )
}

export default About
