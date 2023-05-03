import React from 'react'


import './AboutUs.css'

const AboutUs = () => {



  return (
    <>
      <div className='AboutUs'>
        <h1 className='titulo'>Sobre nosotros</h1>
          <h2 className='texto'>
            Somos un grupo de seis estudiantes de la Unicen que conformamos el grupo Don't call us 
            para la catedra Ingenieria de Software. El mismo se encuntra comprometido con el proyecto propuesto por la catedra
            el cual nos conllevo desarrollarnos con nuevas tecnologias y aprender a trabajar en equipo.
          </h2>
       
        <div className='Equipo'>
          
          <div className='contenedor'>
            <div className='img'>
            <img src={require('../images/Inaki.png')} className='Inaki'/>
            <h3> Inaki Urdangarin</h3>
            <h4>Lider de equipo</h4>
            </div>
          </div>

          <div className='contenedor'>
            <div className='img'>
              <img src={require('../images/Leon.png')} className='Leon'/>
              <h3> Leon Soler</h3>
              <h4>Miembro de equipo</h4>
            </div>
          </div>

          <div className='contenedor'>
            <div className='img'>
              <img src={require('../images/Plaga.png')} className='Plaga'/>
              <h3>Plaga</h3>
              <h4>Miembro de equipo</h4>
            </div>
          </div>

          </div>

        <div className='Equipo2'>
          <div className='contenedor'>
            <div className='img'>
              <img src={require('../images/Nacho.png')} className='Nacho'/>
              <h3>Sobrino de Viviana</h3>
              <h4>Miembro de equipo</h4>
            </div>
          </div>

          <div className='contenedor'>
            <div className='img'>
              <img src={require('../images/Mauro.png')} className='Labestia'/>
              <h3>Chupamedias</h3>
              <h4>Miembro de equipo</h4>
            </div>
          </div>

          <div className='contenedor'>
            <div className='img'>
              <img src={require('../images/Franco.png')} className='Franco'/>
              <h3>ich bin Deutscher</h3>
              <h4>Miembro de equipo</h4>
            </div>
          </div>
          </div>
    </div>      
        
    </>
  )
}

export default AboutUs;


/*<div className='slider'>
    <Slider imagenes={mockImagenes} />
  </div>
  
  
  
  
  */