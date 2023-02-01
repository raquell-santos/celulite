
import SubTitle from "../../components/SubTitle";
import Question from "../../components/Question";
import Card from '../../components/Card/Primary';

import JUICE from '../../assets/drinks/suco.png';
import SHAKE from '../../assets/drinks/shake.png';
import CHA from '../../assets/drinks/cha.png';
import { useState } from "react";

export default function Foods({drink, handleStep}) {
  const [selected, setSelected] = useState<number>(drink.id)

  const drinks = [
    { id: 1, photo: SHAKE, text: 'Vitamina'}, 
    { id: 2, photo: JUICE, text: 'Suco'}, 
    { id: 3, photo: CHA, text: 'Chá'}, 
  ]

  const handleClick = (id: number): void => {
    setSelected(id)

    const selectedDrink = drinks.filter((drink => id ===drink.id)).filter(i => i);

    if(selectedDrink.length) {
      handleStep({
        drink: {
          text: selectedDrink[0].text,
          photo: selectedDrink[0].photo,
          id: selectedDrink[0].id,
        }
      })
    }
  }

  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
          <Question> Qual tipo de bebida você prefere? </Question>
          <SubTitle>Você é unica, a sua solução também!</SubTitle>
        </div>

        <div className="flex flex-col gap-x-3.5 gap-y-6 mb-8">
              <Card 
                photo={drinks[0].photo} 
                text={drinks[0].text}
                handleClick={handleClick} 
                id={drinks[0].id} 
                height={'20'} 
                isSelected={selected === drinks[0].id}
              />
              <Card 
                photo={drinks[1].photo} 
                text={drinks[1].text}
                handleClick={handleClick} 
                id={drinks[1].id} 
                height={'20'} 
                isSelected={selected === drinks[1].id}
              />

              <Card 
                photo={drinks[2].photo} 
                text={drinks[2].text}
                handleClick={handleClick} 
                id={drinks[2].id} 
                height={'20'} 
                isSelected={selected === drinks[2].id}
              />
          </div>
      </div>
  )
}