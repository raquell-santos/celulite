
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import Card from '../../components/Card/Secondary';

import BANANA from '../../assets/foods/banana.png'
import LEITE from '../../assets/foods/leite.png'
import ALCOOL from '../../assets/foods/alcool.png'
import SODA from '../../assets/foods/refrigerante.png'
import CHOCOLATE from '../../assets/foods/chocolate.webp'

export default function Foods() {
  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5">
          <Title>Acabe com suas celulites</Title>
          <SubTitle>Você é único, e sua solução também</SubTitle>

          <div className="flex flex-col gap-x-3.5 gap-y-6">
              <Card photo={ALCOOL} text='Bebidas alcoólicas'/>
              <Card photo={BANANA} text='Banana'/>
              <Card photo={LEITE} text='Leite'/>
              <Card photo={CHOCOLATE} text='Chocolate'/>
              <Card photo={SODA} text='Refrigerante'/>

              <Card photo={ALCOOL} text='Bebidas alcoólicas'/>
              <Card photo={BANANA} text='Banana'/>
              <Card photo={LEITE} text='Leite'/>
              <Card photo={CHOCOLATE} text='Chocolate'/>
              <Card photo={SODA} text='Refrigerante'/>
          </div>
      </div>
  )
}