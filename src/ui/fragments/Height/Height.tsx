import Quiz from '../Quiz';
import {useState} from 'react';
import { Box, FormControl, FormHelperText, Input, InputAdornment } from '@material-ui/core';
import { Slider } from '@material-ui/core';

import FRONT_BODY from '../../assets/body-front-120.png'


import './Height.css'

export default function Height({height, handleStep}) {
  const [currentHeight, setCurrentHeight] = useState<number>(height)

  const handleInputChange = (_, value) => {
    console.log(value);
    handleStep({height: value})
    setCurrentHeight(value)
  };

  const handleOnChange = (event) => {
    const value = parseFloat(event.target.value) 
    handleStep({height: value})
    setCurrentHeight(value)
  }

  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }


  const marks = [
    {
      value: 2.00,
      label: '+ 2,00 m ',
    },
    {
      value: 1.50,
      label: '1,50 m',
    },
    {
      value: 1.70,
      label: '1,70 m',
    },
    {
      value: 1.20,
      label: '- 1,20 m',
    },
  ];

  return (
    <Quiz question={'Qual a sua altura?'}>
      <>
        <div className='flex mt-10 mb-4 w-full h-64 justify-center'>
          <div className='flex justify-center'>
            <div className='mr-8 flex items-end justify-center image-height '>
              <img 
                src={FRONT_BODY}
                alt='Mulher'
                width={currentHeight*40}
              />
            </div>
            <div  >
              <Slider
                orientation="vertical"
                aria-label="Altura"
                valueLabelDisplay="auto"
                onKeyDown={preventHorizontalKeyboardNavigation}
                color='secondary'
                min={1.20}
                max={2.00}
                onChange={handleInputChange}
                step={0.01}
                marks={marks}
                value={currentHeight}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center '>
          <FormControl variant="standard" size='medium' fullWidth={false} focused required>
            <Input
                value={currentHeight}
                defaultValue={currentHeight}
                autoFocus
                color='secondary'
                id="height-input"
                endAdornment={<InputAdornment position="end"><span className='text-white text-4xl '>m</span></InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps= {{
                'aria-label': 'height',
                'type': 'number',
                }}        
                onChange={handleOnChange}
                disabled
                
            />
            <FormHelperText id="height-input-hint"> 
              <div className='flex justify-center text-center'>
                <div>
                  <div>Selecione sua altura no</div> 
                  <div className='-mt-1'>slider acima</div>
                </div>
              </div>
            </FormHelperText>
            </FormControl>
        </div>
      </>
    </Quiz>
  )
}

