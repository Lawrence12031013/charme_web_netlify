import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MemberButton = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className='background w-full h-screen bg-center bg-no-repeate object-center absolute top-0 opacity-70'>
        </div>
        <div className='absolute w-full top-1/4 middle'>
        <button className='login_button w-3/4 text-center py-1 my-4 mx-auto block' onClick={() => navigate('/calendar')}>預訂服務</button>
        <button className='login_button w-3/4 text-center py-1 my-4 mx-auto block' onClick={() => navigate('/query')}>服務查詢</button>
        <Link to={'https://www.instagram.com'} className='login_button w-3/4 text-center py-1 my-4 mx-auto block'>IG作品集</Link>
        <Link to={'https://lin.ee/wmzRNlI'} className='login_button w-3/4 text-center py-1 my-4 mx-auto block'>加LINE聊聊</Link>
        </div>
    </div>
  )
}

export default MemberButton