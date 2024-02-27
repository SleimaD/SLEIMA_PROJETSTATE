import React from 'react'
import ThankIcon from '../../assets/icon-thank-you.svg'

export default function () {
  return (
    <div className=' flex flex-col justify-center items-center gap-8 max-[400px]:gap-5'>
        <img className=' max-[400px]:mt-3 ' src={ThankIcon} alt="" />
        <h1 className=' text-[1.8rem] text-[#002551] font-bold'>Thank You</h1>
        <p className=' w-[40%] text-center max-[400px]:w-[70%] max-[400px]:text-[0.8rem]'>Thanks for confirming your subcription! we hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}
