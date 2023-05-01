import Navbar from './components/NavBar';
import React from 'react';
import Slider from './components/Slider';
import inaki from './imagen/inaki.png';
import leon from './imagen/Leon.png';
import logo from './imagen/DCUlogo.png';
import './App.css';



function App() {

  const mockImagenes = [
    inaki,
		leon,
		logo,
	];

  return (
    <>
      <Navbar/>
      <Slider imagenes={mockImagenes} />
    </>
  );
}


export default App;



