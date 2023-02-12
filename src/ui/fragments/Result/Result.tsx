
import SubTitle from "../../components/SubTitle";
import { Avatar,Chip,Divider,Paper } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import LOGO_CHA from '../../assets/logo-cha.png'

export default function Result({data}) {
  return (
      <div className="flex flex-col text-center gap-x-2.5 gap-y-2.5 mb-8">
        <div className='flex flex-col justify-center mb-4 text-center'>
            <div className="mb-4"> 
              <span className="text-white mb-2 text-xl font-bold tracking-wide">Parabens!!! </span> 
              <br/>
              <span className="text-white text-lg">O seu programa para acabar com as celulites em <b>14 dias</b> foi concluído. <br/> Agora você tem tudo o que precisa para nunca mais ter esses furinhos na sua pele.</span>
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
          <div className="flex justify-between ml-8 mr-8 mb-20">
            <div className="flex flex-col items-start">
              <p className="text-base"> <strong>Altura:</strong> {data.height} m </p>
              <p className="text-base"> <strong>Peso:</strong> {data.weight} kg </p>
              <p className="text-base"> <strong>Celulites:</strong> {data.pragment ? 'Mais de 1 ano' : 'Menos de 1 ano'} </p>
            </div>

          </div>

          <div className="bg-material-pink flex justify-center">
            <div className="pt-2 flex flex-col ml-4">
              <img 
                src={LOGO_CHA} 
                alt="bebida escolhida" 
                className='h-32 -mt-20'
              />
              {/* <p className="text-lg	white"> <strong> Chá </strong>  </p> */}
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
          <p className="text-lg	mt-4"> <strong>Atividades físicas:</strong></p>

          <div className="flex flex-wrap justify-center gap-2 mt-1 mb-4">
            {data.activities.map((activity) => {

              if(activity.isChecked) {
                return (
                  <Chip
                    avatar={<Avatar alt="Natacha" src={activity.photo} />}
                    label={activity.text}
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