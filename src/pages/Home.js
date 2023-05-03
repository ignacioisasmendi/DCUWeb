import React from 'react'
import Slider from '../components/Slider';
import inaki from '../images/Inaki.png';
import leon from '../images/Leon.png';
import plaga from '../images/Plaga.png';
import nacho from '../images/Nacho.png';
import mauro from '../images/Mauro.png';
import './Home.css'


const Home = () => {

  const mockImagenes = [
    inaki,
		leon,
    plaga,
    nacho,
    mauro
	];

  return (
    <>
        <h1>Sobre el proyecto</h1>
          <h2>
            El proyecto consiste en lograr la automatizacion de contenido de cualquier curso plasmado en moodle a un entorno virtual desarrollado con Unity. 
            Dicho contenido de moodle debe estar esquematizado de cierta forma para que la automatizacion funcione. El proyecto busca mostrar a los 
            maestros una forma diferente de enseñar y a los aprendices de aprender. Este curso virtual cuenta con 4 aulas donde cada una tiene un fin especifico
            y esta pensado para que a medida que se avanza en el curso se avance de aula, y al finalizar la tematica a aprender se vuelva otra vez a la primer aula
            siendo asi un curso progresivo y que intenta captar la atencion del aprendiz para descubrir el nuevo contenido. 
          </h2>
          <div className='slider'>
            <Slider imagenes={mockImagenes} />
          </div>
    </>
  )
}

export default Home;
