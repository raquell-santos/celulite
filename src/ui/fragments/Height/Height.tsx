import { FormControl, FormHelperText, Input, InputAdornment } from '@material-ui/core';
import Quiz from '../Quiz';

import './Height.css'

export default function Height() {
  return (
    <Quiz question={'Qual a sua altura?'}>
        <div className='flex justify-center mt-20'>
            <FormControl variant="standard" size='medium' fullWidth={false} focused required>
            <Input
                autoFocus
                color='secondary'
                id="weight-input"
                endAdornment={<InputAdornment position="end"><span className='text-white text-4xl '>cm</span></InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps= {{
                'aria-label': 'weight',
                }}        
            />
            <FormHelperText id="standard-weight-helper-text">Peso</FormHelperText>
            </FormControl>
        </div>
    </Quiz>
  )
}