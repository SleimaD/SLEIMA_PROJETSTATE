import React, {useState, useEffect} from 'react'
import Steps from '../Steps/Steps'
import InfosForm from '../InfosForm/InfosForm'
import SelectPlan from '../SelectPlan/SelectPlan'
import Adds from '../Adds/Adds'
import Summary from '../Summary/Summary'
import ThankYou from '../ThankYou/ThankYou'

export default function MultistepContainer() {

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



    let nextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep => currentStep + 1);
        }
    };

    let prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep => currentStep - 1);
        }
    };

    let toggleBill = () => {
        setIsAnnual(!isAnnual);
    };

    let handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    let getPlanPrice = (plan) => {
        let monthlyPrices = { Arcade: '$9/mo', Advanced: '$12/mo', Pro: '$15/mo' };
        let annualPrices = { Arcade: '$90/yr', Advanced: '$120/yr', Pro: '$150/yr' };
        return isAnnual ? annualPrices[plan] : monthlyPrices[plan];
    };


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
            {currentStep > 1 && currentStep < 5 && (
                <button 
                    onClick={prevStep}
                        className=' text-[#002551]  text-[1.2rem] font-bold absolute right-[510px] w-[100%] max-[400px]:right-20 max-[400px]:bottom-1 max-[400px]:text-[0.9rem]'
                >
                    Go Back
                </button>
            )}
            {currentStep < 4 && (
                <button 
                    onClick={nextStep}
                    disabled={!isEnabled}
                    className={`bg-[#002551] text-white p-3 px-5 rounded-2xl font-bold ${!isEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next Step
                </button>
            )}
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
