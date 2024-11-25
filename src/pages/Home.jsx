import React from 'react';
import fotoInicio from '../assets/fotoUno.png'
import fotoSegunda from '../assets/fotoDos.png'
import fotoTercera from '../assets/fotoTres.png'
import fotoCuarta from '../assets/fotoCuatro.png'
import '../App.css'
import Carrusel from '../components/Carrusel';
import { IoInformationCircleOutline } from "react-icons/io5"; // icono de info.(por si no se entiende el icono de la mancuerna)
import { CiDumbbell } from "react-icons/ci";


const Home = ({ onNavigate }) => {

  const images = [
    `${fotoInicio}`,
    `${fotoSegunda}`,
    `${fotoTercera}`,
    `${fotoCuarta}`
  ]

  return (
    <>
      <main className='mx-8 mt-7 mb-6 sm:mx-10'>
        <div className='info-container flex content-center items-center'>
          <CiDumbbell className='info-button w-6 h-6 mx-auto mb-4 cursor-pointer rotate-90' />
          
            <p className='tooltip w-[380px] sm:w-[600px] bottom-[-260px] sm:bottom-[-170px] border-[1px] border-[#848afc] '>
              ¿Qué es Duo-Life? <br /> 
              Es una App web enfocada a aquellas personas que quieren empezar o que recien estan
              comenzando a entrenar y no saben que tipo de entrenamientos o alimentacion son las indicadas para ellos o para sus metas.
              Gracias a tus caracteristicas fisicas y objetivos, te vamos a recomendar una dieta y entrenamiento que se adapte mejor para
              cada usuario de Duo-Life.
            </p>
          
        </div>
        <div>
          <Carrusel images={images} />
        </div>
        <article className='text-2xl sm:text-5xl text-[#8c92fa] mt-10 text-balance '>
          <p>¿Estas empezando a entrenar y no sabes por donde empezar? Estas en el lugar indicado</p>
          <p className='text-sm sm:text-lg mt-4'> Toca el boton de comenzar y empeza el analisis para alcanzar tus metas con Duo-Life.</p>
        </article>
      </main>
      <button className='sm:h-16 sm:w-52 sm:text-2xl sm:mb-20' onClick={onNavigate}>
        <div className='flex flex-row gap-1 items-baseline'>
          <span>Comenzar</span>
          <div className='w-1 h-1 rounded-full bg-white animate-bounce'></div>
          <div className='w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:-.3s]'></div>
          <div className='w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:-.5s]'></div>
        </div>
      </button>
    </>
  );
};

export default Home;