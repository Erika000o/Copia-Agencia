import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Asegúrate de que la ruta sea correcta

const StickersOptions = ({ onBack, onContinue }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [customerInfo, setCustomerInfo] = useState('');
    const [file, setFile] = useState(null);
    const [palabraClave, setPalabraClave] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleContinue = () => {
        if (!palabraClave) {
            toast.error('Por favor, ingresa su palabra clave.'); // Notificación de error
            return;
        }
        // Lógica para continuar con la compra
        onContinue({ selectedSize, customerInfo, file, palabraClave });
    };

    return (
        <div style={styles.stickersOptions}>
            <h2 style={styles.title}>Selecciona el tamaño del sticker</h2>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} style={styles.select}>
                <option value="">Seleccione un tamaño</option>
                <option value="Sticker pequeño">Sticker de 5 cm - Los stickers se manejan por pliegos - $5,000</option>
                <option value="Sticker grande">Sticker de 10 cm - Los stickers se manejan por pliegos - $10,000</option>
            </select>

            <textarea
                placeholder="Nombre de establecimiento, información de contacto, servicios."
                value={customerInfo}
                onChange={(e) => setCustomerInfo(e.target.value)}
                maxLength={255} // Limita a 255 caracteres
                style={styles.textarea}
            />
            <div>
                {customerInfo.length} / 255 caracteres
            </div>

            <input type="file" onChange={handleFileChange} style={styles.inputFile} />
            <div>
                <input
                    type="text"
                    placeholder="Ingrese su palabra clave"
                    value={palabraClave}
                    onChange={(e) => setPalabraClave(e.target.value)}
                    title="Ingrese su palabra clave para verificar si está registrado en el sistema" // Tooltip agregado
                    style={styles.inputText}
                />
            </div>

            <div style={styles.buttonGroup}>
                <button>No tengo palabra clave, crear una</button>
                <button onClick={handleContinue}>Continuar con la compra</button>
            </div>
        </div>
    );
};

const styles = {
    stickersOptions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9', // Color de fondo
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        margin: '20px',
    },
    title: {
        fontSize: '24px', // Tamaño de fuente del título
        marginBottom: '15px', // Espacio debajo del título
        color: '#b71c1c', // Color del texto
    },
    select: {
        width: '100%', // Ancho completo
        padding: '10px', // Espaciado interno
        marginBottom: '15px', // Espacio debajo de los elementos
        border: '1px solid #ccc', // Borde
        borderRadius: '4px', // Bordes redondeados
        fontSize: '16px', // Tamaño de fuente
    },
    textarea: {
        height: '100px',
        width: '100%', // Ancho completo
        padding: '10px', // Espaciado interno
        marginBottom: '15px', // Espacio debajo de los elementos
        border: '1px solid #ccc', // Borde
        borderRadius: '4px', // Bordes redondeados
        fontSize: '16px', // Tamaño de fuente
    },
    inputFile: {
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
    },
    inputText: {
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    buttonGroup: {
        display: 'flex', // Usar flexbox para alinear botones
        justifyContent: 'space-between', // Espacio entre botones
        marginTop: '20px', // Espacio arriba de los botones
        gap: '15px',
    },
    button: {
        padding: '8px 12px', // Ajustar el espaciado interno
        border: 'none', // Sin borde
        borderRadius: '5px', // Bordes redondeados
        cursor: 'pointer', // Cambiar cursor al pasar el mouse
        transition: 'background-color 0.3s', // Transición suave para el hover
        fontSize: '0.9em', // Tamaño de fuente más pequeño
        maxWidth: '150px', // Ancho máximo para los botones
        flex: 1, // Permitir que los botones se expandan igualmente
        margin: '0 5px', // Espacio entre los botones
        
    },
};

export default StickersOptions;
