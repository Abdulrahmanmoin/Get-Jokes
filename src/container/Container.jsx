import React from 'react'

const Container = ({children}) => {
  return (
    <div className='bg-blue-800 w-full text-center'>
        {children}
    </div>
  )
}

export default Container