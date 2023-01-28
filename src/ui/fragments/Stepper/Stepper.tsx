import { MobileStepper, Button, LinearProgress } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { IStepper } from "./interface";

export default function Stepper({activeStep = 1, steps, handleNext, handleBack}: IStepper) {

  const value = (activeStep / steps)*100;

  return (

    <div className="absolute w-full top-10 px-5">
      <LinearProgress variant="determinate" value={value}  color="secondary"/>
    </div>
    // <MobileStepper
    //   variant="progress"
    //   color="black"
    //   steps={6}
    //   position="top"
    //   activeStep={activeStep}
    //   nextButton={
    //     <Button size="small" onClick={handleNext} disabled={activeStep === steps -1} >
          
    //       {<KeyboardArrowRight />}
    //     </Button>
    //   }
    //   backButton={
    //     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
    //       {<KeyboardArrowLeft />}
         
    //     </Button>
    //   }
    // />
  );
}