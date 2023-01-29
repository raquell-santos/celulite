

import { CheckCircle } from '@material-ui/icons';
import { useState } from 'react'
import { ISecondary } from './interface'

export default function Secondary({photo, text}: ISecondary) {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  }

  return (
    <div className="w-full flex flex-col">
      <div 
        onClick={handleClick}
        className={`
          group rounded-lg border  h-16 w-full flex items-center
          hover:cursor-pointer hover:bg-slate-900 hover:border-white relative
          ${selected ? 'border-white bg-slate-900': 'bg-slate-700  border-stone-500'}
        `}
      >       {selected && <CheckCircle style={{position: 'absolute', top: 18, right: 12}} color='secondary'/>}

          <img 
            src={photo} 
            alt="test" 
            className={`
              h-full 
              group-hover:scale-125 
              group-hover:-translate-y-3 w-20
              ${selected ? 'scale-125 -translate-y-3': ''}
          `}/>   
          
          <p className='text-white font-semibold tracking-wider uppercase letter-spacing'>
          {text}
        </p>
      </div>
    </div>
  )
}