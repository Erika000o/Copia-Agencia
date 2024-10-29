import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Importar toast para notificaciones

const DiseñoImpresionOptions = ({ onBack, onContinue }) => {
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
        <div style={styles.diseñoImpresionOptions}>
            <h2 style={styles.title}>Describe el Diseño de Impresion que desea</h2>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} style={styles.select}>
                <option value="">Seleccione un tamaño</option>
                <option value="Diseño Impresion">Impresiones de 1 a 5 unidades $15.000  a partir de 6 diseños 10.000. - $15,000</option>
            </select>
            <textarea
                placeholder="información de contacto y tipo de producto o servicio - tipo de diseño, medidas, formato y información adicional que considere de importancia."
                value={customerInfo}
                onChange={(e) => setCustomerInfo(e.target.value)}
                maxLength={255} // Limita a 255 caracteres
                style={styles.textarea}
            />
            <div>{customerInfo.length} / 255 caracteres</div>

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
    diseñoImpresionOptions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        margin: '20px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '25px',
        color: '#b71c1c',
    },
    select: {
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    textarea: {
        height: '150px',
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
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
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        gap: '15px',
    },
};

export default DiseñoImpresionOptions;
