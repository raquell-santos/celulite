import Titles from '../Titles';
import Card from '../../components/Card/Primary';

import TEEN from '../../assets/adolescente.png'
import ADULT from '../../assets/adulta.png'
import MATURE from '../../assets/mais-adulta.png'
import OLD from '../../assets/idosa.png'
import { useCallback, useState } from "react";

export default function Inicial({handleStep}) {
  const [selected, setSelected] = useState<number>(0)

  const handleClick = (id: number): void => {
    setSelected(id)

    const selectedCard = cards.filter((card => id ===card.id)).filter(i => i);

    if(selectedCard.length) {
      handleStep({
        age: {
          value: selectedCard[0].text,
          photo: selectedCard[0].photo,
        }
      })
    }
  }

  const cards = [
    { id: 1, photo: TEEN, text: '18 - 29'}, 
    { id: 2, photo: ADULT, text: '30 - 39'}, 
    { id: 3, photo: MATURE, text: '40 - 49'}, 
    { id: 4, photo: OLD, text: '50+'}, 
  ]

  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-4">
        <h1 className="text-white text-4xl font-extrabold tracking-wide uppercase"> 
          Acabe com suas celulites
        </h1>
        <Titles> Qual sua idade? </Titles>
          <div className="flex flex-col gap-y-7 justify-center">
            <div className='flex gap-x-4 '>
              <Card
                photo={cards[0].photo} 
                text={cards[0].text} 
                id={cards[0].id} 
                handleClick={handleClick}  
                isSelected={selected === cards[0].id}
              />

              <Card
                photo={cards[1].photo} 
                text={cards[1].text} 
                id={cards[1].id} 
                handleClick={handleClick}  
                isSelected={selected === cards[1].id}
              />
            </div>
            <div className='flex gap-x-4 '>
              <Card
                  photo={cards[2].photo} 
                  text={cards[2].text} 
                  id={cards[2].id} 
                  handleClick={handleClick}  
                  isSelected={selected === cards[2].id}
                />

                <Card
                  photo={cards[3].photo} 
                  text={cards[3].text} 
                  id={cards[3].id} 
                  handleClick={handleClick}  
                  isSelected={selected === cards[3].id}
              />
            </div>
          </div>
      </div>
  )
}