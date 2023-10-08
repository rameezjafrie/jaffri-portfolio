import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Header/>

      <section class="home" id="home">
        <h3>HI THERE !</h3>
        <h1>
          I'M <span>Syed Rameez</span>
        </h1>
        <p>
          Founder & CEO of Coding Master. I'm B.Sc(C.S) Final Year Student, a
          Frontend Web Developer & providing quality content on web development.
        </p>
        <a href="#about">

        <NavLink exact to="/about">
                {" "}
          
          <button class="btn">
            About Me <i class="fas fa-user"></i>
          </button>
              </NavLink>
        </a>
      </section>
    </div>
  );
};

export default Home;
