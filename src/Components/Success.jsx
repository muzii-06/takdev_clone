import React from 'react'
import Text from './Text'
import './Success.css';
const Success = () => {
  return (
    <>
    <div className="container-fluid py-3 px-5 mt-5">
        <Text text_data={"Where we do"} />
        <h3 className="display-4 fw-bold mt-4">
            Success Stories
        </h3>
        <h3 className="display-5 coming fw-bold w-75 mx-auto rounded-3 mt-5 text-center  p-5">
            Coming Soon
        </h3>
    </div>
    </>
  )
}

export default Success