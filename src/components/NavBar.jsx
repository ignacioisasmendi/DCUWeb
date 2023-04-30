import React from 'react'
import styled from 'styled-components'
import './NavBar.module.css'


export const NavBar = () => {
  return (
    <>
      <h2>¿Quienes somos?</h2>
      <h1>
        Un grupo de seis estudiantes de la Unicen que estan realizando un proyecto para la catedra de Ingeniera de Software. 
      </h1>
      <div
      className='inakiImagen'>
      <img src={require('../inaki.png')}
           className='Inaki'/>
      </div>
   
      <h2>¿En que consiste el proyecto?</h2>
      <h1>
        El proyecto consiste en poder virtualizar dentro de un entorno de Unity un curso que este desarrollado dentro de plataforma de Moodle. 
      En dicha virtualizacion se busca lograr que los aprendices del curso encuentren una forma diferente para aprender. 
        A su vez, el proyecto intenta abarcar a la mayor cantidad de Maestros y para lograr la virtualizacion se desarrollo 
      un codigo capaz de transformar todo el contenido volcado en Moodle al proyecto en Unity.  
      </h1>
    </>
  )
}

export default NavBar;
/*
const NavContainer = styled.nav`
  .Inaki{
    widht: 35px;
    color: #fff;
  }
`*/
