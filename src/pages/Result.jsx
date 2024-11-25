import React from 'react';
import { FaTrash } from "react-icons/fa6";
import ResultadoUno from '../resultados/Resultado_uno';
import ResultadoDos from '../resultados/Resultado-2';
import ResultadoTres from '../resultados/Resultado-3';
import ResultadoCuatro from '../resultados/Resultado-4';
import ResultadoCinco from '../resultados/Resultado-5';
import ResultadoSeis from '../resultados/Resultado-6';
import ResultadoSiete from '../resultados/Resultado-7';
import ResultadoOcho from '../resultados/Resultado-8';
import ResultadoNueve from '../resultados/Resultado-9';
import ResultadoDiez from '../resultados/Resultado-10';
import ResultadoOnce from '../resultados/Resultado-11';
import ResultadoDoce from '../resultados/Resultado-12';
import ResultadoTrece from '../resultados/Resultado-13';
import ResultadoCatorce from '../resultados/Resultado-14';
import ResultadoQuince from '../resultados/Resultado-15';
import ResultadoDieciseis from '../resultados/Resultado-16';
import ResultadoDiecisiete from '../resultados/Resultado-17';
import ResultadoDieciocho from '../resultados/Resultado-18';
import ResultadoDiecinueve from '../resultados/Resultado-19';
import ResultadoVeinte from '../resultados/Resultado-20';
import ResultadoVeintiuno from '../resultados/Resultado-21';
import ResultadoVeintidos from '../resultados/Resultado-22';
import ResultadoVeintitres from '../resultados/Resultado-23';
import ResultadoVeinticuatro from '../resultados/Resultado-24';
import ResultadoVeinticinco from '../resultados/Resultado-25';
import ResultadoVeintiseis from '../resultados/Resultado-26';
import ResultadoVeintisiete from '../resultados/Resultado-27';

const Result = ({ selections, onBack }) => {
  const getResult = () => {
    const [s1, s2, s3] = selections;
    if (s1 === 1 && s2 === 1 && s3 === 1) return < ResultadoUno/>;
    if (s1 === 2 && s2 === 1 && s3 === 1) return < ResultadoDos/>;
    if (s1 === 3 && s2 === 1 && s3 === 1) return < ResultadoTres/>;
    if (s1 === 1 && s2 === 1 && s3 === 2) return < ResultadoCuatro/>;
    if (s1 === 2 && s2 === 1 && s3 === 2) return < ResultadoCinco/>;
    if (s1 === 3 && s2 === 1 && s3 === 2) return < ResultadoSeis/>;
    if (s1 === 1 && s2 === 1 && s3 === 3) return < ResultadoSiete/>;
    if (s1 === 2 && s2 === 1 && s3 === 3) return < ResultadoOcho/>;
    if (s1 === 3 && s2 === 1 && s3 === 3) return < ResultadoNueve/>;
    if (s1 === 1 && s2 === 2 && s3 === 1) return < ResultadoDiez/>;
    if (s1 === 2 && s2 === 2 && s3 === 1) return < ResultadoOnce/>;
    if (s1 === 3 && s2 === 2 && s3 === 1) return < ResultadoDoce/>;
    if (s1 === 1 && s2 === 2 && s3 === 2) return < ResultadoTrece/>;
    if (s1 === 2 && s2 === 2 && s3 === 2) return < ResultadoCatorce/>;
    if (s1 === 3 && s2 === 2 && s3 === 2) return < ResultadoQuince/>;
    if (s1 === 1 && s2 === 2 && s3 === 3) return < ResultadoDieciseis/>;
    if (s1 === 2 && s2 === 2 && s3 === 3) return <ResultadoDiecisiete/>;
    if (s1 === 3 && s2 === 2 && s3 === 3) return <ResultadoDieciocho/>;
    if (s1 === 1 && s2 === 3 && s3 === 1) return <ResultadoDiecinueve/>;
    if (s1 === 2 && s2 === 3 && s3 === 1) return <ResultadoVeinte/>;
    if (s1 === 3 && s2 === 3 && s3 === 1) return <ResultadoVeintiuno/>;
    if (s1 === 1 && s2 === 3 && s3 === 2) return <ResultadoVeintidos/>;
    if (s1 === 2 && s2 === 3 && s3 === 2) return <ResultadoVeintitres/>;
    if (s1 === 3 && s2 === 3 && s3 === 2) return <ResultadoVeinticuatro/>;
    if (s1 === 1 && s2 === 3 && s3 === 3) return <ResultadoVeinticinco/>;
    if (s1 === 2 && s2 === 3 && s3 === 3) return <ResultadoVeintiseis/>;
    if (s1 === 3 && s2 === 3 && s3 === 3) return <ResultadoVeintisiete/>;

    return null;
  };

  const result = getResult();

  return (
    <div className='text-center mt-12'>
      <h1 className='text-3xl sm:text-5xl underline px-4'>Esto es lo que recomendamos en base a lo que buscas y tus caracteristicas:</h1>
      <section> {result} </section>
      <div className='flex justify-end pr-6'>
        <button
          className='bg-red-600 mt-16 mb-12 flex items-center justify-between hover:border-solid hover:border-red-950 '
          onClick={onBack}
        >
          <span className='mr-1'><FaTrash /></span>
          <span>Eliminar Datos</span>
        </button>
      </div>
    </div>
  );
};

export default Result;