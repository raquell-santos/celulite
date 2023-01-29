import { KeyboardBackspace } from '@material-ui/icons';
import { LinearProgress } from "@material-ui/core";
import { IStepper } from "./interface";

export default function Stepper({activeStep, steps, handleBack}: IStepper) {
  const value = (activeStep / steps)*100;

  return (
    <div className="absolute w-full top-2 mb-5 px-5">
      <div className={`mb-2 h-8 ${!activeStep ? 'invisible': 'visible'}`} >
        <KeyboardBackspace 
          onClick={handleBack}
          fontSize="large" 
          style={{color: 'white', cursor: 'pointer'}}
        />  
      </div>
      <LinearProgress variant="determinate" value={value}  color="secondary"/>
    </div>
  );
}