import React from 'react'
import './Steps.css'

export default function Steps(props) {
  return (
    <div className='Steps w-[18rem] h-full rounded-xl px-2 flex flex-col py-10 items-start gap-10 max-[400px]:flex max-[400px]:flex-wrap max-[400px]:w-[100%] max-[400px]:h-[35%] max-[400px]:text-[0.8rem] max-[400px]:gap-1 max-[400px]:py-3'>

        {/* display steps in left container */}
        <div className='step1 flex gap-5 justify-center items-center ms-8'> 
            <div className={` border-[2px] rounded-full p-2 px-4 ${props.currentStep === 1 ? ' border-black bg-blue-300 text-black' : 'border-white bg-none'}`}> 1 </div>
            <div>
                <small>Step 1</small>
                <p className=' font-bold text-white'>YOUR INFO</p>
            </div>
        </div>

        <div className='step2 flex gap-5 justify-center items-center ms-8'>
            <div className={` border-[2px] rounded-full p-2 px-4 ${props.currentStep === 2 ? ' border-black bg-blue-300 text-black' : 'border-white bg-none'}`}> 2 </div>
            <div>
                <small>Step 2</small>
                <p className=' font-bold text-white'>SELECT PLAN</p>
            </div>
        </div>

        <div className='step3 flex gap-5 justify-center items-center ms-8'>
            <div className={` border-[2px] rounded-full p-2 px-4 ${props.currentStep === 3 ? ' border-black bg-blue-300 text-black' : 'border-white bg-none'}`}> 3 </div>
            <div>
                <small>Step 3</small>
                <p className=' font-bold text-white'>ADD-ONS</p>
            </div>
        </div>

        <div className='step4 flex gap-5 justify-center items-center ms-8'>
            <div className={` border-[2px] rounded-full p-2 px-4 ${props.currentStep === 4 ? ' border-black bg-blue-300 text-black' : 'border-white bg-none'}`}> 4 </div>
            <div>
                <small>Step 4</small>
                <p className=' font-bold text-white'>SUMMARY</p>
            </div>
        </div>

    </div>
  )
}
