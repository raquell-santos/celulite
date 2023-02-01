import { FormControl, FormHelperText, Input, InputAdornment } from '@material-ui/core';
import Quiz from '../Quiz';

import './Weight.css'

export default function Weight({weight, handleStep}) {
  const handleOnChange = (event) => {
    handleStep({weight: event.target.value })
  }

  return (
    <Quiz question={'Qual o seu peso?'}>
        <div className='flex justify-center mt-20'>
            <FormControl variant="standard" size='medium' fullWidth={false} focused required>
            <Input
                defaultValue={weight}
                autoFocus
                color='secondary'
                id="weight-input"
                endAdornment={<InputAdornment position="end"><span className='text-white text-4xl '>kg</span></InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps= {{
                'aria-label': 'weight',
                }}        
                onChange={handleOnChange}
            />
            <FormHelperText id="standard-weight-helper-text">Peso</FormHelperText>
            </FormControl>
        </div>
    </Quiz>
  )
}