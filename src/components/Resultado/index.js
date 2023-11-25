import React, { useState } from 'react'
import * as C from "./styles";
import axios from "axios";
import seta from "./img/seta.png";
import cambio from "./img/cambio.png";
import { MoedasItens } from "../MoedasItens";





export const Resultado = () => {

    const [cotacao1, setCotacao] = useState('');
    const [cotacao2, setCotacao2] = useState('');
    const [valor, setValor] = useState('');
    const [moedaA, setSelectedMoeda] = useState('USD');
    const [moedaB, setSelectedMoeda2] = useState('BRL');
    const [resultado, setResultado] = useState(0);
    const [resultado2, setResultado2] = useState(0);



    const handleChange = (e) => {
        setValor(e.target.value);
        e.preventDefault();
        axios
        .get(
            `https://economia.awesomeapi.com.br/last/${moedaA}-${moedaB}`
        )
        .then((res) => {
            const cotacao = res.data;
            const moeda = `${moedaA}${moedaB}`;
            setCotacao(cotacao[`${moeda}`].bid);
            setCotacao2(cotacao[`${moeda}`].ask);
        });
    }



    const handleClick = async (e) => { 
        e.preventDefault();
        const resultado = (valor * cotacao1).toFixed(2);
        const resultado2 = (valor * cotacao2).toFixed(2);
        setResultado(resultado);
        setResultado2(resultado2);
    }
    

    return (
        <>
            <C.ContainerMoedas>
                <C.SelectMoedas>
                    <MoedasItens />
                </C.SelectMoedas>
                <C.img src={seta} alt="logo" />
                <C.SelectMoedas>
                    <MoedasItens />
                </C.SelectMoedas>
            </C.ContainerMoedas>
            <C.Form>
                <C.Input onChange={handleChange} type="number" placeholder=" 0,00" />
                <C.Button onClick={handleClick}>Converter</C.Button>
            </C.Form>
            <C.Container>
                <C.Div>
                    <C.Label>Compra</C.Label>
                    <C.Resultado>{resultado}</C.Resultado>
                </C.Div>
                <C.img2 src={cambio} alt="logo" />
                <C.Div>
                    <C.Label>Venda</C.Label>
                    <C.Resultado>{resultado2}</C.Resultado>
                </C.Div>
            </C.Container>
        </>
    );
};

export default Resultado;