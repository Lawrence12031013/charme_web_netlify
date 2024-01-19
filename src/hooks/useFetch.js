import React, { useState } from 'react'
import axios from 'axios'

export const useFetch = (url) => {

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    useFetch(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const response = await axios.get(url)  //Axios is a promise based HTTP client for the browser and Node.js
                setData(response.data)
            }catch(err){
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [url])

  return ( data, loading, error )
}

export default useFetch
