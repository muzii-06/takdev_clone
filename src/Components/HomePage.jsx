import React from 'react'
import './HomePage.css'
const HomePage = () => {
  return (
    <>
    <div className="col-lg-11 hei   mx-auto mt-5">
        <div className="d-flex position-relative align-items-center ">
            <div className="col-lg-6 col-md-6 d-flex flex-column gap-4 left">
                
            <h1 className='display-3 fw-bold head'>Coding Beyond Possibilities!</h1>
            <p className='fs-5'>At TAK Devs, we push the boundaries of what's possible with technology. Our mission is to transform your vision into a ground-breaking reality.</p>
            <div className="d-flex gap-3">

            <button className=' rounded-2 border-0 free text-white'>Schedule a free Consultation</button>
            <button className='px-lg-5 rounded-2 border-0 services'>Services</button>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 right ">
                <img className='ban-img position-absolute  ' width={'10%'} src="https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2024/08/culture_one-1536x1024.jpg" alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default HomePage