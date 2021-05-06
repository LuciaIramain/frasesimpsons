import React from 'react';
import './spinner.css'; // ./ es que estamos en el mismo directorio

const Spinner = () => {
    return (
        <div className="sk-chase container">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );
};

export default Spinner;