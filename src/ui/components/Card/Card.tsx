

import { ICard } from './interface'

export default function Card({photo, text}: ICard) {
  return (
    <div>
      <div className="group rounded-t border-sky-300 border-4 h-28 w-full shadow-md shadow-slate-200 flex justify-center hover:cursor-pointer hover:bg-slate-900" >
          <div className='flex flex-col'>
            <img src={photo} alt="test" className='h-full group-hover:scale-125 group-hover:-translate-y-4'/>
          </div>
      </div>
      <div className='flex justify-center h-full w-full bg-sky-300 rounded-b'> 
      
      <p className='text-black font-semibold tracking-wider uppercase letter-spacing'>
        {text}
      </p>
    
      </div>
    </div>
  )
}