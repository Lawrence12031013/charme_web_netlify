import React, {useContext, useEffect, useState} from 'react'
import { Link, useFetcher, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext'

const Query = () => {
    const navigate = useNavigate()

    const {user} = useContext(LoginContext)
    const [ userID, setUserID ] = useState({
        id:user._id,
        name:user.name
    })
    const [ data, setData ] = useState(null)

    useEffect (() => {
        const fetchData = async () => {
            const id = userID.id
          try {
            await axios.get(`/order/user/${id}`).then( response => {
              setData(response.data);
              console.log(data)
            })
          } catch (err) {
            console.log(err)
          }
        };
        fetchData();
      },[])
   
  return (
    <div>
        <button onClick={ () => navigate(-1) }>
            <img src="images/back_arrow.png" className='w-5 m-4 relative z-10' alt="back_arrow" />
        </button>
        <h1 className='text-4xl text-center font-dance mb-5 relative z-10'>Query</h1>
        <div className='background w-full h-screen bg-center bg-no-repeate object-center absolute top-0'>
      </div>
      <div className='px-10 overflow-y-scroll'>
              <>
                {Array.isArray(data) && data.length !== 0 ? (
                    <div>
                        {data.map((item, i) => (
                            <div key={i} className='px-4 py-2 my-2 bg-white opacity-70 rounded'>
                                <p>預定日期：<span>{item.reservationDate}</span></p>
                                <p>預定時間：<span>{item.reservationTime}</span></p>
                                <p>選擇服務：<span>{item.service}</span></p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='relative text-center z-10'>
                        <h1>目前沒有訂單</h1>
                    </div>
                )}
              </>
            </div>
        
    </div>
  )
}

export default Query