import React, { useState } from 'react';
import ReportesEnCurso from './ReportesEnCurso';

const TarjetaEnvioReporte = ({ index }) => {
    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);

    const reporte = ReportesEnCurso[index];

    // Verificar si reporte es undefined
    if (!reporte) {
        return null; // O podrías mostrar un mensaje de error
    }

    const { name, img, imgBack, date, place, review, reviewBack } = reporte;

    const acceptCard = () => {
        setAccepted(true);
    }

    const rejectCard = () => {
        setRejected(true);
    }

    return (
        <div className='card'>
            <div className="bg-white h-[450px] text-black rounded-xl relative">
                <div className="absolute inset-0 flex items-start justify-start p-4">
                    <div style={{ marginRight: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                            <img src={img} alt="" className="h-20 w-20 rounded-full" />
                        </div>
                        <p style={{ textAlign: 'center' }}>{name}</p>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ textAlign: 'center', marginTop: '8px' }}>{date}</p>
                        <p style={{ textAlign: 'center', marginTop: '8px' }}>{review}</p>
                        <p style={{ textAlign: 'center', marginTop: '8px' }}>{place}</p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-yellow-300 flex justify-center items-center">
                    <img src={imgBack} alt="" className="h-32 w-32 rounded-md mr-2" />
                    <p>{reviewBack}</p>
                </div>
            </div>
        </div>
    );
       
}

export default TarjetaEnvioReporte;
