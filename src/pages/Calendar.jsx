import React from 'react'
import ChooseDate from '../components/ChooseDate'
import { useNavigate } from 'react-router-dom'
import './calendar.css'

const Calendar = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={ () => navigate('/') }>
            <img src="images/back_arrow.png" className='w-5 m-4 relative z-10' alt="back_arrow" />
        </button>
        <h1 className='text-4xl text-center font-dance mb-6'>Order Service</h1>
        <ChooseDate />
    </div>
  )
}

export default Calendar