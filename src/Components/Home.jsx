import React from 'react'
import NavBar from './NavBar'
import HomePage from './HomePage'
import Marquee from './Marquee'
import About from './About'
import './Home.css';
import Solution from './Solution'
import Solving from './Solving'
import ProductDevelopmentJourney from './ProductDevelopmentJourney'
import Success from './Success'
import { Awards } from './Awards'
import Testimonials from './Testimonials'
// import ".../global.css";

const Home = () => {
  return (
    <>
    <NavBar/>
    <HomePage/>
    <Marquee/>
    <About />
    {/* <div className="background"> */}

    <div className=" container-fluid mt-5 background-overlay">
    <Solution />
    </div>
    <Solving />
    <ProductDevelopmentJourney/>
    <Success />
    <div className=" container-fluid mt-5 background-overlay">
    <Awards />
    </div>
    <Testimonials/>
    {/* </div> */}

    </>
  )
}

export default Home