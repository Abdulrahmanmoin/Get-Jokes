import React, { useState } from 'react'
import Container from '../container/Container'
import Button from '../components/Button'
import { getJokes } from '../services/GetServices'

const Jokes = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const jokesFunc = async () => {
    try {
      setLoading(true)
      setError(false)
      const res = await getJokes()
      setLoading(false)
      setData(res.data.data.data)

    } catch (error) {
      console.log(error);
      setError(true)
      setData([])
      setLoading(false)

    }
  }

  return (
    
    <>
      {((!loading && (data.length == 0)) && !error) && (
        <Container>
          <Button text="Get Jokes" className={"h-[calc(100vh-64px)]"} onClickFunc={jokesFunc} />
        </Container>
      )}


      {(data.length > 0) &&
        <Container>
          <div>
            <ul className='text-white text-lg flex flex-col pt-10 gap-10 pb-10'>
              {data.map((arr,) => (
                <li className='text-white font-semibold' key={arr.id}>
                  {arr.id + ": "} {arr.content}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      }

      {loading &&
        <>
          <Container>
            <div className='h-[calc(100vh-64px)] flex justify-center items-center text-center'>
              <h2 className='text-4xl font-bold text-white'>Loading...</h2>
            </div>
          </Container>
        </>}


      {error &&
        <>
          <Container>
            <div className='h-[calc(100vh-64px)] flex justify-center items-center text-center'>
              <h2 className=' text-4xl font-bold text-white'>Something went wrong </h2>
            </div>
          </Container>
        </>}
    </>
  )
}

export default Jokes