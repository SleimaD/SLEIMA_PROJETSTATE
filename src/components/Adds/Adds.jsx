import React, {useState} from 'react'
import './Adds.css'

export default function Adds(props) {

    // variable that sets prices to monthly or yearly
    let prices = {
        onlineService: props.isAnnual ? '$10/yr' : '$1/mo',
        largerStorage: props.isAnnual ? '$20/yr' : '$2/mo',
        customizableProfile: props.isAnnual ? '$20/yr' : '$2/mo',
    };

  return (
    <div className="flex flex-col p-11 ">
      <h2 className="text-[2.3rem] text-[#002551] font-bold mt-5 max-[400px]:mt-[-3.8rem] max-[400px]:text-[1.5rem]">Pick add-ons</h2>
      <p className="mb-10 max-[400px]:mb-5 max-[400px]:w-[95%] max-[400px]:text-[0.8rem]">Add-ons help enhance your gaming experience.</p>

      <div className="space-y-4 mb-6 flex flex-col max-[400px]:items-center max-[400px]:mb-[2rem]">
        
        {/* display of add-ons  */}
        <div className={`flex justify-between items-center w-[150%] max-[400px]:w-[125%] max-[400px]:px-2 max-[400px]:p-3 border-gray-500 border-[1px] p-5 px-9 rounded-2xl ${props.onlineService ? 'bg-gray-200 border-purple-700' : ''}`}>
            <div className=' flex items-center gap-5'>
                <div>
                    <label className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                    id='input1'
                    type="checkbox"
                    checked={props.onlineService}
                    onChange={() => props.setOnlineService(!props.onlineService)}
                    className="absolute opacity-0"
                    />
                    <span className="block w-6 h-6 bg-white border-2 border-gray-300 rounded-md cursor-pointer"></span>
                    </label> 
                </div>
                <div className=' flex flex-col'>
                    <span className=' text-[1.3rem] font-bold text-[#002551] max-[400px]:text-[0.9rem] max-[400px]:w-[180%] '>Online service</span> 
                    <span className=' max-[400px]:text-[0.5rem] max-[400px]:w-[180%] '>Access to multiplayer games</span>
                </div>
            </div>
            <div className=' ms-10 text-purple-700 text-xl max-[400px]:text-[0.8rem]'>+{prices.onlineService}</div>
        </div>    

        <div className={`flex justify-between items-center w-[150%] max-[400px]:w-[125%] max-[400px]:px-2 max-[400px]:p-3 border-gray-500 border-[1px] p-5 px-9 rounded-2xl ${props.largerStorage ? 'bg-gray-200 border-purple-700' : ''}`}>
            <div className=' flex items-center gap-5'>
                <div>
                    <label className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                        id='input1'
                        type="checkbox"
                        checked={props.largerStorage}
                        onChange={() => props.setLargerStorage(!props.largerStorage)}
                        className="absolute opacity-0"
                        />
                        <span className="block w-6 h-6 bg-white border-2 border-gray-300 rounded-md cursor-pointer"></span>
                    </label>
                </div>
                <div className=' flex flex-col'>
                    <span className=' text-[1.3rem] font-bold text-[#002551] max-[400px]:text-[0.9rem] max-[400px]:w-[180%] '>Larger Storage</span> 
                    <span className=' max-[400px]:text-[0.5rem] max-[400px]:w-[180%] '>Extra 1TB of cloud save</span>
                </div>
            </div>
            <div className=' ms-10 text-purple-700 text-xl max-[400px]:text-[0.8rem]'>+{prices.largerStorage}</div>
        </div>       

        <div className={`flex justify-between items-center w-[150%] max-[400px]:w-[125%] max-[400px]:px-2 max-[400px]:p-3 border-gray-500 border-[1px] p-5 px-9 rounded-2xl ${props.customizableProfile ? 'bg-gray-200 border-purple-700' : ''}`}>
            <div className=' flex items-center gap-5'>
                <div>
                    <label className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                        id='input1'
                        type="checkbox"
                        checked={props.customizableProfile}
                        onChange={() => props.setCustomizableProfile(!props.customizableProfile)}
                        className="absolute opacity-0"
                        />
                        <span className="block w-6 h-6 bg-white border-2 border-gray-300 rounded-md cursor-pointer"></span>
                    </label>
                </div>
                <div className=' flex flex-col'>
                    <span className=' text-[1.3rem] font-bold text-[#002551] max-[400px]:text-[0.9rem] max-[400px]:w-[180%]'>Customizable Profile</span> 
                    <span className=' max-[400px]:text-[0.5rem] max-[400px]:w-[180%] '>Custom theme on your profile</span>
                </div>
            </div>
            <div className=' ms-10 text-purple-700 text-xl max-[400px]:text-[0.8rem]'>+{prices.customizableProfile}</div>
        </div>       
        
      </div>
      
    </div>
  );

}
