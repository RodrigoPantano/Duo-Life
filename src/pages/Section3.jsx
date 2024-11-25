import React from 'react';
import trenSuperior from '../assets/trenSuperior.webp'
import trenInferior from '../assets/trenInferior.webp'
import fullBody from '../assets/fullBody.webp'

const Section3 = ({ sectionIndex, onBack, onSelect }) => {
  return (
    <div>
      <h1 className='mb-12 mt-6'>Cuales son tus prioridaes:</h1>

      <div className='flex flex-col mt-8 mb-8' >
        <button onClick={() => onSelect(sectionIndex, 1)} className='flex mb-2'>
          <img className='h-32 w-32 my-auto' src={fullBody} />
          <p className='text-end sm:text-center my-auto'>Mejorar de forma armoniosa, darle tanta importancia al tren superior como al inferior. Buscas un curpo proporcionado y para lograr esto 
            vamos a tener que entrenar con la misma intensidad todo el cuerpo, en caso de entrenar menos dias se puede hacer tres dias en los cuales 
            se haga full body o si vamos mas dias podemos dividirlos en tres o cuatro dias abarcando los musculos del tren superior (de forma dividida)
            y otros dos o un dia de piernas  
          </p>
        </button>

        <button onClick={() => onSelect(sectionIndex, 2)} className='flex mb-2'>
          <p className='text-start sm:text-center my-auto'>Darle prioridad al tren inferior, es decir tener un mayor entrenamiento de piernas y de forma mas intensiba que al resto del cuerpo,
            pero esto no quiere decir que no se va a entrenar el tren superior (es importante entrenar todo el cuerpo). Este tipo de rutinas se 
            pueden dividir en dos o tres dias de piernas y uno o dos en los que se abarca todo el tren superior.  
          </p>
          <img className='h-32 w-32 my-auto' src={trenInferior} />
        </button>

        <button onClick={() => onSelect(sectionIndex, 3)} className='flex'>
          <img className='h-32 w-32 my-auto' src={trenSuperior} />
          <p className='text-end sm:text-center my-auto'>Buscas darle un mayor enfoque al tren superior (esto claramente no quiere decir que no se va a trabajar el tren inferior), donde vamos a tener 
            mas dias en los cuales nos vamos a dedicar a entrenar los musculos de pecho, espalda, biceps, triceps y hombros. Y en menor medida vamos a 
            trabajr las piernas, entrenandolas un solo dia.
          </p>
        </button>
      </div>

      <button className='mb-6' onClick={onBack}>Volver atrás</button>
    </div>
  );
};

export default Section3;