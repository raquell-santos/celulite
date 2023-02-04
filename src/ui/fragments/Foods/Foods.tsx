
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import Card from '../../components/Card/Secondary';

import BANANA from '../../assets/foods/banana.png'
import LEITE from '../../assets/foods/leite.png'
import ALCOOL from '../../assets/foods/alcool.png'
import SODA from '../../assets/foods/refrigerante.png'
import CHOCOLATE from '../../assets/foods/chocolate.webp'
import Question from "../../components/Question";
import { useState } from "react";

export default function Foods({foods, handleStep}) {
  const [selecteds, setSelecteds] = useState<Array<number>>([])


  const FOODS_OPTIONS = [
    { photo:ALCOOL, text:'Bebidas alcoólicas', id: 1 },
    { photo:BANANA, text:'Banana', id: 2 },
    { photo:LEITE, text:'Leite', id: 3 },
    { photo:CHOCOLATE, text:'Chocolate', id: 4 },
    { photo:SODA, text:'Refrigerante', id: 5 },
  ]

  const handleClick = (id: number): void => {
    setSelecteds([...selecteds, id])

    const selectedsFoods = FOODS_OPTIONS.filter((food => selecteds.includes(food.id))).filter(i => i);

    handleStep({ foods: selectedsFoods })
  }

  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
          <Question> Quais desses alimentos você não gosta e quer tirar da sua bebida? </Question>
          <SubTitle>Você é unica, a sua solução também!</SubTitle>
        </div>

          <div className="flex flex-col gap-x-3.5 gap-y-6 mb-8">
              <Card 
                photo={FOODS_OPTIONS[0].photo} 
                text={FOODS_OPTIONS[0].text}
                id={FOODS_OPTIONS[0].id}
                handleClick={handleClick}
                selected={selecteds.includes(FOODS_OPTIONS[0].id)}
              />
              <Card
                photo={FOODS_OPTIONS[1].photo} 
                text={FOODS_OPTIONS[1].text}
                id={FOODS_OPTIONS[1].id}
                handleClick={handleClick}
                selected={selecteds.includes(FOODS_OPTIONS[1].id)}
              />
              <Card 
                photo={FOODS_OPTIONS[2].photo} 
                text={FOODS_OPTIONS[2].text}
                id={FOODS_OPTIONS[2].id}
                handleClick={handleClick}
                selected={selecteds.includes(FOODS_OPTIONS[2].id)}

              />
              <Card 
                photo={FOODS_OPTIONS[3].photo} 
                text={FOODS_OPTIONS[3].text}
                id={FOODS_OPTIONS[3].id}
                handleClick={handleClick}
                selected={selecteds.includes(FOODS_OPTIONS[3].id)}

              />
              <Card 
                photo={FOODS_OPTIONS[4].photo} 
                text={FOODS_OPTIONS[4].text}
                id={FOODS_OPTIONS[4].id}
                handleClick={handleClick}
                selected={selecteds.includes(FOODS_OPTIONS[4].id)}

              />
          </div>
      </div>
  )
}