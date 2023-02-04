

import { CheckCircle } from '@material-ui/icons';
import { ISecondary } from './interface'

export default function Secondary({photo, text, selected = false, handleClick, id }: ISecondary) {

  const handleCurrentClick = () => {
    handleClick && handleClick(id);
  }

  return (
    <div className="w-full flex flex-col">
      <div 
        onClick={handleCurrentClick}
        className={`
          group rounded-lg border h-16 w-full flex items-center relative
          hover:cursor-pointer  
          ${selected ? 'border-white bg-slate-900': 'bg-slate-700  border-stone-500'}
        `}
      >       {selected && <CheckCircle style={{position: 'absolute', top: 18, right: 12}} color='secondary'/>}

          <img 
            src={photo} 
            alt="test" 
            className={`
              h-full w-20
              ${selected ? 'scale-125 -translate-y-3': ''}
          `}/>   
          
          <p className='text-white font-semibold tracking-wider uppercase letter-spacing'>
          {text}
        </p>
      </div>
    </div>
  )
}