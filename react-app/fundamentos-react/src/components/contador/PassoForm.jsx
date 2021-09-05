import React from 'react';

export default props => {
    return (
        <div>
            <label htmlfor="passoInput">Passo: </label>
            <input id="passoInput" type="number" defaultValue={props.passo} onChange={ e => props.setPasso(+e.target.value)} />
        </div>

    );
}