import React from 'react'
import Text from './Text'
import Awards_card from './Awards_card'
import { awards_data } from '../data/awards_data'

export const Awards = () => {
  return (
    <>
    <div className="container-fluid p-5 ">
    <Text text_data={"Awards"} />
    <h2 className='mt-5 display-5 fw-bold'>Outshining Our Peers</h2>
    <div className="row  justify-content-lg-between">
           
           {awards_data?.map((item,index)=>
           {
               return <Awards_card {...item} key={index}/>
                   
               
           })}
           </div>
    </div>
    </>
  )
}
