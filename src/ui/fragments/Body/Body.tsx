import FRONT_BODY from '../../assets/body-front-120.png'
import BACK_BODY from '../../assets/body-back-120.png'
import ImageMapper from 'react-image-mapper';
import { Chip } from '@material-ui/core';
import { Check, Close }  from  '@material-ui/icons';
import Question from '../../components/Question';
import SubTitle from '../../components/SubTitle';

export default function Body({bodies, handleStep, }) {

  const PRE_FILL_COLOR = 'inherit';
  const FILL_COLOR = 'inherit';
  const STROKE_COLOR = '#F50157';

  const MAP = {
    name: "my-map",
    areas: [
      { 
        name: "Barriga", 
        shape: "poly", 
        coords: [64,178,79,177,92,171,86,146,63,149,42,147,34,173,50,178], 
        preFillColor: PRE_FILL_COLOR, 
        fillColor: FILL_COLOR ,
        strokeColor: STROKE_COLOR,
      },
      { 
        name: "Coxas", 
        shape: "poly", 
        coords: [63,205,46,191,31,184,30,200,32,223,38,274,54,274,58,238,60,207,84,190,96,184,96,216,92,244,89,275,72,275,69,235,67,205], 
        preFillColor: PRE_FILL_COLOR, 
        fillColor: FILL_COLOR ,
        strokeColor: STROKE_COLOR,
      },
      { 
        name: "Peito", 
        shape: "poly", 
        coords: [61,116,66,116,61,116,71,120,77,122,84,123,88,121,90,115,92,109,92,102,90,91,84,93,77,97,71,102,66,107,61,108,54,101,47,96,38,91,36,97,35,107,35,113,36,117,39,122,44,123,49,122,55,120],
        preFillColor: PRE_FILL_COLOR, 
        fillColor: FILL_COLOR,
        strokeColor: STROKE_COLOR,
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
        preFillColor: PRE_FILL_COLOR, 
        fillColor: FILL_COLOR,
        strokeColor: STROKE_COLOR,
      },
      { 
        name: "Glúteos", 
        shape: "poly", 
        coords: [32,184,29,194,28,204,28,213,38,217,50,218,58,215,64,215,77,219,88,215,95,208,94,195,92,184,69,186,49,186], 
        preFillColor: PRE_FILL_COLOR, 
        fillColor: FILL_COLOR,
        strokeColor: STROKE_COLOR,
      },
      { 
        name: "Posterior", 
        shape: "poly", 
        coords: [29,213,30,233,33,255,36,283,52,284,56,252,57,228,58,216,64,215,65,227,66,243,67,260,70,280,72,287,87,288,88,271,92,249,93,231,94,211,87,216,78,218,62,215,58,216,64,215,47,219,39,217],
        preFillColor: PRE_FILL_COLOR, 
        fillColor: FILL_COLOR,
        strokeColor: STROKE_COLOR,
      },
    ]
  }





    return (
      <div className="container">
        <div className='flex flex-col justify-center text-center mt-4'>
          <Question> Quais partes do seu corpo você não deseja mais ter celulite? </Question>
          <SubTitle> Você é unica, a sua solução também! </SubTitle>
        </div>
        <div className='flex justify-around'>
        <ImageMapper 
          src={FRONT_BODY}  
          onClick={(area) => {
            const bodyIndex = bodies.findIndex(body => body.text === area.name)
            const body = bodies.find(body => body.text === area.name);
            bodies[bodyIndex] = {...body, isChecked: !body.isChecked}
            handleStep({bodies});
          }}
          map={MAP}
          width={120}
        />
              <div className='h-full flex flex-col justify-center pt-4 mb-12 gap-y-3'>

            
                {bodies.map(chipBody => {
                  return (
                    <Chip
                      color={chipBody.isChecked ? 'secondary' : 'default'}
                      label={chipBody.text}
                      size='small'
                      // deleteIcon={chipBody.isChecked ? <Check /> : <Close/>} 
                      // onDelete={()=>{}}
                      icon={chipBody.isChecked ? <Check /> : <Close/>}
                      onClick={() => {
                        const bodyIndex = bodies.findIndex(body => body.text === chipBody.text)
                        const body = bodies.find(body => body.text === chipBody.text);
                        bodies[bodyIndex] = {...body, isChecked: !body.isChecked}
                        handleStep({bodies});
                      }}
                      
                    />
                  )

                })}
        </div>

<div className='-mt-3'>
        <ImageMapper 
          src={BACK_BODY}  
          onClick={(area) => {
            const bodyIndex = bodies.findIndex(body => body.text === area.name)
            const body = bodies.find(body => body.text === area.name);
            bodies[bodyIndex] = {...body, isChecked: !body.isChecked}
            handleStep({bodies});
          }}
          map={MAP_BACK}
          width={120}
        />
</div>
</div>


        
      </div>
    )
}

