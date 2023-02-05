
import { useEffect, useState } from 'react';
import './Loader.css'

export default function Loader({handleStep}) {
    const [loaded, setLoaded] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if(loaded <= 99) {
                setLoaded(loaded+2)
            } 
        }, 150) 



        if(loaded === 100) {
            handleStep({loaded: true})
        }

    },[loaded]) 

    return <>
    <div id="loader">
    <div id="lemon" style={{display: loaded === 100 ? 'unset': 'none'}}> </div>
    <div id="straw" style={{display: loaded === 100 ? 'unset': 'none'}}></div>
    <div id="glass">
        <div id="cubes">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="drink"   style={{top: (100-loaded)+'%'}} ></div>
        <span id="counter">
            {loaded+'%'}
        </span>
    </div>
    <div id="coaster"></div>
</div>

<footer className='flex justify-center align-center text-center text-white mb-3 text-xl font-bold tracking-wide'>
    {
    (loaded >= 0 && loaded!== 100)
        ? <span>    Aguarde enquanto finalizamos <br/>seu programa personalizado... </span>
        : <span>    Seu programa está pronto!  </span>
}
    

    
    
    </footer>
    
</>
}