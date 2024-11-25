import React from 'react';
import adaptacion from '../assets/rutinas/rutina-adaptacion(1).webp'
import rutina5 from '../assets/rutinas/rutina-5DiasEqui.webp'


const ResultadoDos = () => {
  return (
    <>
      <main className='mx-4'>
        <section className='mt-16 flex flex-col items-baseline'>
          <h3 className='mb-4 text-3xl'>Alimentación:</h3>
          <article className='bg-zinc-900 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
            Para aquellos que tienen facilidad para ganar masa muscular, es esencial seguir una dieta equilibrada y rica en nutrientes que maximice
            los resultados y asegure una recuperación óptima. Aquí te dejo una guía alimentaria diseñada específicamente para este objetivo: <br />
            Proteínas de Alta Calidad: Pollo, pavo, pescado, huevos, carne magra, legumbres, tofu y productos lácteos. Apunta a consumir entre 1.6
            a 2 gramos de proteína por kilogramo de peso corporal. <br />
            Carbohidratos Complejos: Avena, arroz integral, quinoa, batata, pasta integral y legumbres. Los carbohidratos deben representar
            aproximadamente el 50-60% de tu ingesta calórica diaria para proporcionar energía suficiente. <br />
            Grasas Saludables: Aguacate, nueces, semillas, aceite de oliva, y pescado graso (como el salmón). Mantén el consumo de grasas en un
            20-30% de tu ingesta calórica diaria, enfocándote en grasas insaturadas. <br />
            Micronutrientes: Frutas y verduras variadas para asegurar una ingesta adecuada de vitaminas y minerales.
            Consejos Adicionales <br />
            Batidos Caseros: Los batidos de proteínas y calorías pueden ayudarte a alcanzar tus metas calóricas. Usa ingredientes como leche, avena,
            frutas, y mantequilla de maní. <br />
            Descanso Adecuado: Asegúrate de dormir lo suficiente, ya que la recuperación es esencial para el crecimiento muscular.
          </article>
        </section>

        <section className=' mt-16 flex flex-col items-baseline'>
          <h3 className='mb-4 text-3xl' >Tipo de entrenamiento:</h3>
          <article className='bg-gray-600 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
          Para una persona con un tipo de cuerpo mesomorfo, que tiende a desarrollar músculo con facilidad y tiene un físico naturalmente atlético,
          el entrenamiento debe ser equilibrado y variado para maximizar los resultados y mantener la forma física. Lo ideal va a ser que vayas al 
          gimnasio entre 4 o 5 veces a la semana (aunque si por alguna razón tenés que ir menos, lo podés ir acomodando). 
          Al finalizar tus entrenamientos, lo mejor sería que hagas entre 5 y 10 minutos de caminata o bici.
          </article>
        </section>

        <section className='mt-16 '>
          <h3 className='mb-4 flex items-start text-3xl' >Rutina de adaptación</h3>
          <article>
            <img
              className='m-auto rounded-xl'
              src={adaptacion}
            />
          </article>
          <a
            className='text-xs sm:text-sm underline'
            href={adaptacion}
            download='rutina-recomendada'
          >
            Descargar rutina 
          </a>
        </section>

        <section className='mt-16 '>
          <h3 className='mb-4 flex items-start text-3xl'>Rutina recomendada</h3>
          <article>
            <img
              className='m-auto rounded-xl'
              src={rutina5}
            />
          </article>
          <a
            className='text-xs sm:text-sm underline'
            href={rutina5}
            download='rutina-recomendada'
          >
            Descargar rutina 
          </a>
        </section>
      </main>
    </>
  );
};

export default ResultadoDos;