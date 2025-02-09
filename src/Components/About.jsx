import React from 'react'
import { about_data } from '../data/about_data'
import SingleCard from './SingleCard'
import Line from './Line'

const About = () => {
  return (
    <>
    <div className="container-fluid mx-auto  ">
        <div className="row  justify-content-lg-around">
           
                {about_data?.map((item,index)=>
                {
                    return <SingleCard {...item} key={index}/>
                        
                    
                })}
            
        </div>
       <Line content={"More About Tak Devs"}/>
    </div>
    </>
  )
}

export default About