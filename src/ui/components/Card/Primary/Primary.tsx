

import { CheckCircle } from '@material-ui/icons'
import { useState } from 'react';
import { IPrimary} from './interface'
export default function Primary({photo, text, currentSelected = false}: IPrimary) {
  const [selected, setSelected] = useState<boolean>(currentSelected);

  const handleClick = () => {
    setSelected(!selected)
  }
  
  return (
    <div className="w-full flex flex-col">
      <div 
        onClick={handleClick}
        className={`
          group rounded-t border-material-pink border-2 h-28 w-full shadow-md shadow-slate-200 flex justify-center 
          hover:cursor-pointer hover:bg-slate-900 relative
          ${selected ? 'bg-slate-900': ''}
        `}
      >
        {selected && <CheckCircle style={{position: 'absolute', top: 8, right: 12}} color='secondary'/>}
          <div className='flex flex-col'>
            
            <img 
              src={photo} 
              alt="test" 
              className={`
                h-full 
                group-hover:scale-125 group-hover:-translate-y-3
                ${selected ? 'scale-125 -translate-y-3': ''}
              `}/>
          </div>
      </div>
      <div className='flex justify-center h-full w-full bg-material-pink rounded-b'> 
        <p className='text-white font-semibold tracking-wider uppercase letter-spacing'>
          {text}
        </p>
      </div>
    </div>
  )
}