
import React, { ButtonHTMLAttributes, ChangeEvent, useState } from 'react'
import { Input } from './input'
import { se } from 'date-fns/locale';


export default function TimePicker() {
  
  const hours = [1,2,3,4,5,6,7,8,9,10,11,12];
  const minutes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

  const [setTime, setSetTime] = useState<boolean>(false);
  const [selectedHours, setSelectedHours] = useState<string>("");
  const [selectedMinutes, setSelectedMinutes] = useState<string>("");
  const [timeZone, setTimezone] = useState<string>("");
  const [selectdTime, setSelectdTime] = useState<string | undefined>("");
  return <div className='relative'>
    <Input  placeholder='select Time'   onClick={()=>{
      setSetTime(prev => !prev) 
    }}></Input>
    {
      setTime ? <div className='absolute p-4 h-[25vh]  top-10   bg-white shadow w-100 mt-1 border rounded-md '>
        <div className='grid grid-cols-[40%_40%_20%] justify-center items-center-safe'>
          <div className='h-[20vh]   overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <p className='text-center text-xs mb-1 font-medium text-muted'>Hours</p>
            {
              hours.map((item) => {
                return <div key={item} className='w-[100%] flex justify-center '>
                  <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
                      setSelectedHours(e?.currentTarget?.value);
                      console.log(e?.currentTarget?.value)
                  }} value={item} className={` ${selectedHours === String(item) ? 'bg-primary text-white': null} hover:bg-amber-300 focus:bg-primary focus:text-white rounded-4xl hover:cursor-pointer  flex justify-center items-center px-4 py-2 mb-1`}>{item}</button>
                  </div>
              })
            }
            </div>
          <div className='h-[20vh] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <p className='text-center text-xs font-medium text-muted mb-1'>Minutes</p>
            {
              minutes.map((item) => {
                return <div key={item} className='w-[100%] flex justify-center '>
                  <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
                     
                    setSelectedMinutes(e.currentTarget.value);

                  }} className={` ${selectedMinutes === String(item) ? 'bg-primary text-white':null} hover:bg-amber-300 focus:bg-primary focus:text-white rounded-4xl hover:cursor-pointer  flex justify-center items-center px-4 py-2 mb-1 `} value={item}>{item}</button>
                  </div>
              })
            }
            </div>
          <div className='overflow-auto'>
            <button onClick={(e)=>{
              setSetTime(false)
               setTimezone(e.currentTarget.value)
              
            }} value={'AM'} className='hover:bg-amber-300 w-[100%] mb-2 rounded-md text-center text-sm py-1  font-medium text-gray-900'>AM</button>
            <button onClick={(e)=>{
              setSetTime(false)
              setTimezone(e.currentTarget.value)
            }} value={'PM'} className='hover:bg-amber-300 w-[100%] mb-2 rounded-md text-center text-sm py-1  font-medium text-gray-900'>PM</button>
            
            
            </div>
          </div>
        </div>:null
    }
  </div>
}
