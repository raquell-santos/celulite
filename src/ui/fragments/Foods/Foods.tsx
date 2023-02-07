
import SubTitle from "../../components/SubTitle";
import Card from '../../components/Card/Secondary';
import Question from "../../components/Question";

export default function Foods({foods, handleStep}) {
  const handleClick = (id: number): void => {
    const foodIndex = foods.findIndex(food => food.id === id)
    const food = foods.find(food => food.id === id);
    foods[foodIndex] = {...food, isChecked: !food.isChecked}

    handleStep({ foods })
  }

  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
          <Question> Quais desses alimentos você não gosta e quer tirar do seu chá? </Question>
          <SubTitle> Você é unica, a sua solução também! </SubTitle>
        </div>

          <div className="flex flex-col gap-x-3.5 gap-y-6 mb-8">
              <Card 
                photo={foods[0].photo} 
                text={foods[0].text}
                id={foods[0].id}
                handleClick={handleClick}
                selected={foods[0].isChecked}
              />
              <Card
                photo={foods[1].photo} 
                text={foods[1].text}
                id={foods[1].id}
                handleClick={handleClick}
                selected={foods[1].isChecked}
              />
              <Card 
                photo={foods[2].photo} 
                text={foods[2].text}
                id={foods[2].id}
                handleClick={handleClick}
                selected={foods[2].isChecked}

              />
              <Card 
                photo={foods[3].photo} 
                text={foods[3].text}
                id={foods[3].id}
                handleClick={handleClick}
                selected={foods[3].isChecked}

              />
              <Card 
                photo={foods[4].photo} 
                text={foods[4].text}
                id={foods[4].id}
                handleClick={handleClick}
                selected={foods[4].isChecked}

              />
          </div>
      </div>
  )
}