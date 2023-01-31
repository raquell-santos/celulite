
import SubTitle from "../../components/SubTitle";
import Question from "../../components/Question";

export default function Foods() {
  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
          <Question> Qual tipo de bebida você prefere? </Question>
          <SubTitle>Você é unica, a sua solução também!</SubTitle>
        </div>
      </div>
  )
}