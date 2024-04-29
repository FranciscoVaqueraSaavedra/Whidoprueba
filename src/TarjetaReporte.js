import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ReportesEnCurso from './ReportesEnCurso';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TarjetaReporte = ({ index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const reporte = ReportesEnCurso[index];

  // Verificar si reporte es undefined
  if (!reporte) {
    return null; // O podrías mostrar un mensaje de error
  }

  // Desestructurar propiedades del reporte
  const { name, img, imgBack, date, place, review, reviewBack } = reporte;

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  const acceptCard = () => {
    setAccepted(true);
  }

  const rejectCard = () => {
    setRejected(true);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true
  };

  return (
    <div className='max-w-screen-lg mx-auto'>
    <h1 className='text-center text-3xl font-semibold mb-8'>Reportes Obtenidos</h1>

    <div className="bg-black h-15 absolute top-0 left-0 flex items-center justify-center rounded-xl px-4 py-2">
        <p className="text-2xl italic text-white">Administrador</p>
    </div> 

    <div className="bg-yellow-600 h-15 absolute top-0 right-0 flex items-center justify-center rounded-xl px-4 py-2">
        <p className="text-white text-2xl font-regular">Erika Polino</p>
      </div>
    <div className='mt-20'>
    <Slider {...settings}>
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
      <div className='card'>
        <div className="bg-white h-[450px] text-black rounded-xl">
          <div className="h-56 rounded-t-xl bg-yellow-500 flex justify-center items-center">
            <img src={img} alt="" className="h-44 w-44 rounded-full"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 p-4">
            <p className="text-xl font-semibold">{name}</p>
            <p>{date}</p>
            <p>{review}</p>
            <p>{place}</p>
            <button className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-xl mt-4" onClick={flipCard}>Más Información</button>
          </div>
        </div>
      </div>
      <div className='card card-back'>
        <div className="bg-white h-[450px] text-black rounded-xl">
          <div className="h-56 rounded-t-xl bg-yellow-500 flex justify-center items-center">
            <img src={imgBack} alt="" className="h-44 w-44 "/>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 p-4">
            <p>{date}</p>
            <p>{reviewBack}</p>
            <div>
              {accepted ? (
                <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-xl mt-4">Aceptado</span>
              ) : (
                <button className="bg-green-500 text-white text-sm px-2 py-1 rounded-xl mr-2" onClick={acceptCard}>Aceptar</button>
              )}
              {!accepted && !rejected && (
                <button className="bg-red-500 text-white text-sm px-2 py-1 rounded-xl" onClick={rejectCard}>Rechazar</button>
              )}
            </div>
            <button className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-xl mt-4 " onClick={flipCard}>Volver</button>
          </div>
        </div>
      </div>
    </ReactCardFlip>
    </Slider>
    </div>
    </div>
  );
}

export default TarjetaReporte;
