import React from 'react'
import './About.css';
const SingleCard = ({icon,heading,desc}) => {
  return (
    <>
     <div className="card col-lg-4 col-md-4 border-0 car d-flex flex-column gap-2 ">
        {/* <div className="p-3"> */}
        <img width={"65"} src={icon} alt="" />
        
            <h4 className='fw-bolder'>{heading}</h4>
            <p className='font_desc'>{desc}</p>
           
        
    </div>
    </>
  )
}

export default SingleCard