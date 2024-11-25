import React from 'react';
import fotoEjemplo from '../assets/foto-inicio.webp'
import perderPeso from '../assets/corredora.webp'
import recomposicion from '../assets/gymGirl.webp'

const Section2 = ({ sectionIndex, onBack, onSelect }) => {
  return (
    <div>
      <h1 className='mb-12 mt-6'>Cual es tu objetivo al entrenar:</h1>

      <div className='flex flex-col mt-8 mb-8' >
        <button onClick={() => onSelect(sectionIndex, 1)} className='flex mb-2'>
          <img className='h-32 w-32 my-auto' src={fotoEjemplo} />
          <p className='text-end sm:text-center my-auto'>Tengo como objetivo principal una gran ganancia de masa muscular (lo cual va a requerir subir de peso de forma limpia y controlada):
            Esto es para quienes quieren aumentar su masa muscular y para lograr esto se recomienda un buen volumen de entrenamiento, es decir 
            un entrenamiento de 4 a 6 dias segun la energia, el tiempo que tengan u otro factores que pueden hacer variar la cantidad de dias. 
          </p>
        </button>

        <button onClick={() => onSelect(sectionIndex, 2)} className='flex mb-2'>
          <p className='text-start sm:text-center my-auto'>Perder peso de forma controlada con un buen entrenamiento complementario (aquellas personas que quieren bajar de peso deben entrenar 
            tambien para lograrlo de una forma mas efectiva y sana): Para bajar de peso se recomienda un entrenamiento mas enfocado en el cardio 
            y menor volumen de entrenamiento de gimnasio. Para estas personas se recomienda entrenar entre 3 y 5 dias, en los cuales hay dias en 
            los que unicamente se entrene el cardio.
          </p>
          <img className='h-32 w-32 my-auto' src={perderPeso} />
        </button>

        <button onClick={() => onSelect(sectionIndex, 3)} className='flex'>
          <img className='h-32 w-32 my-auto' src={recomposicion} />
          <p className='text-end sm:text-center my-auto'>Busco una recomposicion corporal(es el hecho de ganar músculo y de perder grasa al mismo tiempo. Es un fenómeno genuino que solamente
            se experimenta en tres situaciones distintas: en personas sedentarias que se inician en el trabajo de fuerza, en atletas que vuelven
            tras una lesión o en pacientes obesos.): Para este tipo de entrenamientos el entrenamiento puede ser mas moderado, pero requiere ir un 
            minimos de 3 veces por semana.
          </p>
        </button>
      </div>

      <button className='mb-6' onClick={onBack}>Volver atrás</button>
    </div>
  );
};

export default Section2; 