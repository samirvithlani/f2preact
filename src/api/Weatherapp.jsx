import axios from 'axios'
import React, { useEffect } from 'react'

export const Weatherapp = () => {
    useEffect(() => {
      
        getWeatherData()
      
    }, [])

    const getWeatherData = async () => {

        const res = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
            params:{
                q:"delhi",
                appid:"fe4feefa8543e06d4f3c66d92c61b69c"
            }
        })
        console.log(res)
    }
    
  return (
    <div>Weatherapp</div>
  )
}
