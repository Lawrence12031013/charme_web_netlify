import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import axios from 'axios'

const Complete = () => {

    const { user } = useContext(LoginContext)
    const navigate = useNavigate()

    const { state } = useLocation();

    const start = state.reservationDate + 'T' + state.reservationTime + ':00.000+08:00'
    const endHour = new Date(start).getHours() + 2
    const end =  state.reservationDate + 'T' + endHour + ':00:00.000+08:00'
    console.log(start)
    console.log(end)

    // 登入google帳號獲取token
    // async function googleSignIn() {
    //     const { error } = await supabase.auth.signInWithOAuth({
    //         provider:'google',
    //         options:{
    //             scopes:'https://www.googleapis.com/auth/calendar'
    //         }
    //     });
        
    //     if(error) {
    //         alert('Error logging in to Google with supabase.')
    //         console.log(error)
    //     }
    // }

    // 登出google帳號
    // async function googleSignOut() {
    //     await supabase.auth.signout()
    // }

    // async function createCalendarEvent() {
    //   console.log("Create calendar event")
    //   const event = {
    //     'summery':state.name,
    //     'description':state.service,
    //     'start':{
    //       'dateTime': start,
    //       'timeZone' : 'Asia/Taipei'
    //     },
    //     'end':{
    //       'dateTime': end,
    //       'timeZone' : 'Asia/Taipei'
    //     }
    //   }
    //   await axios.post('https://www.googleapis.com/calendar/v3/calendars/primary/events',{headers:{"Authorization":'Bearer' + session.provider_token},body:JSON.stringify(event)})
    //   .then((data) => {
    //     return data.json()
    //   }).then((data) => {
    //     console.log(data);
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // }

    const handleClick = () => {
        // googleSignOut()
        navigate('/')
    }

    // 進到預定完成頁面後
    // useEffect(() => {
    //     googleSignIn()
    //     createCalendarEvent()
    // }, [])



  return (
    <div className='text-center mt-52'> 
        <h1 className='text-4xl text-center font-dance mb-3 mt-16'>Thank you</h1>
        <div className='flex justify-center my-4 text-xl'>
            <p>預定日期：</p>
            <span className='ml-1'>{ state.reservationDate }</span>
        </div>
        <div className='flex justify-center my-4 text-xl'>
            <p>預定時間：</p>
            <span className='ml-1'>{ state.reservationTime }</span>
        </div>
        <div className='flex justify-center my-4 text-xl'>
            <p>預定服務：</p>
            <span className='ml-1'>{ state.service }</span>
        </div>
        <div className='my-4 text-xl'>
            <p className='my-1'>已為您預約服務</p>
            <p className='my-1'>如需變更請提前三天通知</p>
            <p className='my-1'>謝謝您</p>
        </div>
        <button className='login_button w-3/4 text-center py-1 my-4 mx-auto block fixed bottom-10 z-10 left-1/2 cancel_middle' onClick={handleClick}>回到首頁</button>
    </div>
    
  )
}

export default Complete