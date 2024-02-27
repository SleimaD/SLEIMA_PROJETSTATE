import React, {useState} from 'react'
import Arcade from '../../assets/icon-arcade.svg'
import Advanced from '../../assets/icon-advanced.svg'
import Pro from '../../assets/icon-pro.svg'

export default function SelectPlan(props) {
    
  return (
    <div className="flex flex-col p-12 max-[400px]:w-[100%]">
      <h2 className="text-[2.8rem] font-bold text-[#002551] max-[400px]:text-[1.4rem] max-[400px]:mt-[-4rem]">Select your plan</h2>
      <p className="mb-6 max-[400px]:mb-2 max-[400px]:text-[0.7rem]">You have the option of monthly or yearly billing</p>
      <div className="flex justify-center space-x-4 p-4 max-[400px]:flex-wrap max-[400px]:w-[100%] h-[50%] max-[400px]:p-0 max-[400px]:gap-1">
        <div
          className={` w-[12rem] h-[14r7m] max-[400px]:w-[5rem] max-[400px]:h-[5rem] flex flex-col relative border-gray-200 p-4 border-2 rounded-2xl cursor-pointer ${props.selectedPlan === 'Arcade' ? 'border-purple-600 bg-gray-200' : 'border-gray-200'}`}
          onClick={() => props.handleSelectPlan('Arcade')}>
          <div>
            <img className=' w-[40%]' src={Arcade} alt="" />
          </div>
          <div className=' absolute bottom-2'>
            <h3 className="font-semibold text-[1.4rem] text-[#002551] max-[400px]:text-[0.7rem]  ">Arcade</h3>
            <p className=" max-[400px]:text-[0.6rem]">{props.getPlanPrice('Arcade')}</p>
          </div>

        </div>
        <div
          className={` w-[12rem] h-[14rem] max-[400px]:w-[5rem] max-[400px]:h-[5rem] flex flex-col relative border-gray-200 p-4 border-2 rounded-2xl cursor-pointer ${props.selectedPlan === 'Advanced' ? 'border-purple-600 bg-gray-200' : 'border-gray-200'}`}
          onClick={() => props.handleSelectPlan('Advanced')}
        >
        <div>
            <img className=' w-[40%]' src={Advanced} alt="" />
          </div>

            <div className=' absolute bottom-2'>
                <h3 className="font-semibold text-[1.4rem] text-[#002551] max-[400px]:text-[0.7rem] ">Advanced</h3>
                <p className=" max-[400px]:text-[0.6rem]">{props.getPlanPrice('Advanced')}</p>
            </div>
        </div>
        <div
          className={` w-[12rem] h-[14rem] max-[400px]:w-[5rem] max-[400px]:h-[5rem] flex flex-col relative border-gray-200 p-4 border-2 rounded-2xl cursor-pointer ${props.selectedPlan === 'Pro' ? 'border-purple-600 bg-gray-200' : 'border-gray-200'}`}
          onClick={() => props.handleSelectPlan('Pro')}
        >
        <div>
            <img className=' w-[40%]' src={Pro} alt="" />
          </div>

            <div className=' absolute bottom-2'>
                <h3 className="font-semibold text-[1.4rem] text-[#002551] max-[400px]:text-[0.7rem] ">Pro</h3>
                <p className=" max-[400px]:text-[0.6rem]">{props.getPlanPrice('Pro')}</p>
            </div>
      </div>
    
    </div>

    <div className=' flex items-center justify-center w-full gap-10 mt-5 bg-blue-100 p-2 py-5 px-4 max-[400px]:py-1 max-[400px]:gap-5 max-[400px]:mt-12 max-[400px]:text-[0.6rem]'>
        <div className={`text-[1.3rem] max-[400px]:text-[0.8rem] font-bold ${props.isAnnual ? 'text-gray-500' : 'text-[#002551] '}`}>Monthly</div>

        <div>
            <label class="inline-flex items-center cursor-pointer">
                <input  type="checkbox" value="" className="sr-only peer"  checked={props.isAnnual} onChange={props.toggleBill} />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#002551] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
            </label>
        </div>

        <div className={`text-[1.3rem] max-[400px]:text-[0.8rem] font-bold ${props.isAnnual ? 'text-[#002551] ' : 'text-gray-500'}`}>Yearly</div>
    </div>

    </div>
  )
}
