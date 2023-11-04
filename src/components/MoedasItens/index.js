import React, { useState } from "react";
import * as C from "./styles";
import Select, { components } from "react-select";
import usd from "./img/usd.png";
import brl from "./img/brl.png";
import eur from "./img/eur.png";
import cad from "./img/cad.png";
import aud from "./img/aud.png";
import jpy from "./img/jpy.png";


const moedas = [
    { value: "USD", label: "Dólar", icon: usd},
    { value: "BRL", label: "Real",icon: brl},
    { value: "EUR", label: "Euro", icon: eur},
    { value: "CAD", label: "Dólar Canadense", icon: cad},
    { value: "AUD", label: "Dólar Australiano", icon: aud},
    { value: "JPY", label: "Iene Japonês", icon: jpy},
    
]
const Option = (props) => (
    <components.Option {...props} >
      <C.img src={props.data.icon} alt="logo"  />
      {props.data.label}
    </components.Option>
  );

export const MoedasItens = () => {
    const [selectedMoeda, setSelectedMoeda] = useState(moedas[0]);

    const handleChange = (value) => {
        setSelectedMoeda(value);
    };
  
    const SingleValue = ({ children, ...props }) => (
      <components.SingleValue {...props}>
        <C.img src={selectedMoeda.icon} alt="s-logo" />
        {children}
      </components.SingleValue>
    );

    return (
        <C.Container> 
            <Select
        value={selectedMoeda}
        options={moedas}
        onChange={handleChange}
        styles={{
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          })
        }}
        components={{
          Option,
          SingleValue
        }}
      />
        </C.Container>);
};
export default MoedasItens;