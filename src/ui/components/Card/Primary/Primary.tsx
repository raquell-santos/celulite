import { CheckCircle } from '@material-ui/icons'
import { IPrimary} from './interface'

export default function Primary({photo, text, isSelected = false, handleClick, id, height, color = 'material-pink'}: IPrimary) {  
  const className = color === 'material-pink' 
    ? `group rounded-t border-material-pink border-2 ${height ? `h-${height}` : 'h-28' } w-full shadow-md shadow-slate-200 flex justify-center 
    hover:cursor-pointer hover:bg-slate-900 relative
    ${isSelected ? 'bg-slate-900': ''} `
    : `group rounded-t border-green-500 border-2 ${height ? `h-${height}` : 'h-28' } w-full shadow-md shadow-slate-200 flex justify-center 
    hover:cursor-pointer hover:bg-slate-900 relative
    ${isSelected ? 'bg-slate-900': ''} `
  
  
  return (
    <div className="flex flex-col w-full">
      <div 
        onClick={() => handleClick(id)}
        className={className}
      >
        {isSelected && <CheckCircle style={{position: 'absolute', top: 8, right: 12}} color='secondary'/>}
          <div className='flex flex-col'>
            <img 
              src={photo} 
              alt="test" 
              className={`
                h-full 
                group-hover:scale-125 group-hover:-translate-y-3
                ${isSelected ? 'scale-125 -translate-y-3': ''}
              `}/>
          </div>
      </div>

      {
        color === 'material-pink' 
          ? <div className={`flex justify-center h-full w-full bg-material-pink  rounded-b`}> 
              <p className='text-white font-semibold tracking-wider uppercase letter-spacing'>
                {text}
              </p>
            </div>
          : <div className={`flex justify-center h-full w-full bg-green-500 rounded-b`}> 
              <p className='text-white font-semibold tracking-wider uppercase letter-spacing'>
                {text}
              </p>
            </div>
      }


    </div>
  )
}