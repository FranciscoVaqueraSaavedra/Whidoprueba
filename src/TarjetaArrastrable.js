import React, { useState } from 'react';
import ResumenReporte from './ResumenReporte';

const TarjetaArrastrable = ({ numero, motivo, nombre, fecha, ubicacion }) => {
  const [posicionInicial, setPosicionInicial] = useState({ x: 0, y: 0 });
  const [posicionActual, setPosicionActual] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event) => {
    setDragging(true);
    event.dataTransfer.setData('text/plain', JSON.stringify({ numero, motivo, nombre, fecha, ubicacion })); // Aquí pasamos toda la información de la tarjeta
    event.dataTransfer.effectAllowed = 'move';
    const offsetX = event.clientX - posicionActual.x;
    const offsetY = event.clientY - posicionActual.y;
    setPosicionInicial({ x: offsetX, y: offsetY });
  };

  const handleDrag = (event) => {
    const newX = event.clientX - posicionInicial.x;
    const newY = event.clientY - posicionInicial.y;
    setPosicionActual({ x: newX, y: newY });
  };

  const handleDragEnd = () => {
    setDragging(false);
    setPosicionInicial({ x: 0, y: 0 });
    setPosicionActual({ x: 0, y: 0 });
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del navegador
    // Lógica adicional para manejar el evento de soltar, si es necesario
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del navegador
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        cursor: 'grab',
        left: posicionActual.x,
        top: posicionActual.y,
        zIndex: 1000,
      }}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {dragging ? (
        <ResumenReporte
          motivo={motivo}
          nombre={nombre}
          fecha={fecha}
          ubicacion={ubicacion}
        />
      ) : (
        <div className="w-full relative bg-amarillo-claro shadow-md rounded-15 p-4 flex items-center justify-center flex-col" style={{height: 500,}}>
          <p className="text-xl font-bold">{numero}</p>
          <p className="text-xl font-bold">{motivo}</p>
          <p className="text-xl font-bold">{nombre}</p>
          <p className="text-xl font-bold">{fecha}</p>
          <p className="text-xl font-bold">{ubicacion}</p>
        </div>
      )}
      
    </div>
  );
};

export default TarjetaArrastrable;
