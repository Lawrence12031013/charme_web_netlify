import React, { useState } from 'react'
import {TIMES} from  '../components/useCalendar'
import {Link, useNavigate} from 'react-router-dom'

const Time = () => {
  const navigate = useNavigate()
  const [ noteTime, setNoteTime ] = useState()
  console.log( noteTime)
  const toOrder =  async (e)=> {
    await setNoteTime( e.target.value )
    navigate('/order')
  }
  return (
    <>
        <ul className=''>
            
                    {TIMES.map((title, i) => {
                      return (
                        <li className='flex justify-center px-4' key={i}>
                            <p key={i} className='text-center py-1 my-2 font-dance text-nomal text-black'>
                            {title.name} 
                            </p>
                            <>
                              {title.unavailableTime ?
                                 <button className='w-5/6 text-center py-1 mx-auto block my-2 rounded' value={title.value}></button>
                                 :
                                 <button className='login_button w-5/6 text-center py-1 mx-auto block my-2 rounded' value={title.value} onClick={toOrder}>預約</button>
                              }
                            </>
                             
                        </li>
                      )
                    })}
                
        </ul>
    </>
  )
}

export default Time