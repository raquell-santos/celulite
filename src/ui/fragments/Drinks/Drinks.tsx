
import SubTitle from "../../components/SubTitle";
import Question from "../../components/Question";
import Card from '../../components/Card/Secondary';

import CERA from '../../assets/hairRemoval/cera.png';
import GILETE from '../../assets/hairRemoval/gilete.png';
import CREME from '../../assets/hairRemoval/creme.png';
import LASER from '../../assets/hairRemoval/laser.png';


import { useState } from "react";

export default function Foods({hairRemoval, handleStep}) {
  const [selected, setSelected] = useState<number>(hairRemoval.id)

  const drinks = [
    { id: 1, photo: CERA, text: 'Cera'}, 
    { id: 2, photo: GILETE, text: 'Lâmina'}, 
    { id: 3, photo: CREME, text: 'Creme depilatório'}, 
    { id: 4, photo: LASER, text: 'Laser'}, 
  ]

  const handleClick = (id: number): void => {
    setSelected(id)

    const selectedDrink = drinks.filter((drink => id ===drink.id)).filter(i => i);

    if(selectedDrink.length) {
      handleStep({
        hairRemoval: {
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
          <Question> Qual o tipo mais comum de depilação que você utiliza? </Question>
          <SubTitle>Você é unica, a sua solução também!</SubTitle>
        </div>

        <div className="flex flex-col gap-x-3.5 gap-y-6 mb-8">
              <Card 
                photo={drinks[0].photo} 
                text={drinks[0].text}
                id={drinks[0].id}
                handleClick={handleClick}
                selected={selected === drinks[0].id}
              />
              <Card 
                photo={drinks[1].photo} 
                text={drinks[1].text}
                id={drinks[1].id}
                handleClick={handleClick}
                selected={selected === drinks[1].id}
              />

              <Card 
                photo={drinks[2].photo} 
                text={drinks[2].text}
                id={drinks[2].id}
                handleClick={handleClick}
                selected={selected === drinks[2].id}
              />

              <Card 
                photo={drinks[3].photo} 
                text={drinks[3].text}
                id={drinks[3].id}
                handleClick={handleClick}
                selected={selected === drinks[3].id}
              />
          </div>
      </div>
  )
}