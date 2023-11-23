import React from 'react'
import { MoedasItens } from '../MoedasItens';
import * as C from "./styles";
import seta from "./img/seta.png";

//Pegar valor do select que sta no MoedasItens
console.log(MoedasItens.inputValue);


export const Moedas = () => {
    return (
        <C.ContainerMoedas> 
            <MoedasItens />
            <C.img src={seta} />
            <MoedasItens />
        </C.ContainerMoedas>
    );  
};
export default Moedas;