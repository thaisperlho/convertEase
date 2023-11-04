import React from 'react'
import { MoedasItens } from '../MoedasItens';
import * as C from "./styles";


export const Moedas = () => {
    return (
        <C.ContainerMoedas> 
            <MoedasItens />
            <MoedasItens />
        </C.ContainerMoedas>
    );  
};
export default Moedas;