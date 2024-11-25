import React from 'react';
import adaptacion from '../assets/rutinas/rutina-adaptacion(2).webp'
import rutina5 from '../assets/rutinas/rutina-5DiasInf.webp'


const ResultadoSeis = () => {
    return (
        <>
            <main className='mx-4'>
                <section className='mt-16 flex flex-col items-baseline'>
                    <h3 className='mb-4 text-3xl'>Alimentación:</h3>
                    <article className='bg-zinc-900 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
                        Diseñar una guía alimenticia para alguien que quiere ganar masa muscular pero tiene facilidad para ganar peso requiere un enfoque
                        cuidadoso. Aquí tienes una guía que te puede ser útil: <br />
                        Proteínas: Pollo, pescado, huevos, legumbres, productos lácteos bajos en grasa. Una cantidad proximadamente de 1.6 a 2 gramos de
                        proteína por kilogramo de peso corporal al día. <br />
                        Carbohidratos Complejos y Fibra: Avena, arroz integral, quinoa, batata, legumbres, verduras. Prioriza los carbohidratos complejos y con
                        alto contenido en fibra para mantenerte saciado y evitar picos de azúcar en la sangre. <br />
                        Grasas Saludables y Moderadas: Aguacate, nueces, semillas, aceite de oliva, pescado graso. Mantén el consumo de grasas en un nivel
                        moderado para no exceder las calorías necesarias. <br />
                        Micronutrientes: Frutas y verduras de todos los colores para asegurar una ingesta adecuada de vitaminas y minerales. Comer variedad
                        ayuda a cubrir todas las necesidades nutricionales. <br />
                        Hidratación: Bebe al menos 2 litros de agua al día, más si estás entrenando intensamente. <br />
                        Consejos Adicionales: <br />
                        Porciones Controladas: Mantén un control sobre el tamaño de las porciones para evitar consumir calorías en exceso. <br />
                        Frecuencia de Comidas: Come varias veces al día (5-6 comidas pequeñas) para mantener tu metabolismo activo y evitar el hambre excesiva.
                    </article>
                </section>

                <section className=' mt-16 flex flex-col items-baseline'>
                    <h3 className='mb-4 text-3xl' >Tipo de entrenamiento:</h3>
                    <article className='bg-gray-600 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
                        Para una persona con un tipo de cuerpo endomorfo, que tiende a ganar peso fácilmente y tiene una mayor proporción de grasa corporal,
                        el enfoque principal del entrenamiento debe ser la pérdida de grasa y la ganancia muscular. Con 5 dias de entrenamiento seria una gran meta
                        y al finalizar tus entrenamientos, lo ideal sería que hagas entre 10 y 15 minutos de cardio.
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

export default ResultadoSeis;