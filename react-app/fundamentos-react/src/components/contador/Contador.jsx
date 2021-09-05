import React from 'react';
import "./Contador.css";
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';
class Contador extends React.Component {

    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passoInicial || 1
    }

    increment = _ => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }
    
    decrement = _ => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = novoPasso => {
        this.setState({
            passo: novoPasso
        });
    }
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes increment={this.increment} decrement={this.decrement} />
            </div>
        );
    }
}

export default Contador;