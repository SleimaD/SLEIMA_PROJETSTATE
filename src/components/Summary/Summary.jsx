import React from 'react'

export default function Summary(props) {


  let selectedPlanPrice = props.getPlanPrice(props.selectedPlan);


  let calculateTotal = () => {

    let total = parseFloat(selectedPlanPrice.replace(/[^0-9.]/g, ''));
  
    total += props.onlineService ? (props.isAnnual ? 10 : 1) : 0;
    total += props.largerStorage ? (props.isAnnual ? 20 : 2) : 0;
    total += props.customizableProfile ? (props.isAnnual ? 20 : 2) : 0;
  
    return props.isAnnual ? `$${total}/yr` : `$${total}/mo`;
  };
  


  let totalCost = calculateTotal();


  let ChangePlan = () => {
    props.setCurrentStep(2); 
  };


  return (
    <div className="flex flex-col p-11">
      <h2 className="text-[2.3rem] text-[#002551] font-bold mt-5 max-[400px]:mt-[-3rem] max-[400px]:text-[1.8rem]">Finishing up</h2>
      <p className="mb-10 max-[400px]:mb-4 max-[400px]:text-[0.8rem] max-[400px]:w-[130%]">Double-check everything looks OK before confirming.</p>

        {/* display of summary */}
      <div className="mb-6 bg-gray-100 p-5 rounded-2xl w-[150%] max-[400px]:w-[100%] max-[400px]:mb-2 max-[400px]:p-2">
        <div className="flex justify-between items-center">
          <div className=' flex flex-col items-start'>
            <span className="text-[1.3rem] font-bold text-[#002551] max-[400px]:text-[0.8rem]">{props.selectedPlan} ({props.isAnnual ? 'Yearly' : 'Monthly'})</span>
            <button
                onClick={ChangePlan}
                className="text-gray-400 underline max-[400px]:text-[0.6rem]"
            >
                Change
            </button>
          </div>
          <span className="text-xl text-[#002551] max-[400px]:text-sm">{selectedPlanPrice}</span>
        </div>

        <div className=' flex justify-center w-full p-2 mt-5 mb-5 max-[400px]:mt-1 max-[400px]:mb-1'>
            <div className=' w-[90%] h-[1px] bg-[#b3b2b2] ' />
        </div>

        {/* display the right add-ons based on users's choices */}
        {props.onlineService && (
          <div className="flex justify-between">
            <span className="text-[1.3rem] text-[#002551] max-[400px]:text-[0.7rem]">Online service</span>
            <span className="text-xl text-[#002551]">+{props.isAnnual ? '$10/yr' : '$1/mo'}</span>
          </div>
        )}
        {props.largerStorage && (
          <div className="flex justify-between items-center">
            <span className="text-[1.3rem] text-[#002551] max-[400px]:text-[0.7rem]">Larger Storage</span>
            <span className="text-xl text-[#002551] max-[400px]:text-[0.8rem]">+{props.isAnnual ? '$20/yr' : '$2/mo'}</span>
          </div>
        )}
        {props.customizableProfile && (
          <div className="flex justify-between">
            <span className="text-[1.3rem] text-[#002551] max-[400px]:text-[0.7rem]">Customizable Profile</span>
            <span className="text-xl text-[#002551] max-[400px]:text-[0.8rem]">+{props.isAnnual ? '$20/yr' : '$2/mo'}</span>
          </div>
        )}

    </div>
        <div className="flex justify-between mt-1 ms-5 bg-white w-[140%] max-[400px]:ms-[-3rem] max-[400px]:justify-center max-[400px]:gap-3">
          <span className="text-[1rem] font-bold text-[#002551] max-[400px]:text-[0.8rem] ">Total (per {props.isAnnual ? 'year' : 'month'})</span>
          <span className="text-md text-[#002551] max-[400px]:text-sm">{totalCost}</span>
        </div>
    </div>
  );

}
