import { useState } from "react";
import Container from "../../components/Container";
import Inicial from "../../fragments/Inicial";
import Foods from "../../fragments/Foods";
import Height from "../../fragments/Height";
import Weight from '../../fragments/Weight';
import Drinks from '../../fragments/Drinks';
import Result from '../../fragments/Result';

import Stepper from '../../fragments/Stepper';
import Body from '../../fragments/Body';
import {  Button } from "@material-ui/core";


export default function QuizPage() {
  const [activeStep, setActiveStep] = useState(0);

  const [data, setData] = useState({
    age: {
      value: '',
      photo: '',
      id: 0,
    },
    height: '',
    weight: '',
  })

  console.log(data)

  const handleClick = (info) => {
    setData((prevState) => {
      return {
        ...prevState,
        ...info
      }
    })

  }

  const isDesabled = (): boolean => {
    let disabled = true;


    if(activeStep === 0) {
      const hasAge = Boolean(data.age.value)
      disabled = !hasAge;
    }

    if(activeStep === 1) {
      const hasHeight = data.height;
      disabled = !hasHeight;
    }

    if(activeStep === 2) {
      const hasWeight = data.weight;
      disabled = !hasWeight;
    }

    if(activeStep>2) disabled = false

    return disabled;
  }


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } 
  };

  return (
    <div className="bg-slate-800 ">
        <div className="pt-8 pb-8 h-screen flex flex-col ">
          <Stepper activeStep={activeStep} steps={6} handleNext={handleNext} handleBack={handleBack}/>
          <Container>
            {activeStep === 0 && <Inicial age={data.age} handleStep={handleClick}/>}
            {activeStep === 1 && <Height height={data.height} handleStep={handleClick} />}
            {activeStep === 2 && <Weight weight={data.weight} handleStep={handleClick} />}
            {activeStep === 3 && <Body />}
            {activeStep === 4 && <Foods />}
            {activeStep === 5 && <Drinks />}
            {activeStep === 6 && <Result data={data}/>}
 
          </Container>
        </div>
          <div className="absolute fixed w-full w-screen bottom-0 flex justify-center ">
          <div className="w-full max-w-xs">
            <Button
              variant="contained"
              color='secondary'
              onClick={handleNext}
              disabled={isDesabled()}
              fullWidth
            >  
              <span > Próximo </span>  
            </Button>
          </div>
        </div>
        </div>
  )
}
