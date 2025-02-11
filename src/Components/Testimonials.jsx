import React from 'react'
import Text from './Text'

const Testimonials = () => {
  return (
    <>
    <div className="container-fluid p-4 mt-5">
        <Text text_data={"HOW WAS IT"}/> 
        <h2 className='mt-4 display-5 fw-bold'>Testimonials</h2>
        <p className='mt-2 fs-2 m-0 p-0'>TAK Devs Pvt Ltd delivered a functional POC and offered detailed guidance throughout the development process. The team was helpful in explaining the project's complexities for the client to understand everything thoroughly. They communicated via virtual meetings, email, and messages. </p>
        <h5 className='mt-4 fs-5 fw-bold'>Mark zimermann</h5>
        <p className='text-secondary m-0 p-0'>Managing Director</p>
        
    </div>
    </>
  )
}

export default Testimonials