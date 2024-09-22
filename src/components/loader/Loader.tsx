import React from 'react';
import './Loader.css';

const Spinner: React.FC = () => {
    return (
        <div className="spinner">
            <div className="loader"></div>
        </div>
    );
};

export default Spinner;