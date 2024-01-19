import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './order.css'
import { LoginContext } from '../context/LoginContext'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'

const Order = () => {
  const [ serviceItem, setServiceItem ] = useState(0)
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const { date, time } = location.state;
  const {user} = useContext(LoginContext)

  const [ serviceData, setServiceData] = useState({
    service:'',
    price:''
  })

  const [ orderData, setOrderData ] = useState({
    userID:'',
    name:'',
    phone:'',
    reservationDate:'',
    reservationTime:'',
    service:'',
    totalPrice:''
  })
  
  const [ timeData, setTimeData ] = useState({
    date:date,
    time:time
  }) 
  
  useEffect(() => {
    setOrderData({
      userID:user._id,
      name:user.name,
      phone:user.phone,
      reservationDate:date,
      reservationTime:time,
      ...serviceData
    }) 
  }, [serviceData])


  const handleClick = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/order", orderData);
      const orderId = res.data._id;  // 確保您從後端獲取了有效的 orderId
      console.log(orderId)
  
      // 檢查 timeData 是否正確設定
      const newTime = timeData;
      if (!newTime || !newTime.date || !newTime.time) {
        throw new Error('Invalid timeData');
      }
  
      const timeRes = await axios.post(`/time/${orderId}`, { date: newTime.date, time: newTime.time });
      navigate('/complete', { state: res.data })
    } catch(error) {
      setError(error.response ? error.response.data.Message : error.message);
    }
  };

  return (
    <div>
      <button onClick={ () => navigate(-1) }>
            <img src="images/back_arrow.png" className='w-5 m-4 relative z-10' alt="back_arrow" />
        </button>
    <>
        <h1 className='text-4xl text-center font-dance mb-3'>Order Service</h1>
      <div>
        {/* <div className='background w-full h-screen bg-center bg-no-repeate object-center absolute top-0'>
        </div> */}
          <div className='px-10 mt-4'>
              <p className='text-xl my-2'>預定日期： <span>{date}</span></p>
              <p className='text-xl my-2'>預定時間： <span>{time}</span></p>
              <p className='text-xl my-2'>請選擇服務：</p>
              <div>
                <button className='login_button w-full text-center text-xl py-1 my-3 mx-auto block rounded shadow-md shadow-slate-200' onClick={() => setServiceItem(1)}>熱蠟美肌除毛</button>
                {serviceItem == 1 ? 
                  <>
                  <div className='flex justify-between border-b py-2 pr-2 pl-5 border-slate-300'>
                  <p>施作項目</p>
                  <p>原價／回除價</p>
                </div>
                <div className='flex justify-between px-4 py-2'>
                  <div>
                    <input type="radio" name="item" id="item_1" onChange={() => setServiceData({service:'熱蠟美肌-腋下',price:'450'})} />
                    <label htmlFor="item_1" className='ml-2'>腋下</label>
                  </div>
                    <p>450／400</p>
                </div>
                <div className='flex justify-between px-4 py-2'>
                  <div>
                    <input type="radio" name="item" id="item_2" onChange={() => setServiceData({service:'熱蠟美肌-前手臂',price:'700'})}/>
                    <label htmlFor="item_2" className='ml-2'>前手臂</label>
                  </div>
                    <p>700／650</p>
                </div>
                <div className='flex justify-between px-4 py-2'>
                  <div>
                    <input type="radio" name="item" id="item_3" onChange={() => setServiceData({service:'熱蠟美肌-全手臂',price:'1,100'})}/>
                    <label htmlFor="item_3" className='ml-2'>全手臂</label>
                  </div>
                    <p>1,100／1,000</p>
                </div>
                <div className='flex justify-between px-4 py-2'>
                  <div>
                    <input type="radio" name="item" id="item_4" onChange={() => setServiceData({service:'熱蠟美肌-小腿',price:'1,000'})}/>
                    <label htmlFor="item_4" className='ml-2'>小腿</label>
                  </div>
                    <p>1,000／950</p>
                </div>
                <div className='flex justify-between px-4 py-2'>
                  <div>
                    <input type="radio" name="item" id="item_5" onChange={() => setServiceData({service:'熱蠟美肌-全腿',price:'1,600'})}/>
                    <label htmlFor="item_5" className='ml-2'>全腿</label>
                  </div>
                    <p>1,600／1,500</p>
                </div>
                <div className='flex justify-between px-4 py-2'>
                  <div>
                    <input type="radio" name="item" id="item_6" onChange={() => setServiceData({service:'熱蠟美肌-標準比基尼(V)',price:'1,200'})}/>
                    <label htmlFor="item_6" className='ml-2'>標準比基尼(V)</label>
                  </div>
                    <p>1,200／1,100</p>
                </div>
                <div className='flex justify-between px-4 py-2'>
                  <div>
                    <input type="radio" name="item" id="item_7" onChange={() => setServiceData({service:'熱蠟美肌-私密處全除(VIO)',price:'1,500'})}/>
                    <label htmlFor="item_7" className='ml-2'>私密處全除(VIO)</label>
                  </div>
                    <p>1,500／1,450</p>
                </div>
                  </>
                  :
                  <></>
                }
                
              </div>
              <div>
                <button className='login_button w-full text-center text-xl py-1 my-3 mx-auto block rounded shadow-md shadow-slate-200' onClick={() => setServiceItem(2)}>韓式睫毛管理</button>
                <div className='flex justify-between px-4 py-2'>
                  { serviceItem == 2 ? 
                  <>
                  <div>
                    <input type="radio" name="item_2" id="item_8" onChange={() => setServiceData({service:'韓式睫毛管理',price:'699'})}/>
                    <label htmlFor="item_8" className='ml-2'>韓式睫毛管理</label>
                  </div>
                    <p>699</p>
                  </>  
                  :
                  <></>
                }
                </div>
              </div>
          </div>
      </div>
    </>
    <div className='flex justify-center'>
      { serviceData.service !== '' ?
          <button className='login_button w-4/5 text-center py-1 mx-auto block rounded fixed bottom-10' onClick={handleClick}><div className='flex items-center justify-center'><p className='text-xl ml-4 font-robo'>確認預約</p></div></button>
        :
        <button className='login_button w-4/5 text-center py-1 mx-auto block rounded fixed bottom-10'><div className='flex items-center justify-center'><p className='text-xl ml-4 font-robo'>請選擇服務</p></div></button>
      }
      
    </div>
    </div>
  )
}

export default Order