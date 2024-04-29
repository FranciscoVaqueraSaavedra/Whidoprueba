/*
import React from 'react';
import TarjetaPromotor from './TarjetaPromotor';
import TarjetaArrastrable from './TarjetaArrastrable';
import ReportesPorAsignarData from './ReportesEnCurso';
import ButtonWithArrow from './ButtonWithArrow';
import PromotoresList from './PromotoresList';

export default function App() {
    return (
    <div className="flex flex-col h-screen relative">
        
        <div className="bg-black h-15 absolute top-0 left-0 flex items-center justify-center rounded-br-15 px-4 py-2">
            <p className="text-2xl italic text-blanco">Administrador</p>
        </div> 

        <div className="bg-amarillo-fuerte h-15 absolute top-0 right-0 flex items-center justify-center rounded-bl-15 px-4 py-2">
            <p className="text-2xl font-regular">Erika Polino</p>
        </div>

        <header className="flex items-center justify-center text-black my-8">
            <h1 className="text-2xl font-bold">Solicitudes de reporte</h1>
        </header>
        
        {/* Contenedores con cuadros flexibles */}
        <div className="flex flex-1 overflow-hidden mt-4">
            
         {/* Contenedor izquierdo */}
            <div className="w-3/4 pl-3 flex flex-col items-center">
                
                <div className="w-full flex flex-row justify-between items-center pr-4">
                    <h2 className="text-xl font-semibold">Pendientes</h2>

                    <div className="w-5/6 flex flex-row items-center justify-between pr-10">
                        <p className="text-sm font-semibold">Asignar reporte(s)</p>
                        <input type="text" placeholder="Ingresa 1 o 1,3,7 o 1-3" className="h-8 w-1/4 bg-gris rounded-15 px-4 py-2" />
                        <p className="text-sm font-semibold">a</p>
                        <input type="text" placeholder="Nombre de un promotor" className="h-8 w-1/2 bg-gris rounded-15 px-4 py-2" />
                        <button className="bg-amarillo-fuerte text-white px-3 py-1 rounded-md">Aceptar</button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 overflow-auto w-full py-4">
                    {/* Itera sobre los datos para crear las tarjetas arrastrables */}
                    {ReportesPorAsignarData.map((reporte, index) => (
                        <TarjetaArrastrable
                            key={index}
                            numero={index + 1}
                            motivo={reporte.review}
                            nombre={reporte.name}
                            fecha={reporte.date}
                            ubicacion={reporte.place}
                        />
                    ))}
                </div>
            </div>

            {/* Contenedor derecho */}
            <div className="w-1/4 p-0 flex flex-col items-center">

                <div className="w-full flex flex-row justify-between items-center pr-3">
                    <h2 className="text-xl font-semibold">Promotores</h2>
                    <input type="text" placeholder="Buscar por nombre" className="h-8 w-1/2 bg-gris rounded-15 px-4 py-2" />
                    <ButtonWithArrow/>
                </div>
                
                <div className="w-full flex flex-col gap-4 overflow-auto py-4">
                    {/* Cuadros flexibles dentro del contenedor derecho */}
                    {PromotoresList.map((promotor, index) => (
                        <TarjetaPromotor key={index} nombre={promotor.nombre} idreportesAsignados={promotor.reportesAsignados}/>
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  );
}
*/