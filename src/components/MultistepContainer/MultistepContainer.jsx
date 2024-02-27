import React, {useState, useEffect} from 'react'
import Steps from '../Steps/Steps'
import InfosForm from '../InfosForm/InfosForm'
import SelectPlan from '../SelectPlan/SelectPlan'
import Adds from '../Adds/Adds'
import Summary from '../Summary/Summary'
import ThankYou from '../ThankYou/ThankYou'

export default function MultistepContainer() {

    //initializing states
    const [currentStep, setCurrentStep] = useState(1);
    const [isAnnual, setIsAnnual] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [onlineService, setOnlineService] = useState(false);
    const [largerStorage, setLargerStorage] = useState(false);
    const [customizableProfile, setCustomizableProfile] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    //function to switch to the next component
    let nextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep => currentStep + 1);
        }
    };

        //function to switch to the previous component
    let prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep => currentStep - 1);
        }
    };

    //function to switch from monthly to yearly
    let toggleBill = () => {
        setIsAnnual(!isAnnual);
    };

    //function to select a plan
    let handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    //function to return the price from yearly to monthly
    let getPlanPrice = (plan) => {
        let monthlyPrices = { Arcade: '$9/mo', Advanced: '$12/mo', Pro: '$15/mo' };
        let annualPrices = { Arcade: '$90/yr', Advanced: '$120/yr', Pro: '$150/yr' };
        return isAnnual ? annualPrices[plan] : monthlyPrices[plan];
    };


    //hhok to disabled/enable button 'next step'
    useEffect(() => {
        if (currentStep === 1) {
            setIsEnabled(name !== '' && email !== '' && phone !== '');
        } else if (currentStep === 2) {
          setIsEnabled(selectedPlan !== null);
        } else if (currentStep === 3) {
          setIsEnabled(onlineService || largerStorage || customizableProfile);
        } else {
          setIsEnabled(true);
        }
      }, [currentStep, selectedPlan, onlineService, largerStorage, customizableProfile, name, email, phone]); 
          


  return (
    <div className=' bg-white w-[70%] h-[40rem] rounded-xl p-2 flex gap-5 relative max-[400px]:flex-col max-[400px]:w-[88%] max-[400px]:h-[35rem]'>
        <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
        
        {/* display based on steps */}
        {currentStep === 1 && <InfosForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
         />} 
        {currentStep === 2 && <SelectPlan getPlanPrice={getPlanPrice} handleSelectPlan={handleSelectPlan} selectedPlan={selectedPlan} setSelectedPlan={selectedPlan} isAnnual={isAnnual} setIsAnnual={setIsAnnual} toggleBill={toggleBill} />}
        {currentStep === 3 && <Adds 
            isAnnual={isAnnual}
            setIsAnnual={setIsAnnual} 
            onlineService={onlineService} 
            setOnlineService={setOnlineService}
            largerStorage={largerStorage}
            setLargerStorage={setLargerStorage}
            customizableProfile={customizableProfile}
            setCustomizableProfile={setCustomizableProfile}
            />}
        {currentStep === 4 && 
            <Summary
                selectedPlan={selectedPlan}
                isAnnual={isAnnual}
                onlineService={onlineService}
                largerStorage={largerStorage}
                customizableProfile={customizableProfile}
                getPlanPrice={getPlanPrice}
                setCurrentStep={setCurrentStep}
        />}
        {currentStep === 5 && <ThankYou/>}

        <div className='absolute bottom-3 right-20 flex gap-3'>
            {/* display 'go back' button only when we're above the first step page */}
            {currentStep > 1 && currentStep < 5 && (
                <button 
                    onClick={prevStep} //go to the previous page 
                        className=' text-[#002551]  text-[1.2rem] font-bold absolute right-[510px] w-[100%] max-[400px]:right-20 max-[400px]:bottom-1 max-[400px]:text-[0.9rem]'
                >
                    Go Back
                </button>
            )}

            {/* display 'next step' button to go to the next page */}
            {currentStep < 4 && (
                <button 
                    onClick={nextStep} // go to next page
                    disabled={!isEnabled} //disable button if conditions not reunited
                    className={`bg-[#002551] text-white p-3 px-5 rounded-2xl font-bold max-[400px]:p-2 max-[400px]:text-[0.8rem] ${!isEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next Step
                </button>
            )}

            {/* display 'confirm' button when we're on the 4th(last) step */}
            {currentStep === 4 && (
                    <button 
                        onClick={nextStep} 
                        className='bg-[#002551] text-white p-3 px-5 rounded-2xl font-bold max-[400px]:p-2 max-[400px]:text-[0.8rem]'
                    >
                        Confirm
                    </button>
                )}
        </div>
       
    </div>
  )
}
