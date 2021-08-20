import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProduto.css';

export default props => {

    const listaDeProdutos = produtos.map((produto, i) => {
            return (
                <tr className={ i%2===0 ? 'Par' : '' } key={produto.id}>

                    <td>{ produto.id }</td>

                    <td>{ produto.nome }</td>

                    <td>R$ { produto.preco.toFixed(2).replace('.', ',') }</td>
                </tr>
            );
        });

    return (
        <div className="TabelaProduto">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDeProdutos}   
                </tbody>
            </table>
        </div>
    );
}