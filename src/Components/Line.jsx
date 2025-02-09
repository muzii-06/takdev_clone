import React from 'react'
import './About.css'
const Line = ({content}) => {
  return (
    <>
    <div className="py-3 new">

    <a className='m-0 px-4 font_more text-decoration-none' href="#">{content}</a>
     <div className="outerline position-relative">
        <div className="inner-line position-absolute">
        </div>
     </div>
    </div>
    </>
  )
}

export default Line