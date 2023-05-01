import React from 'react'
import './Slider.module.css'


function Slider({imagenes}) {
    const [imagenActual, setImagenActual] = React.useState(0);
    const cantidad = imagenes.length;

    if (!Array.isArray(imagenes) || cantidad === 0) return;

 	const siguienteImagen = () => {
        setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ?  cantidad - 1 : imagenActual - 1 );
	};
    console.log(' SiguienteImagen ', imagenActual )
    console.log(' PPPanteriorImagen ', imagenActual )
    console.log(cantidad);
  return (
    <div className='container'>
       <button className='botonAnt' onClick={anteriorImagen}>ᐊ</button>
       {imagenes.map((imagen, index) => {
        return (
        <div>{imagenActual === index &&(
            <img key={index} src={imagen} alt="imagen"/>
        )}
        </div>
        );
       })}
      <button className='botonSig' onClick={siguienteImagen}>ᐅ</button>
    </div>
  )
}

export default Slider