import Card from '../../components/Card/Primary';

import YES from '../../assets/correct.png'
import NO from '../../assets/error.png'

import SubTitle from '../../components/SubTitle';
import Question from '../../components/Question';

export default function YesOrNo({pregnant = undefined, handleStep}) {
  const handleClick = (id: number): void => {

    const currentValue = id === 1 ? true : false
    handleStep({ pregnant: currentValue})
  }

  const cards = [
    { id: 1, photo: YES, text: 'SIM'}, 
    { id: 2, photo: NO, text: 'NÃO'}, 
  ]

  return (
    <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
      <div className='flex flex-col justify-center mb-4 text-center'>
        <Question> Faz mais de um ano que você sofre com suas celulites? </Question>
        <SubTitle> Você é unica, a sua solução também! </SubTitle>
      </div>
          <div className="flex flex-col gap-y-7 justify-center">
            <div className='flex gap-x-4 '>
              <Card
                photo={cards[0].photo} 
                text={cards[0].text} 
                id={cards[0].id} 
                handleClick={handleClick}  
                isSelected={pregnant === true}
                color='green-500'
              />

              <Card
                photo={cards[1].photo} 
                text={cards[1].text} 
                id={cards[1].id} 
                handleClick={handleClick}  
                isSelected={pregnant === false}
              />
            </div>
          </div>
      </div>
  )
}