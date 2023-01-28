import { useState } from "react";
import Container from "../../components/Container";
import Introduction from "../../fragments/Introduction";

import Stepper from '../../fragments/Stepper';
import Body from '../../fragments/Body';
import { Box, Button, LinearProgress } from "@material-ui/core";


export default function Home() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="pt-8 pb-8 bg-slate-800 h-screen flex flex-col justify-center content-center">
      <Stepper activeStep={activeStep} steps={6} handleNext={handleNext} handleBack={handleBack}/>
      <Container>
        {activeStep === 1 && <Introduction/>}
        {activeStep === 2 && <Body />}
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
