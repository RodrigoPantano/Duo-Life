import React from 'react';
import adaptacion from '../assets/rutinas/rutina-adaptacion(1).webp'
import rutina3 from '../assets/rutinas/rutina-3DiasEqui.webp'


const ResultadoDiecinueve = () => {
    return (
        <>
            <main className='mx-4'>
                <section className='mt-16 flex flex-col items-baseline'>
                    <h3 className='mb-4 text-3xl'>Alimentación:</h3>
                    <article className='bg-zinc-900 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
                        Para un ectomorfo que por ahí no busca generar un aumento muscular muy grande, también debe tener una buena alimentación.
                        Aunque tal vez no tiene la necesidad de ser tan constante a la hora de comer porque no es lo que busca, esto no quita que igualmente tenga que tener
                        una buena alimentación. Como la siguiente: <br />
                        Proteínas Magras: Pollo, pavo, pescado, huevos, legumbres, tofu, productos lácteos bajos en grasa. Aproximadamente 1.2 a 1.6
                        gramos de proteína por kilogramo de peso corporal para mantener la masa muscular. <br />
                        Carbohidratos Complejos: Avena, arroz integral, quinoa, batata, frutas y verduras. Suficiente para mantener tu nivel de
                        energía y satisfacer tus necesidades calóricas. <br />
                        Grasas Saludables: Palta, nueces, semillas, aceite de oliva, pescado graso, aceite de lino, mantequilla de maní. 20-30% de
                        tu ingesta calórica diaria. <br />
                        Micronutrientes: Frutas y verduras variadas (espinacas, brócoli, zanahorias, pimientos, bayas, cítricos, manzanas, peras). <br />
                        Hidratación: Al menos 2 litros de agua al día.
                    </article>
                </section>

                <section className=' mt-16 flex flex-col items-baseline'>
                    <h3 className='mb-4 text-3xl' >Tipo de entrenamiento:</h3>
                    <article className='bg-gray-600 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
                        El tipo de entrenamiento recomendado puede ser un poco más moderado y con menos carga semanal que en otros casos. 
                        Con asistir 3 veces por semana al gym, va a cumplir con sus expectativas. Al finalizar sus entrenamientos, lo ideal sería 
                        que haga unos minutos de cardio (10 min aprox.).
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
                            src={rutina3}
                        />
                    </article>
                    <a
                        className='text-xs sm:text-sm underline'
                        href={rutina3}
                        download='rutina-recomendada'
                    >
                        Descargar rutina
                    </a>
                </section>
            </main>
        </>
    );
};

export default ResultadoDiecinueve;