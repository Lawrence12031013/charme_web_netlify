import React, {useContext, useState} from 'react'
import './login.css'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { login_failure, login_success, start_login } from '../constants/actionTypes'
import axios from 'axios'

const Login = () => {
    const registerSuccess = useLocation()
    const navigate = useNavigate()
    const {loading, error, dispatch} = useContext(LoginContext)
    const [ loginData, setLoginData ] = useState({
        account: undefined,
        password: undefined
    })

    
    const handleChange = (e) => {
        setLoginData( prev => ({...prev, [e.target.id] : e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type:start_login})
        try {
            const res = await axios.post('https://charme-api.vercel.app/auth/login', loginData)
            dispatch({type:login_success, payload:res.data.userDetails})
            navigate('/', {state:{islogin: true}})
        }catch(err){
            console.log(err.response)
            dispatch({type:login_failure, payload:error.response.data})
        }
    }
  return (
    <div>
        <button onClick={ () => navigate('/') }>
            <img src="images/back_arrow.png" className='w-5 m-4' alt="back_arrow" />
        </button>
        <div>
            <h1 className='text-4xl text-center font-dance mb-3 mt-16'>Log in</h1>
            <div className='flex flex-col'>
                <input className='text-xl px-2 py-1 my-3 w-3/4 mx-auto rounded rounded border border-black' type="text" placeholder='0912345678' id='account' onChange={handleChange}/>
                <input className='text-xl px-2 py-1 my-3 w-3/4 mx-auto rounded rounded border border-black' id='password' type="code" placeholder='password'  onChange={handleChange}/>
            </div>
            <button className='login_button w-3/4 text-center py-1 my-3 mx-auto block' onClick={handleClick}>LOG IN</button>
        </div>
        {/* <div className='mt-10'>
        <Link to={'/order'} className='border border-black bg-white w-3/4 text-center py-1 my-3 mx-auto block rounded'><div className='flex items-center justify-center'><img src='images/google.svg' className='w-5' alt='google' /><p className='text-xl ml-4 font-robo'>以 Google 帳號登入</p></div></Link>
        <Link to={'/order'} className='border border-black bg-white w-3/4 text-center py-1 my-3 mx-auto block rounded'><div className='flex items-center justify-center'><img src='images/line.svg' className='w-5' alt='line' /><p className='text-xl ml-4 font-robo'>以 LINE 帳號登入</p></div></Link>
        <Link to={'/order'} className='border border-black bg-white w-3/4 text-center py-1 my-3 mx-auto block rounded'><div className='flex items-center justify-center'><img src='images/fb.svg' className='w-5' alt='fb' /><p className='text-xl ml-4 font-robo'>以 Facebook 帳號登入</p></div></Link>
        </div> */}
    </div>
  )
}

export default Login
