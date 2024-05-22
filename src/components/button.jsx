import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
        <div className='flex justify-evenly py-6 w-full md:relative fixed bottom-0 bg-white'>
            <Link className='rounded border-2 border-black font-bold px-10 py-2' to="/login">Log in</Link>
            <Link className='rounded bg-black text-white font-bold px-10 py-2' to='/register'>Register</Link>
        </div>
    </div>
  )
}

export default Button
