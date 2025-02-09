import React from 'react'
import SolutionCard from './SolutionCard'
import { solution_data } from '../data/solution_data'

const Solution = () => {
  return (
    <>
    <div className="container-fluid p-5 ">
        <p style={{ width: 'max-content', fontSize:'12px', }} className='bg-white  rounded-2 m-0 px-2 py-1 '>What we do</p>
        <h2 className='mt-5 display-5 fw-bold'>Solutions at TAK Devs</h2>
        <div className="row  justify-content-lg-around">
           
           {solution_data?.map((item,index)=>
           {
               return <SolutionCard {...item} key={index}/>
                   
               
           })}
           <div className="card col-lg-4 col-md-4 border-0 s-card last-card mt-3 p-3 d-flex flex-column gap-2 ">
        {/* <div className="p-3"> */}
        {/* <img width={"65"} src={icon} alt="" /> */}
        
            <h4 className='fw-bold display-6 m-0 p-0 text-white'>Let’s Work <span className='m-0 p-0 display-4 fw-bold'>Together</span> </h4>
           
           <button className="btn bg-dark text-white mt-3  get-btn">Get in Touch</button>
            
           
        
    </div>
       
   </div>
    </div>
    </>
  )
}

export default Solution