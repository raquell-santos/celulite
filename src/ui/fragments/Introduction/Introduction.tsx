
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import Card from '../../components/Card';

import TEEN from '../../assets/adolescente.png'
import ADULT from '../../assets/adulta.png'
import MATURE from '../../assets/mais-adulta.png'
import OLD from '../../assets/idosa.png'

export default function Introduction() {
  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5">
          <Title>Acabe com suas celulites</Title>
          <SubTitle>Você é único, e sua solução também</SubTitle>

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