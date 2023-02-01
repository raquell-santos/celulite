import { FormControl, FormHelperText, Input, InputAdornment } from '@material-ui/core';
import Quiz from '../Quiz';

import './Height.css'

export default function Height({height, handleStep}) {
  const handleOnChange = (event) => {
    handleStep({height: event.target.value })
  }

  return (
    <Quiz question={'Qual a sua altura?'}>
        <div className='flex justify-center mt-20'>
            <FormControl variant="standard" size='medium' fullWidth={false} focused required>
            <Input
                defaultValue={height}
                autoFocus
                color='secondary'
                id="weight-input"
                endAdornment={<InputAdornment position="end"><span className='text-white text-4xl '>cm</span></InputAdornment>}
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