import React from 'react'
import NavBar from './NavBar'
import HomePage from './HomePage'
import Marquee from './Marquee'
import About from './About'
import './Home.css';
import Solution from './Solution'
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
    {/* </div> */}

    </>
  )
}

export default Home