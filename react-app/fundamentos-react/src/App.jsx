import React from "react";
import Card from './components/layout/Card';
import Aleatorio from './components/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
export default () => (
    <>
        <Card/>
        <Aleatorio min={2} max={12}/>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Wendel" nota={9.8} />
    </>
);