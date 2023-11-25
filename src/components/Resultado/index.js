import React, { useState } from 'react'
import * as C from "./styles";
import axios from "axios";
import seta from "./img/seta.png";
import cambio from "./img/cambio.png";
import Select, { components } from "react-select";
import usd from "./img/usd.png";
import brl from "./img/brl.png";
import eur from "./img/eur.png";
import cad from "./img/cad.png";
import aud from "./img/aud.png";

const moedas = [
    { value: "USD", label: "Dólar", icon: usd},
    { value: "BRL", label: "Real",icon: brl},
    { value: "EUR", label: "Euro", icon: eur},
    { value: "CAD", label: "Dólar Canadense", icon: cad},
    { value: "AUD", label: "Dólar Australiano", icon: aud}
    
]

const Option = (props) => (
    <components.Option {...props} >
      <C.img src={props.data.icon} alt="logo" />
      {props.data.label}
    </components.Option>
  );

export const Resultado = () => {
    const [selectedMoeda, setSelectedMoeda] = useState(moedas[0]);
    const [selectedMoeda2, setSelectedMoeda2] = useState(moedas[1]);
    const [cotacao1, setCotacao] = useState('');
    const [cotacao2, setCotacao2] = useState('');
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState(0);
    const [resultado2, setResultado2] = useState(0);


    const handleChangeMoeda1 = (value) => {
        setSelectedMoeda(value);
    };
    const handleChangeMoeda2 = (value) => {
        setSelectedMoeda2(value);
    };

    const handleChange = (e) => {
        setValor(e.target.value);
        e.preventDefault();
        axios
        .get(
            `https://economia.awesomeapi.com.br/last/${selectedMoeda.value}-${selectedMoeda2.value}`
        )
        .then((res) => {
            const cotacao = res.data;
            const moeda = `${selectedMoeda.value}${selectedMoeda2.value}`;
            setCotacao(cotacao[`${moeda}`].bid);
            setCotacao2(cotacao[`${moeda}`].ask);
        });
    }

    const SingleValueMoeda1 = ({ children, ...props }) => (
        <components.SingleValueMoeda1 {...props}>
          <C.img src={selectedMoeda.icon} alt="s-logo" />
          {children}
        </components.SingleValueMoeda1>
      );

      const SingleValueMoeda2 = ({ children, ...props }) => (
        <components.SingleValueMoeda2 {...props}>
          <C.img src={selectedMoeda2.icon} alt="s-logo" />
          {children}
        </components.SingleValueMoeda2>
      );
    



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
                    <Select
        value={selectedMoeda}
        options={moedas}
        onChange={handleChangeMoeda1}
        styles={{
            SingleValueMoeda1: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
        }}
        components={{
          Option,
          SingleValueMoeda1
        }}
      />
                </C.SelectMoedas>
                <C.img src={seta} alt="logo" />
                <C.SelectMoedas>
                <Select
        value={selectedMoeda2}
        options={moedas}
        onChange={handleChangeMoeda2}
        styles={{
            SingleValueMoeda2: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
        }}
        components={{
          Option,
          SingleValueMoeda2
        }}
      />
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