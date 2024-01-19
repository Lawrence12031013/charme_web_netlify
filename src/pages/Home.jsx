import React, { useContext, useState } from 'react'
import './home.css'
import Background from '../components/background'
import Button from '../components/button'
import MemberButton from '../components/MemberButton.jsx'
import { LoginContext } from '../context/LoginContext'
import { logout } from '../constants/actionTypes'

const Home = () => {
  const {user, dispatch} = useContext(LoginContext)

  const handleClick = (e) => {
    dispatch({type:logout})
  }

  return (
    <div className='container'>
      <>
        {user ? 
        <div>
          <MemberButton />
          <button className='login_button w-3/4 text-center py-1 my-4 mx-auto block fixed bottom-10 z-10 left-1/2 cancel_middle' onClick={handleClick}>登出</button>
        </div>
        :
        <div>
          <Background />
          <Button /> 
        </div>  
        }
      </>
    </div>
  )
}

export default Home