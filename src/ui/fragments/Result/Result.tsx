
import SubTitle from "../../components/SubTitle";
import Question from "../../components/Question";
import { Avatar,Paper } from "@material-ui/core";



export default function Result({data}) {

  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mt-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
          <Question> 
            <div> 
              <span>Parabens!!! </span> 
              <br/>
              <span>O seu plano para acabar com as celulites em 14 dias foi concluído. Agora você tem tudo o que precisa para nunca mais ter esses furinhos na sua pele.</span>
            </div>
          </Question>
          <SubTitle>Você é unica, a sua solução também!</SubTitle>
        </div>
        <Paper elevation={24}>
          <div className="flex justify-center ">
              <div className="flex flex-col items-center mt-4">
                <Avatar 
                  style={{width: '70px',  height: '70px', backgroundColor: '#F50157'}}
                  alt="Foto de um usuário" 
                  src={data.age.photo} 
                />
                <div className="flex ">     
                   <p className="mt-2 mb-4 text-lg	"> <strong>Idade:</strong>  {data.age.value} anos </p>
                </div>
              </div>  
          </div>
          <div className="flex justify-between ml-8 mr-8 mb-12">
              <p className="text-lg	"> <strong>Altura:</strong> {data.height} cm </p>
              <p className="text-lg	"> <strong>Peso:</strong> {data.weight} kg </p>
          </div>
        </Paper>
      </div>
  )
}