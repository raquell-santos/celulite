
import SubTitle from "../../components/SubTitle";
import Card from '../../components/Card/Secondary';
import Question from "../../components/Question";

export default function PhysicalActivity({activities, handleStep}) {
  const handleClick = (id: number): void => {
    const foodIndex = activities.findIndex(food => food.id === id)
    const food = activities.find(food => food.id === id);
    activities[foodIndex] = {...food, isChecked: !food.isChecked}


    if(id === 5) {
      activities =  activities.map(food => {
        return {
          ...food,
          isChecked: food.id === 5 ? true : false
        }
      })
    } else {
      activities =  activities.map(food => {
        return {
          ...food,
          isChecked: food.id === 5 ? false : food.isChecked
        }
      })
    }

    handleStep({ activities })
  }

  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
          <Question> Quais desses alimentos você não gosta e quer tirar do seu chá? </Question>
          <SubTitle> Você é unica, a sua solução também! </SubTitle>
        </div>

          <div className="flex flex-col gap-x-3.5 gap-y-6 mb-8">
              <Card 
                photo={activities[0].photo} 
                text={activities[0].text}
                id={activities[0].id}
                handleClick={handleClick}
                selected={activities[0].isChecked && !activities[4].isChecked}
              />
              
              <Card
                photo={activities[1].photo} 
                text={activities[1].text}
                id={activities[1].id}
                handleClick={handleClick}
                selected={activities[1].isChecked && !activities[4].isChecked}
              />

              <Card 
                photo={activities[2].photo} 
                text={activities[2].text}
                id={activities[2].id}
                handleClick={handleClick}
                selected={activities[2].isChecked && !activities[4].isChecked}
              />

              <Card 
                photo={activities[3].photo} 
                text={activities[3].text}
                id={activities[3].id}
                handleClick={handleClick}
                selected={activities[3].isChecked && !activities[4].isChecked}
              />

              <Card 
                photo={activities[4].photo} 
                text={activities[4].text}
                id={activities[4].id}
                handleClick={handleClick}
                selected={activities[4].isChecked}
              />
          </div>
      </div>
  )
}