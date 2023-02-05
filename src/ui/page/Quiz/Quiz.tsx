import { useState } from "react";
import Container from "../../components/Container";
import Inicial from "../../fragments/Inicial";
import Foods from "../../fragments/Foods";
import Height from "../../fragments/Height";
import Weight from '../../fragments/Weight';
import Drinks from '../../fragments/Drinks';
import Result from '../../fragments/Result';

import BANANA from '../../assets/foods/banana.png'
import LEITE from '../../assets/foods/leite.png'
import ALCOOL from '../../assets/foods/alcool.png'
import SODA from '../../assets/foods/refrigerante.png'
import CHOCOLATE from '../../assets/foods/chocolate.webp'

import Stepper from '../../fragments/Stepper';
import Body from '../../fragments/Body';
import {  Button } from "@material-ui/core";
import Loader from "../../fragments/Loader";

import './Quiz.css';


export default function QuizPage() {
  const [activeStep, setActiveStep] = useState(0);

  const [data, setData] = useState({
    age: {
      value: '',
      photo: '',
      id: 0,
    },
    drink: {
      text: '',
      photo: '',
      id: 0,
    },
    foods: [
      { photo:ALCOOL, text:'Bebidas alcoólicas', id: 1, isChecked: false },
      { photo:BANANA, text:'Banana', id: 2, isChecked: false },
      { photo:LEITE, text:'Leite', id: 3, isChecked: false },
      { photo:CHOCOLATE, text:'Chocolate', id: 4, isChecked: false },
      { photo:SODA, text:'Refrigerante', id: 5, isChecked: false },
    ],
    height: 1.6,
    weight: 70,
    loaded: false,
    bodies: [
      {id: 1, text: 'Peito', isChecked: false},
      {id: 2, text: 'Barriga', isChecked: false},
      {id: 3, text: 'Coxas', isChecked: false},
      {id: 4, text: 'Costas', isChecked: false},
      {id: 5, text: 'Glúteos', isChecked: false},
      {id: 6, text: 'Posterior', isChecked: false},
    ]
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

    if(activeStep === 3 ) {
      const hasBodies = data.bodies.filter(body => body.isChecked).filter(i=>i).length > 0
      disabled = !hasBodies;
    }

    if(activeStep === 4 ) {
      const hasFoods = data.foods.filter(food => food.isChecked).filter(i=>i).length > 0
      disabled = !hasFoods;
    }

    if(activeStep === 5 ) {
      console.log(data.drink)

      const hasDrink = data.drink.id
      disabled = !hasDrink;
    }

    if(activeStep === 6) {
      disabled = !data.loaded;
    }

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
            {activeStep === 3 && <Body bodies={data.bodies} handleStep={handleClick}/>}
            {activeStep === 4 && <Foods foods={data.foods} handleStep={handleClick} />}
            {activeStep === 5 && <Drinks drink={data.drink} handleStep={handleClick}/>}
            {activeStep === 6 && <Loader handleStep={handleClick} />}
            {activeStep === 7 && <Result data={data}/>}
 
          </Container>
        </div>
          <div className="absolute fixed w-full w-screen bottom-0 flex justify-center ">
          <div className="w-full max-w-xs submit-button flex items-center">
            <Button
            className="submit-button"
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
