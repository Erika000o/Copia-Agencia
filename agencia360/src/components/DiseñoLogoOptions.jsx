import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Importar toast para notificaciones

const DiseñoLogoOptions = ({ onBack, onContinue }) => { // Asegúrate de que 'servicios' se pase como prop
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
        <div style={styles.diseñoLogoOptions}>
            <h2 style={styles.title}>Selecciona el Diseño de Logo</h2>
            <div style={styles.selectContainer}>
                <select style={styles.select} value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    <option value="">Seleccione un tamaño</option>
                    <option value="Logo negocios pequeños">Diseño de logos para negocio pequeño legalmente constituido - $200,000</option>
                    <option value="Logo para Emprendedores">Diseño de logo para emprendedores - $450,000</option>
                    <option value="Logo para Empresas">Diseño de logo para empresas con manual de marca - $500,000</option>
                </select>
            </div>

            <textarea
                placeholder="Nombre de establecimiento o marca y una breve descripción que se tomará como referencia para realizar la propuesta de diseño."
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
    diseñoLogoOptions: {
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
        marginBottom: '5px',
        color: '#b71c1c',
    },
    selectContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '20px 0',
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
        marginTop: '10px',
        gap: '15px',
    },
};

export default DiseñoLogoOptions;
