import React from 'react'

function Button({text, className,onClickFunc=null}) {
  return (
    <>
    <div className={`flex justify-center items-center text-center ${className}`}>
    <button className='capitalize text-white bg-blue-950 py-3 px-5 rounded-lg' onClick={onClickFunc}>{text}</button>
    </div>
    </>
  )
}

export default Button