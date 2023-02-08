import PEGADA from '../../assets/physicaAactivity/pegada.png'
import HALTERES from '../../assets/physicaAactivity/halteres.png'
import BOIA from '../../assets/physicaAactivity/boia.png'
import DANCA from '../../assets/physicaAactivity/musica.png'

import ERROR from '../../assets/x.png'

const formData = {
    age: {
      value: '',
      photo: '',
      id: 0,
    },
    activities: [
      { photo: HALTERES, text:'Musculação / Crossfit', id: 1, isChecked: false },
      { photo: PEGADA, text:'Caminhada', id: 2, isChecked: false },
      { photo: BOIA, text:'Natação', id: 3, isChecked: false },
      { photo: DANCA, text:'Dança', id: 4, isChecked: false },
      { photo: ERROR, text:'Não pratico atividade física', id: 5, isChecked: false },
    ],
    height: 1.41,
    weight: 70,
    loaded: false,
    bodies: [
      {id: 1, text: 'Peito', isChecked: false},
      {id: 2, text: 'Barriga', isChecked: false},
      {id: 3, text: 'Coxas', isChecked: false},
      {id: 4, text: 'Costas', isChecked: false},
      {id: 5, text: 'Glúteos', isChecked: false},
      {id: 6, text: 'Posterior', isChecked: false},
    ],
    hairRemoval: {
      id:'',
      text:'',
      photo:''
    },
    pregnant: undefined,
    stress: undefined,
  }

  export default formData