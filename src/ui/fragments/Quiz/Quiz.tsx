
import Question from "../../components/Question";
import SubTitle from "../../components/SubTitle";

export default function Quiz({question, children}) {
  return (
    <>
      <div className='flex flex-col justify-center mb-4 text-center'>
        <Question> {question} </Question>
        <SubTitle>Você é único, e sua solução também</SubTitle>
      </div>
      {children}
    </>
  )
}