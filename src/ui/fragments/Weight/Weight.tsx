import Quiz from '../Quiz';
import {useState} from 'react';
import { Box, FormControl, FormHelperText, Input, InputAdornment } from '@material-ui/core';
import { Slider } from '@material-ui/core';

import BALANCA from '../../assets/balanca.png'


import './Weight.css'

export default function Weight({weight, handleStep}) {
  const [currentWeight, setCurrentWeight] = useState<number>(weight)

  const handleInputChange = (_, value) => {
    console.log(value);
    handleStep({weight: value})
    setCurrentWeight(value)
  };

  const handleOnChange = (event) => {
    const value = parseFloat(event.target.value) 
    handleStep({weight: value})
    setCurrentWeight(value)
  }

  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }


  const marks = [
    {
      value: +100,
      label: '+100 kg',
    },
    {
      value: 80,
      label: '80kg',
    },
    {
      value: 60,
      label: '60kg',
    },
    {
      value: 40,
      label: '-40kg',
    },
  ];

  return (
    <Quiz question={'Qual a sua altura?'}>
      <>
        <div className='flex mt-10 mb-4 w-full h-64 justify-center'>
          <div className='flex justify-center'>
            <div className='mr-8 flex items-center justify-center image-weight '>
              <img 
                src={BALANCA}
                alt='Balança'
                width={'100%'}
                className='image'

              />
            </div>
            <div  >
              <Slider
                orientation="vertical"
                aria-label="Altura"
                valueLabelDisplay="auto"
                onKeyDown={preventHorizontalKeyboardNavigation}
                color='secondary'
                min={40}
                max={100}
                onChange={handleInputChange}
                step={1}
                marks={marks}
                value={currentWeight}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center '>
          <FormControl variant="standard" size='medium' fullWidth={false} focused required>
            <Input
                value={currentWeight}
                defaultValue={currentWeight}
                autoFocus
                color='secondary'
                id="weight-input"
                endAdornment={<InputAdornment position="end"><span className='text-white text-4xl '>kg</span></InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps= {{
                'aria-label': 'hweight',
                'type': 'number',
                }}        
                onChange={handleOnChange}
                disabled
                
            />
            <FormHelperText id="weight-input-hint"> 
              <div className='flex justify-center text-center'>
                <div>
                  <div>Selecione seu peso no</div> 
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

