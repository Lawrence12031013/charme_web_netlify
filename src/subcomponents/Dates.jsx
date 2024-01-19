import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCalendar, eventSelect, WEEKS, TIMES } from '../components/useCalendar'
import { format, getDate, getDay, getMonth, getTime, getYear } from 'date-fns'
import {useNavigate} from 'react-router-dom'


const Dates = (props) => {

  const [ noteDate, setNoteDate ] = useState('')
  const [data, setData] = useState([])
  const calendar = useCalendar()
  const currentDate = new Date();
  
  const navigate = useNavigate()
  const [ noteTime, setNoteTime ] = useState('')
  const [booked, setBooked] = useState({
    "10:00":false,
    "13:00":false,
    "15:00":false,
    "17:00":false,
  });


  useEffect(() => {
    setNoteDate(format(new Date(), "yyyy-MM-dd"));
  },[])

  useEffect(() => {
    const getTime = async () => {
      const date = noteDate;
      try {
        const response = await axios.get(`/time/${date}`);
        const newData = {};

        for (let i = 0; i < response.data.length; i++) {
          const timeSlot = response.data[i];
          newData[timeSlot.time] = true;
        }

        setBooked(newData);
      } catch (error) {
        console.log(error);
      }
    };

    getTime();
  }, [noteDate]);

  const handleReservation = (time) => {
    // 假設這裡有預約邏輯，成功後更新 booked 狀態
    
    setBooked(prevBooked => ({ ...prevBooked, [time]: true }));
    setNoteTime(time)
    
    // navigate(`/order/${noteDate}/${time}`)
    navigate('/order', { state: { date: noteDate, time: time } })

  };

  return (
    <div>
        <div className='w-full h-full flex flex-col'>
            <table 
              border="0"
              cellPadding="0"
              cellSpacing="0"
              className="m-5 mt-2 mx-auto w-full">
              <thead>
                    <tr className="tr123">
                      <td colSpan="100%" className="abc">
                        <div className="flex justify-evenly items-center mx-auto">
                          <img
                            src='images/left-chevron.png'
                            className="imgIconE mx-5 h-4"
                            onClick={calendar.setPreMonth}
                            alt="上一個月"
                          />
                          {/* 可替換format: dd(加上日期) MM(數字月) MMMM(完整英文月) */}
                          <div className="inline-block text-xl font-dance">
                            {format(calendar.today, 'MMM  yyyy')}
                          </div>
                          <img
                            src='images/right-chevron.png'
                            className="mx-5 h-4"
                            onClick={calendar.setNextMonth}
                            alt="下一個月"
                          />
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 印出星期 */}
                    <tr className='tr123 px-4 mt-4'>
                      {WEEKS.map((title, i) => {
                        return (
                          <td key={i} className='td text-center pt-3 font-dance text-nomal text-black'>
                            {title} 
                          </td>
                        )
                      })}
                    </tr>
                      {/* 印出日期 */}
                        {calendar.days.map((week, i) => {
                          //map出來的值是月份
                          return (
                              <tr key={i}>
                                {week.map((date, j) => {
                                  const otherMonth = date.otherMonth //判斷當月或是前後月
                                  const selectedToday = () => {
                                    calendar.selectDate(date.date)
                                  }
                                  const iconsvg = []
                                  let checkdate = data.find((a) => {
                                    return a.date == getDate(date.date)
                                  })

                                  return (
                                    <>
                                    {
                                      format(date.date,"yyyy-MM-dd") < format(currentDate, "yyyy-MM-dd") ?
                                      <td
                                        key={j}
                                        className="dayE text-slate-400 rounded my-2"
                                      >
                                        <button
                                          onClick={() => {
                                            setNoteDate(format(date.date, "yyyy-MM-dd"))
                                          }}
                                          className='w-full py-2'
                                          disabled
                                        >
                                            <div className='text-center font-dance'>
                                              {!otherMonth && getDate(date.date)}
                                            </div>
                                        </button>
                                      </td>
                                      :
                                    <>
                                    {(format(date.date, 'yyyy-MM-dd') == format(currentDate, 'yyyy-MM-dd'))
                                    ? 
                                      <td
                                        className="dayE bg-today rounded my-2"
                                        key={j}
                                      >
                                        <button
                                          onClick={() => {
                                            setNoteDate(format(date.date, "yyyy-MM-dd"))
                                          }}
                                          className='w-full py-2'
                                        >
                                            <div className='text-center font-dance'>
                                              {!otherMonth && getDate(date.date)}
                                            </div>
                                          
                                        </button>
                                      </td>
                                      :
                                      <>
                                        {
                                          getDate(noteDate) == getDate(date.date) && !otherMonth ? 
                                            <td
                                            className="dayE selectDate rounded my-2"
                                            key={j}
                                          >
                                            <button
                                              onClick={() => {
                                                setNoteDate(format(date.date, "yyyy-MM-dd"))
                                              }}
                                              className='w-full py-2'
                                            >
                                                <div className='text-center font-dance'>
                                                  {!otherMonth && getDate(date.date)}
                                                </div>
                                              
                                            </button>
                                          </td>
                                          :
                                            <td
                                            className="dayE my-2"
                                            key={j}
                                          >
                                            <button
                                              onClick={() => {
                                                setNoteDate(format(date.date, "yyyy-MM-dd"))
                                              }}
                                              className='w-full py-2'
                                            >
                                                <div className='text-center font-dance'>
                                                  {!otherMonth && getDate(date.date)}
                                                </div>
                                              
                                            </button>
                                          </td>
                                        }
                                      </>
                                  }
                                    </>
                                }</>
                                  )
                                })}
                              </tr>
                          )
                        })}
                  </tbody>
            </table>
        </div>

      <>
        <div className='flex w-full'>
            <ul className='w-full'>
              {['10:00', '13:00', '15:00', '17:00'].map((time, i) => (
                <div className='flex px-2' key={i}>
                  <li className='my-2'><p className='text-center py-1 my-2 font-dance text-nomal text-black'>{time}</p>
                  </li>
                  {booked[time] ? (
                    <button className='w-5/6 text-center py-1 mx-auto block my-4 rounded text-xl' disabled>已預約</button>
                  ) : (
                    <button className='login_button w-5/6 text-center py-1 mx-auto block my-4 rounded text-xl shadow-md shadow-slate-200' onClick={() => handleReservation(time)}>預約</button>
                  )}
                </div>
              ))}
          </ul>
        </div>
      </>
    </div>
  )
}

export default Dates
