import React, { useState , useEffect} from 'react'

export default function (props) {


  return (
    <div className=' p-5 w-[70%] flex flex-col items-center mt-8'>

        <div className=' flex flex-col items-start me-10 max-[400px]:w-[100%] max-[400px]:ms-16'>
            <h1 className=' text-[2.5rem] text-[#002551] font-bold max-[400px]:text-[1.4rem] max-[400px]:mt-[-4rem] max-[400px]:w-[100%]'>Personal Info</h1>
            <p className=' max-[400px]:w-[150%] max-[400px]:text-[0.9rem]'>please provide your name, email adress, and phone number</p>

        </div>

        <form className=' flex flex-col gap-5 mt-10 max-[400px]:mt-3  max-[400px]:flex max-[400px]:items-center max-[400px]:gap-2 max-[400px]:ms-10 '>
            <div className=' flex flex-col gap-2 '>
                <label className=' text-[#002551]  font-medium max-[400px]:text-[0.8rem]'>Your name: &nbsp; {props.name }</label>
                <input
                id="name"
                type="text"
                value={props.name}
                placeholder='your name'
                onChange={(e) => props.setName(e.target.value)}
                className=' bg-white border-2 border-gray-300  focus:outline-none rounded-2xl p-3 w-[30rem] focus:border-purple-300 max-[400px]:w-[13rem] max-[400px]:p-1'
                />
            </div>
            <div className=' flex flex-col gap-2 '>
                <label  className=' text-[#002551] font-medium max-[400px]:text-[0.7rem]'>Your email: &nbsp; {props.email} </label>
                <input
                id="email"
                type="email"
                value={props.email}
                placeholder='your email'
                onChange={(e) => props.setEmail(e.target.value)}
                className=' bg-white border-2 border-gray-300  focus:outline-none focus:border-purple-300 rounded-2xl p-3 w-[30rem] max-[400px]:w-[13rem] max-[400px]:p-1'
                />
            </div>
            <div className=' flex flex-col gap-2 '>
                <label  className=' text-[#002551] font-medium max-[400px]:text-[0.6rem]'>Your phone number: &nbsp; {props.phone} </label>
                <input
                id="phone"
                type="tel"
                value={props.phone}
                placeholder='your phone number'
                onChange={(e) => props.setPhone(e.target.value)}
                className=' bg-white border-2 border-gray-300  focus:outline-none rounded-2xl p-3 w-[30rem] focus:border-purple-300 max-[400px]:w-[13rem] max-[400px]:p-1'
                />
            </div>
        </form>
    </div>
  )
}
