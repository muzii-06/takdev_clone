import React from 'react'

const Awards_card = ({a_img,a_head,a_desc}) => {
  return (
    <>
     <div className="card col-lg-2 col-md-6 border-0 py-5 mt-3   d-flex flex-column gap-2 ">
        {/* <div className="p-3"> */}
        <img className='d-block mx-auto imm' width={"100"} height={"100"} src={a_img} alt="" />
        
            <h4 className='fw-bolder text-center fs-2 mt-2'>{a_head}</h4>
            <p className='font_desc text-center mx-auto text-secondary '>{a_desc}</p>
           
        
    </div>
    </>
  )
}

export default Awards_card