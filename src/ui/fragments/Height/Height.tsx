import Quiz from '../Quiz';
import {useState} from 'react';
import { Box } from '@material-ui/core';
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

  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }


  const marks = [
    {
      value: 2,
      label: '2,0+ m ',
    },
    {
      value: 1.5,
      label: '1,5 m',
    },
    {
      value: 1.7,
      label: '1,7 m',
    },
    {
      value: 1.2,
      label: '1,2- m',
    },
  ];

  return (
    <Quiz question={'Qual a sua altura?'}>
        <div className='flex mt-10 mb-10 w-full h-64 justify-center'>
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
                defaultValue={height}
                aria-label="Altura"
                valueLabelDisplay="auto"
                onKeyDown={preventHorizontalKeyboardNavigation}
                color='secondary'
                min={1.2}
                max={2}
                onChange={handleInputChange}
                step={0.05}
                marks={marks}
              />
            </div>
            </div>
        </div>
    </Quiz>
  )
}

