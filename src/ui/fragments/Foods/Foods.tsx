
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import Card from '../../components/Card/Secondary';

import BANANA from '../../assets/foods/banana.png'
import LEITE from '../../assets/foods/leite.png'
import ALCOOL from '../../assets/foods/alcool.png'
import SODA from '../../assets/foods/refrigerante.png'
import CHOCOLATE from '../../assets/foods/chocolate.webp'
import Question from "../../components/Question";

export default function Foods() {
  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
          <Question> Quais dos alimentos abaixo você não gosta? </Question>
          <SubTitle>Você é único, e sua solução também</SubTitle>
        </div>

          <div className="flex flex-col gap-x-3.5 gap-y-6 mb-8">
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