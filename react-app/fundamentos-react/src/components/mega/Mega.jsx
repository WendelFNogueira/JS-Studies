import React, { useState } from 'react';
import './Mega.css';

export default props => {
    function numberGenerate(min, max, array) {
        const random =  parseInt(Math.random() * (max+1 - min)) + min;
    
        return array.includes(random) ? numberGenerate(min, max, array) : random;
    }
    
    function generatedNumbers(qtde) {
        const numbers = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const newNumber = numberGenerate(1, 60, nums)
    
            return [ ...nums, newNumber ];
        }, [])
        .sort( (n1, n2) => n1-n2);
    
        return numbers; 
    }

    const [ qtde, setQtde ] = useState(props.qtde || 6);
    const numerosIniciais = Array(qtde).fill(0);
    const [ numeros, setNumeros ] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{ numeros.join(" ") }</h3>
            <div>
                <label>Qtde de Números</label>
                <input min="6" max="15" type="number" value={qtde} onChange={ e => setQtde( +e.target.value ) }/>
            </div>
            <button onClick={ _ => setNumeros(generatedNumbers(qtde)) }>Gerar números da Mega</button>
        </div>
    );
}