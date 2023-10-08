import React from 'react'
import Header from './Header'
import web from '../Images/1.jpg'
import web2 from '../Images/2.jpg'
import web3 from '../Images/3.jpg'
import web4 from '../Images/4.jpg'
import web5 from '../Images/5.jpg'
import web6 from '../Images/6.jpg'

const Portfolio = () => {
  return (
    <div>
        <Header/>

        <section class="portfolio" id="portfolio">
    <h1 class="heading">My <span>Portfolio</span></h1>

    <div class="box-container">
       
        <div className="box">
            <img src={web} alt=""/>
        </div>

         <div className="box">
            <img src={web2}alt=""/>
        </div>
         <div className="box">
            <img src={web3}alt=""/>
        </div>
         <div className="box">
            <img src={web4}alt=""/>
        </div>
         <div className="box">
            <img src={web5}alt=""/>
        </div>
         <div className="box">
            <img src={web6}alt=""/>
        </div>

    </div>
</section>
      
    </div>
  )
}

export default Portfolio
