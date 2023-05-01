import React from 'react'
import Slider from '../components/Slider';
import inaki from '../images/inaki.png';
import leon from '../images/Leon.png';
import logo from '../images/DCUlogo.png';
import './aboutus.module.css'

const AboutUs = () => {

  const mockImagenes = [
    inaki,
		leon,
		logo,
	];

  return (
    <>
        <h1>Esta es la pagina sobre nosotros de DCU!</h1>
        <div className='slider'>
          <Slider imagenes={mockImagenes} />
        </div>
    </>
  )
}

export default AboutUs;
