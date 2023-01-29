import { useState } from "react";
import Container from "../../components/Container";
import Inicial from "../../fragments/Inicial";
import Foods from "../../fragments/Foods";

import Stepper from '../../fragments/Stepper';
import Body from '../../fragments/Body';
import {  Button } from "@material-ui/core";


export default function Quiz() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } 
  };

  return (
    <div className="pt-8 pb-8 bg-slate-800 h-screen flex flex-col justify-center content-center">
      <Stepper activeStep={activeStep} steps={6} handleNext={handleNext} handleBack={handleBack}/>
      <Container>
        {activeStep === 0 && <Inicial/>}
        {activeStep === 1 && <Body />}
        {activeStep === 2 && <Foods />}
      </Container>
      <div className="absolute w-full w-screen bottom-0">
        <Button
          variant="contained"
          color='secondary'
          fullWidth
          onClick={handleNext}
        >  
          Próximo  
        </Button>

      </div>

    </div>
  )
}
