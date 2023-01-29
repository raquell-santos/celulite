import FRONT_BODY from '../../assets/body-front-120.png'
import BACK_BODY from '../../assets/body-back-120.png'
import ImageMapper from 'react-image-mapper';
import { Chip } from '@material-ui/core';
import { Check }  from  '@material-ui/icons';
import Question from '../../components/Question';
import SubTitle from '../../components/SubTitle';

export default function Body() {
  const FRONT_OPTIONS = ['barriga', 'coxas']


  const MAP = {
    name: "my-map",
    areas: [
      { 
        name: "Barriga", 
        shape: "poly", 
        coords: [64,178,79,177,92,171,86,146,63,149,42,147,34,173,50,178], 
        preFillColor: "inherit", 
        fillColor: '#BB8F73' ,
        strokeColor: '#DE6E62',
      },
      { 
        name: "Coxa Direita", 
        shape: "poly", 
        coords: [63,205,46,191,31,184,30,200,32,223,38,274,54,274,58,238,60,207,84,190,96,184,96,216,92,244,89,275,72,275,69,235,67,205], 
        preFillColor: "inherit", 
        fillColor: '#BB8F73' ,
        strokeColor: '#DE6E62',
      },
      { 
        name: "Coxa Esquerda", 
        shape: "circle", 
        coords: [80,111,10],
        preFillColor: '#F2D3BF', 
        fillColor: '#C65145',
        strokeColor: '#C65145',
      },
      { 
        name: "Coxa Esquerda", 
        shape: "circle", 
        coords: [47,111,11],
        preFillColor: '#F2D3BF', 
        fillColor: '#C65145',
        strokeColor: '#C65145',
      },
    ]
  }

  const MAP_BACK = {
    name: "my-map-2",
    areas: [
      { 
        name: "Costas", 
        shape: "poly", 
        coords: [37,134,61,135,85,134,83,146,84,157,85,168,90,184,72,187,57,187,33,184,38,166,40,151], 
        preFillColor: "inherit", 
        fillColor: '#BB8F73' ,
        strokeColor: '#DE6E62',
      },
      { 
        name: "Bunda", 
        shape: "poly", 
        coords: [32,184,29,194,28,204,28,213,38,217,50,218,58,215,64,215,77,219,88,215,95,208,94,195,92,184,69,186,49,186], 
        preFillColor: "inherit", 
        fillColor: '#BB8F73' ,
        strokeColor: '#DE6E62',
      },
      { 
        name: "Quadriceps", 
        shape: "poly", 
        coords: [29,213,30,233,33,255,36,283,52,284,56,252,57,228,58,216,64,215,65,227,66,243,67,260,70,280,72,287,87,288,88,271,92,249,93,231,94,211,87,216,78,218,62,215,58,216,64,215,47,219,39,217],
        preFillColor: '#F2D3BF', 
        fillColor: '#BB8F73',
        strokeColor: '#C65145',
      },
      // { 
      //   name: "Quadricepis Direita", 
      //   shape: "poly", 
      //   coords: [123,416,125,476,131,519,136,554,166,554,170,497,176,446,179,403,153,418],
      //   preFillColor: '#F2D3BF', 
      //   fillColor: '#C65145',
      //   strokeColor: '#C65145',
      // },
    ]
  }


    return (
      <div className="container">
        <div className='flex flex-col justify-center text-center mt-4'>
          <Question> Quais as partes do seu corpo que as estrias mais te encomodam?</Question>
          <SubTitle>Você é único, e sua solução também</SubTitle>
        </div>
        <div className='flex justify-around'>
        <ImageMapper 
          src={FRONT_BODY}  
          onClick={(area) => {
            console.log(area)
          }}
          map={MAP}
          width={120}
        />
              <div className='h-6 h-full flex flex-col justify-center pt-4 mb-12 gap-y-3'>
        <Chip
          color='secondary'
          label="Barriga"
          size='small'
          icon={<Check />}
        />
                <Chip
          color='secondary'
          label="Peito"
          size='small'
          icon={<Check />}
        />
                <Chip
          color='secondary'
          label="Coxas"
          size='small'
          icon={<Check />}
        />
        </div>

<div className='-mt-3'>
        <ImageMapper 
          src={BACK_BODY}  
          onClick={(area) => {
            console.log(area)
          }}
          map={MAP_BACK}
          width={120}
        />
</div>
</div>


        
      </div>
    )
}

