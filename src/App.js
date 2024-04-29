import React from 'react';
import TarjetaReporte from './TarjetaReporte';
import Slider from "react-slick";

import ReportesEnCurso from './ReportesEnCurso';
import TarjetaEnvioReporte from './TarjetaEnvioReporte';
import TarjetaCalidad from './TarjetaCalidad';


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true
  };

  return (

    <div className="max-w-screen-lg mx-auto">
      <div className="bg-black h-15 absolute top-0 left-0 flex items-center justify-center rounded-xl px-4 py-2">
        <p className="text-2xl italic text-white">Administrador</p>
      </div> 

      <div className="bg-yellow-600 h-15 absolute top-0 right-0 flex items-center justify-center rounded-xl px-4 py-2">
        <p className="text-white text-2xl font-regular">Erika Polino</p>
      </div>

      <div className="mt-20">
        <div className="mx-4 mb-4 flex justify-between">
          <div className="w-1/2">
            <h1 className="text-center text-3xl font-semibold mb-4">Envío de reporte atendido</h1>  
            {ReportesEnCurso.map((reporte, index) => (
              <TarjetaEnvioReporte key={index} index={index} />
            ))}
          </div>
          <div className="w-1/2">
            <h1 className="text-center text-3xl font-semibold mb-4">Reportes de calidad</h1>  
            {ReportesEnCurso.map((reporte, index) => (
              <TarjetaCalidad key={index} index={index} />
            ))}
          </div>
        </div>
      </div> 
    </div>


    /*
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold mb-8">Reportes Obtenidos</h1>
      
      <div className="bg-black h-15 absolute top-0 left-0 flex items-center justify-center rounded-xl px-4 py-2">
        <p className="text-2xl italic text-white">Administrador</p>
      </div> 

      <div className="bg-yellow-600 h-15 absolute top-0 right-0 flex items-center justify-center rounded-xl px-4 py-2">
        <p className="text-white text-2xl font-regular">Erika Polino</p>
      </div>

      <div className="mt-20">
        <Slider {...settings}>
        {ReportesEnCurso.map((reporte, index) => (
          <TarjetaReporte key={index} index={index} />
        ))} 
        </Slider>
      </div>
    </div>

    */
  );
}

export default App;
