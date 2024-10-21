import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { Button } from '../components'

const Home = () => {
  return (
    <Container>

      {/* make the text good and add get jokes button which navigate it to he joke page and also add hmburger menu */}
      <div className='flex h-[calc(100vh-134px)] md:h-[calc(100vh-204px)] justify-center items-center gap-4'>
        <h2 className='capitalize font-bold text-xl md:text-3xl text-white'>Get Amazing Jokes:</h2>
        <div>
          <Link
            to="/get-jokes"
            className='cursor-pointer'
          >
            <Button text="Click here to be redirected to the jokes page."/>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Home
