import React, { useState } from 'react'
import img from '../public/weather.svg'

function Weather() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const handleClick = async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=63ccd2ed6790363097d184c46728e1ef&units=metric`
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setWeather(data);
    }

  return (
    <>
    <div className='w-[100%] h-[100vh] bg-blue-900 flex items-center justify-center text-white text-[18px]'>
      <div className='w-[30%] h-[80vh] bg-blue-600 rounded-2xl flex flex-col items-center gap-5'>
      <div className='mt-7 w-[60%] flex gap-4 mr-10'>
    <input type="text" placeholder='Enter Location' className='outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-400' onChange={(e)=>{
      setSearch(e.target.value)
    }} />
    <button className='bg-white text-blue-600 p-1 rounded-md transition-all ease-in-out hover:bg-red-500 hover:text-white' onClick={handleClick}>Search</button>
    </div>
    {

    weather &&
    (<>
    <div>{weather.sys.country} {weather.name}</div>
    <div className='w-24'>
      <img src={img} alt="" className='w-full'/>
      </div>
    <div>Temperature : {weather.main.temp} °C / {weather.main.temp * 9/5 + 32} °F </div>
    <div>Wind Direction : {weather.wind.deg}</div>
    <div>Degs Speed : {weather.wind.speed} km/h</div>
    </>)
    }
    </div>
    </div>
    </>
  )
}

export default Weather
