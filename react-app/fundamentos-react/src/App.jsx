import "./App.css";
import React from "react";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from './components/layout/Card';
import Aleatorio from './components/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
export default () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="Renderização Condicional" color="#FFD700">
                <UsuarioInfo usuario={{ nome: 'Wendel' }}/>
            </Card>
            
            <Card titulo="Desafio Repetição" color="#FF4500">
                <TabelaProduto></TabelaProduto>
            </Card>

            <Card titulo="Repetição" color="#FF6347">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="Componente com filhos" color="#00BFFF">
                <Familia sobrenome="Nogueira">
                    <FamiliaMembro nome="Wendel"/>
                    <FamiliaMembro nome="Julia"/>
                    <FamiliaMembro nome="Elisabeth"/>
                </Familia>
            </Card>

            <Card titulo="Desafio Aleatório" color="#080">
                <Aleatorio min={0} max={10}/>
            </Card>

            <Card titulo="Com Parametro" color="#9932CC">
                <ComParametro titulo="Situação do Aluno" aluno="Wendel" nota={9.8} />
            </Card>

            <Card titulo="Primeiro Componente" color="#FF69B4">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
);