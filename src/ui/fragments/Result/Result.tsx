
import SubTitle from "../../components/SubTitle";
import Question from "../../components/Question";
import { Avatar,Chip,Divider,Paper } from "@material-ui/core";
import CHA from '../../assets/drinks/cha.png'
import { Check } from "@material-ui/icons";

export default function Result({data}) {


  console.log(data)

  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mb-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
            <div className="mb-4"> 
              <span className="text-white mb-2 text-xl font-bold tracking-wide">Parabens!!! </span> 
              <br/>
              <span className="text-white text-lg">O seu plano para acabar com as celulites em <b>14 dias</b> foi concluído. Agora você tem tudo o que precisa para nunca mais ter esses furinhos na sua pele.</span>
            </div>
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
            <div className="flex flex-col items-start">
              <p className="text-lg	"> <strong>Altura:</strong> {data.height} cm </p>
              <p className="text-lg	"> <strong>Esteve Grávida?:</strong> {data.pragment ? 'Sim' : 'Não'} </p>
              <p className="text-lg	"> <strong>Peso:</strong> {data.weight} kg </p>
              <p className="text-lg	"> <strong>Delipação:</strong> {data.hairRemoval.text} </p>
            </div>

          </div>

          <div className="h-20 bg-pink-300 flex justify-center">
            <div className="pt-2 flex flex-col ml-4">
              <img 
                src={CHA} 
                alt="bebida escolhida" 
                className='h-20 -mt-10'
              />
              <p className="text-lg	"> <strong> Chá </strong>  </p>
            </div>
          </div>
          <div>

          </div>
          <p className="text-lg	mt-4"> <strong>Partes do corpo a serem priorizadas:</strong></p>

          <div className="flex flex-wrap justify-center gap-2 mt-1 mb-4">
            {data.bodies.filter(body => body.isChecked).map(body => {
              return (
                <Chip
                  variant="outlined"
                  label={body.text}
                  size='small'
                  deleteIcon={<Check/>}
                  onDelete={() => {}}
                />
              )
            })}
          </div>
          <Divider/>
          <p className="text-lg	mt-4"> <strong>Alimentos a serem evitados:</strong></p>

          <div className="flex flex-wrap justify-center gap-2 mt-1 mb-4">
            {data.foods.map(food => {

              if(food.isChecked) {
                return (
                  <Chip
                    avatar={<Avatar alt="Natacha" src={food.photo} />}
                    label={food.text}
                    variant="outlined"
                  />
                )
              }
            })}
          </div>
        </Paper>
      </div>
  )
}