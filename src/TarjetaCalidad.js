import React, { useState } from 'react';
import ReportesEnCurso from './ReportesEnCurso';
import axios from 'axios';

const TarjetaCalidad = ({ index }) => {
    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null); // Estado para mantener el índice del botón seleccionado
    const [gradereport, setGradeReport] = useState(null); // Estado para almacenar el valor del botón seleccionado
    const [comment, setComment] = useState(''); // Estado para almacenar el comentario del usuario
    const [photoAttached, setPhotoAttached] = useState(false); // Estado para almacenar si se ha adjuntado una foto
    const [showAttachedMessage, setShowAttachedMessage] = useState(false); // Estado para controlar la visibilidad del mensaje de adjunto
    const [photoUrl, setPhotoUrl] = useState(null); // Estado para almacenar la URL de la foto adjunta

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

    // Manejar clic en el botón
    const handleButtonClick = (value) => {
        // Establecer el nuevo botón seleccionado
        setSelectedButton(value);
        // Actualizar gradereport con el valor del botón seleccionado
        setGradeReport(value);
    }

    // Manejar cambio en el campo de texto de comentario
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    // Manejar cambio en la selección de archivo de imagen
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:3001/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data);
            setPhotoUrl(response.data.url);
            setPhotoAttached(true); // Establecer que se ha adjuntado una foto
            setShowAttachedMessage(true); // Mostrar el mensaje de adjunto correctamente
        }).catch(error => {
            console.error('Error uploading file: ', error);
        });
    }

    // Generar botones circulares
    const buttons = [];
    for (let i = 1; i <= 10; i++) {
        // Determinar el color del botón basado en si está seleccionado o no
        const buttonColor = selectedButton === i ? "bg-yellow-400" : "bg-yellow-200";
        buttons.push(
            <button key={i} className={`w-8 h-8 rounded-full ${buttonColor} mr-2`} onClick={() => handleButtonClick(i)}>{i}</button>
        );
    }

    // Determinar el color del botón de adjuntar foto
    const attachPhotoButtonColor = photoAttached ? "bg-green-500" : "bg-yellow-500";

    return (
        <div className='card'>
        <div className="bg-white h-[450px] text-black rounded-xl relative">
            <div className="absolute top-0 right-0 mt-4 mr-4 text-sm text-gray-500">{date}</div>
            <div className="absolute top-1/4 left-0 transform -translate-y-1/2 text-sm text-black-500 flex items-center">
                <strong>Calidad del reporte</strong>
                <div className="ml-2">{gradereport}</div>
            </div>
            <div className="absolute top-1/3 left-0 right-0 text-center">{buttons}</div>
            <div className="absolute bottom-20 left-0 right-0 text-center">
                <div>Comentario (opcional):</div>
                <textarea className="w-full h-20 bg-gray-300 p-2" value={comment} onChange={handleCommentChange}></textarea>
            </div>
            <div className="absolute bottom-12 left-0 flex justify-center items-center w-full">
                <input type="file" style={{ display: 'none' }} onChange={handleFileChange} id="fileInput" />
                <label htmlFor="fileInput" className={`px-4 py-2 rounded-md cursor-pointer ${attachPhotoButtonColor}`}>Adjuntar foto</label>
                {showAttachedMessage && <div className="text-green-500">Se adjuntó correctamente</div>}
                {/* Botón "Enviar" */}
                <button className="px-4 py-2 rounded-md bg-black text-yellow-500 ml-4">Enviar</button>
            </div>
            {photoUrl && (
                <div className="absolute bottom-4 left-0 right-0 text-center">
                    <img src={photoUrl} alt="Uploaded" className="max-w-full h-auto" />
                </div>
            )}
            {/* Otro contenido de la tarjeta */}
        </div>
    </div>
    );
}

export default TarjetaCalidad;
