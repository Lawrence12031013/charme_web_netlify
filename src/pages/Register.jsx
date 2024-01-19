import React, { useContext, useState } from 'react'
import './login.css'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import axios from 'axios'

const Register = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate()
    // const {loading, error, dispatch} = useContext(LoginContext)
    const [ registerData, setRegisterData] = useState({
        name: undefined,
        phone: undefined,
        password: undefined
    })

    const handleChange = (e) => {
        setRegisterData( prev => ({...prev, [e.target.id] : e.target.value}))
    }

    const handleClick = async(e) => {
        e.preventDefault()
        try{
          const res = await axios.post("/auth/register", registerData)
          navigate("/login",res)
        }catch(error) {
          // console.log(error.response.data.Message)
          setError(error.response.data.Message)
        }
      }

  return (
    <div>
        <button onClick={ () => navigate('/') }>
            <img src="images/back_arrow.png" className='w-5 m-4' alt="back_arrow" />
        </button>
        <div>
            <h1 className='text-4xl text-center font-dance mb-3 mt-16'>Register</h1>
            <div className='flex flex-col'>
                <input className='text-xl px-2 py-1 my-3 w-3/4 mx-auto rounded rounded border border-black' id='name' type="text" placeholder='姓名' onChange={handleChange} />
                <input className='text-xl px-2 py-1 my-3 w-3/4 mx-auto rounded rounded border border-black' id='phone' type="text" placeholder='0912345678' onChange={handleChange}/>
                <input className='text-xl px-2 py-1 my-3 w-3/4 mx-auto rounded rounded border border-black' id='password' type="code" placeholder='password' onChange={handleChange}/>
            </div>
            <button className='login_button w-3/4 text-center py-1 my-3 mx-auto block' onClick={handleClick}>REGISTER</button>
        </div>
        
    </div>
  )
}

export default Register