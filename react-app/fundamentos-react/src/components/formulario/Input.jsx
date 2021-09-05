import React, { useState } from 'react';
import './Input.css';

export default props => {

    const [ valor, setValor ] = useState('Inicial');

    const quandoMudar = e => {
        setValor(e.target.value);
    }

    return (
        <div className="Input"> 
            <input value={valor} onChange={quandoMudar}/>
        </div>
    );
}