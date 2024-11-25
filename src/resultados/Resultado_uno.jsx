import React from 'react';
import adaptacion from '../assets/rutinas/rutina-adaptacion(1).webp'
import rutina5 from '../assets/rutinas/rutina-5DiasEqui.webp'


const ResultadoUno = () => {
  return (
    <>
      <main className='mx-4'>
        <section className='mt-16 flex flex-col items-baseline'>
          <h3 className='mb-4 text-3xl'>Alimentación:</h3>
          <article className='bg-zinc-900 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
            Para alguien que tiene dificultades para ganar peso y busca aumentar la masa muscular, es crucial un enfoque dietético que incremente la ingesta calórica de manera 
            saludable y balanceada. Aquí tienes una guía diseñada específicamente para este objetivo: <br />
            Aumentar la Ingesta Calórica: Necesitas consumir más calorías de las que gastas. Un aumento de 500-1000 calorías adicionales al día puede ser un buen punto de partida.
            Comidas Frecuentes: Come 5-6 veces al día para asegurar un flujo constante de nutrientes. <br />
            Proteínas de Alta Calidad: Pollo, pescado, huevos, carne magra, legumbres, tofu y productos lácteos. Apunta a consumir entre 1.8 a 2.2 gramos de proteína por kilogramo 
            de peso corporal. <br />
            Carbohidratos Complejos: Avena, arroz integral, quinoa, batata, pasta integral y legumbres. Los carbohidratos deben representar aproximadamente el 50-60% de tu ingesta 
            calórica diaria para proporcionar energía suficiente. <br />
            Grasas Saludables: Paltas, nueces, semillas, aceite de oliva, y pescado graso (como el salmón). Mantén el consumo de grasas en un 20-30% de tu ingesta calórica diaria, 
            enfocándote en grasas insaturadas. <br />
            Micronutrientes: Frutas y verduras variadas para asegurar una ingesta adecuada de vitaminas y minerales. <br />
            Consejos Adicionales <br />
            Batidos Caseros: Los batidos de proteínas y calorías pueden ayudarte a alcanzar tus metas calóricas. Usa ingredientes como leche, avena, frutas, y mantequilla de maní. <br />
            Descanso Adecuado: Asegúrate de dormir lo suficiente, ya que la recuperación es esencial para el crecimiento muscular.
          </article>
        </section>

        <section className=' mt-16 flex flex-col items-baseline'>
          <h3 className='mb-4 text-3xl' >Tipo de entrenamiento:</h3>
          <article className='bg-gray-600 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
          Vas a necesitar un entrenamiento con mucha intensidad que acompañe la alimentación que te recomendamos. Lo ideal va a ser que vayas al 
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

export default ResultadoUno;