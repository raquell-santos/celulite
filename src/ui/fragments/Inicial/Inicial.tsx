
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import Question from "../../components/Question";
import Card from '../../components/Card/Primary';

import TEEN from '../../assets/adolescente.png'
import ADULT from '../../assets/adulta.png'
import MATURE from '../../assets/mais-adulta.png'
import OLD from '../../assets/idosa.png'

export default function Inicial() {
  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-4">
          <Title>Acabe com suas celulites</Title>
          <SubTitle>Você é unica, a sua solução também!</SubTitle>
          <Question> Qual sua idade?</Question>

          <div className="flex flex-col gap-x-3.5 gap-y-6">
            <div  className="flex gap-x-3.5 ">
              <Card photo={TEEN} text={'18 - 29'}/>
              <Card photo={ADULT} text={'30 - 39'}/>
            </div>
            <div  className="flex gap-x-3.5 ">
              <Card photo={MATURE} text={'40 - 49'}/>
              <Card photo={OLD} text={'50+'}/>
            </div>
          </div>
      </div>
  )
}