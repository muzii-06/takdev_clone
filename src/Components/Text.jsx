import React from 'react'

const Text = ({text_data}) => {
  return (
    <>
     <p style={{ width: 'max-content', fontSize:'12px',backgroundColor:"#F5F5F5", }} className=' rounded-2 m-0 px-2 py-1 '>{text_data}</p>
    </>
  )
}

export default Text