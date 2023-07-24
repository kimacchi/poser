"use client"

import React, {useState, useEffect} from 'react'

const Page = () => {
  const [clothing, setClothing] = useState("All");
  const [gender, setGender] = useState("All");
  const [age, setAge] = useState(4)
  return (
    <div className='flex flex-col justify-center items-center h-full px-6'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex items-center flex-col gap-6'>
          <h1 className='text-4xl w-full text-center'>Poser Bodies</h1>
          <p className='text-center w-full sm:w-5/6'>
            Select your desired specifications to get the best inspiration for your next awesome art!
          </p>
        </div>

        <div className='flex w-full justify-between items-center flex-grow'>
          <div className='h-[1px] w-2/5 bg-white'></div>
          <p className="font-bold">Clothing</p>
          <div className='h-[1px] w-2/5 bg-white'></div>
        </div>

        <div className="inline-flex rounded-md shadow-sm">
          <button className="sm:min-w-[160px] min-w-[90px] px-4 py-2 text-sm font-medium bg-darkPurple rounded-l-lg border-2 border-normalPurple text-white hover:text-white hover:bg-normalPurple focus:ring-blue-500 focus:text-white">
            Profile
          </button>
          <button className="sm:min-w-[160px] min-w-[90px] px-4 py-2 text-sm font-medium bg-darkPurple border-2 border-l-0 border-normalPurple text-white hover:text-white hover:bg-normalPurple focus:ring-blue-500 focus:text-white">
            Settings
          </button>
          <button className="sm:min-w-[160px] min-w-[90px] px-4 py-2 text-sm font-medium bg-darkPurple border-2 border-l-0 rounded-r-lg border-normalPurple text-white hover:text-white hover:bg-normalPurple focus:ring-blue-500 focus:text-white">
            Messages
          </button>
        </div>

        <div className='flex w-full justify-between items-center'>
          <div className='h-[1px] w-2/5 bg-white'></div>
          <p className="font-bold">Gender</p>
          <div className='h-[1px] w-2/5 bg-white'></div>
        </div>

        <div>
          <button className="sm:min-w-[160px] min-w-[90px] px-4 py-2 text-sm font-medium bg-darkPurple rounded-l-lg border-2 border-normalPurple text-white hover:text-white hover:bg-normalPurple focus:ring-blue-500 focus:text-white">
            Profile
          </button>
          <button className="sm:min-w-[160px] min-w-[90px] px-4 py-2 text-sm font-medium bg-darkPurple border-2 border-l-0 border-normalPurple text-white hover:text-white hover:bg-normalPurple focus:ring-blue-500 focus:text-white">
            Settings
          </button>
          <button className="sm:min-w-[160px] min-w-[90px] px-4 py-2 text-sm font-medium bg-darkPurple border-2 border-l-0 rounded-r-lg border-normalPurple text-white hover:text-white hover:bg-normalPurple focus:ring-blue-500 focus:text-white">
            Messages
          </button>
        </div>

        <div className='flex w-full justify-between items-center'>
          <div className='h-[1px] w-2/5 bg-white'></div>
          <p className="font-bold">Age</p>
          <div className='h-[1px] w-2/5 bg-white'></div>
        </div>

        <div className='w-4/5 flex flex-col items-center gap-4'>
          <p className='font-extralight'>()</p>
          <input id="steps-range" type="range" min={0} max={3} value={age} onChange={(ele)=>setAge(parseInt(ele.target.value))} className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-darkPurple"></input>
        </div>


        <div className='flex w-full justify-between items-center'>
          <div className='h-[1px] w-[45%] bg-white'></div>
          <div className='h-6 w-6 rounded-full border-4 border-white'></div>
          <div className='h-[1px] w-[45%] bg-white'></div>
        </div>


        <button type="button" className="text-white bg-darkGradient hover:scale-105 shadow-2xl shadow-normalPurpleShadow font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">Search</button>
      </div>
    </div>
  )
}

export default Page