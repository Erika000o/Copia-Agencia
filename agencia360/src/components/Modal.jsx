import React from 'react';

const Modal = ({ children, onClose }) => {
    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <span style={styles.close} onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con opacidad
        display: 'flex',
        justifyContent: 'center', // Centrar el contenido del modal
        alignItems: 'center', // Centrar verticalmente
        zIndex: 1000, // Asegúrate de que el modal esté por encima de otros elementos
    },
    modalContent: {
        backgroundColor: '#fff', // Fondo blanco para el contenido del modal
        borderRadius: '8px', // Bordes redondeados
        padding: '15px', // Espaciado interno
        width: '400px',
        height: '600px', // Ancho del modal
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Sombra para dar profundidad
        position: 'relative', // Para posicionar el botón de cerrar
    },
    close: {
        position: 'absolute',
        top: '1px',
        right: '9px',
        cursor: 'pointer',
        fontSize: '40px',
    },
};

export default Modal;
