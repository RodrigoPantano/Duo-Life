import React from 'react';
import ectomorfo from '../assets/ectomorfo.webp'
import mesomorfo from '../assets/mesomorfo.webp'
import endomorfo from '../assets/endomorfo.webp'

const Section = ({ sectionIndex, onBack, onSelect }) => {
  return (
    <div>
      <h1 className='mb-12 mt-6'>Selecciona que tipo de físico tienes:</h1>

      <div className='flex flex-col mt-8 mb-8' >
        <button onClick={() => onSelect(sectionIndex, 1)} className='flex mb-2'>
          <img className='h-32 w-32 my-auto' src={ectomorfo} />
          <p className='text-end sm:text-center my-auto'>Ectomorfo:
            Una persona ectomorfa tiende a tener una figura delgada y alta, con extremidades largas y una estructura ósea pequeña. Suelen 
            tener poca masa muscular y grasa corporal. Este tipo de cuerpo es a menudo caracterizado por un metabolismo rápido, lo que puede 
            hacer que ganen peso (tanto muscular como graso) con dificultad.
          </p>
        </button>

        <button onClick={() => onSelect(sectionIndex, 2)} className='flex mb-2'>
          <p className='text-start sm:text-center my-auto'>Mesomorfo:
          Una persona mesomorfa tiene una estructura física naturalmente atlética y muscular. Este tipo de cuerpo se caracteriza por una facilidad 
          para ganar masa muscular y mantener niveles bajos de grasa corporal. Los mesomorfos suelen tener una complexión media con hombros anchos, 
          una cintura estrecha y extremidades bien proporcionadas.
          </p>
          <img className='h-32 w-32 my-auto ml-3' src={mesomorfo} />
        </button>

        <button onClick={() => onSelect(sectionIndex, 3)} className='flex'>
          <img className='h-32 w-32 my-auto' src={endomorfo} />
          <p className='text-end sm:text-center my-auto'>Endomorfo:
          Una persona endomorfa se caracteriza por una estructura corporal más ancha y robusta, con una mayor propensión a acumular grasa corporal. 
          Los endomorfos tienden a tener una forma redondeada, con una mayor anchura en la cintura y las caderas, y extremidades más cortas.
          </p>
        </button>
      </div>

      <button className='mb-6' onClick={onBack}>Volver atrás</button>
    </div>
  );
};

export default Section;