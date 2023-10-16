import React from 'react'
import { getCurretnDate } from '../utils/currentDate'
import { CiLocationOn } from  "react-icons/ci"


const Current = ( {data}: any ) => {
  const currentDate = getCurretnDate()
  const weatherIcon = data.current.condition.icon 
  return (
    <>
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white"> {currentDate}</p>
        </div>
          {weatherIcon && (
            <div> 
              <img className='w-[50px] object-cover' src={weatherIcon} alt={data.current.condition.text} />
            </div>

          )}
      </div>
      <p className="text-3xl tex-white"> 
        {data.current.temp_c.toFixed()}
        <span>ºC</span>
      </p>
      <span className="text-white">{data.current.condition.text}</span>
    </div>
    <div>
      <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
          < CiLocationOn />
      </div>

    </div>
    </>
  )
}

export default Current