import React from 'react'
import * as C from "./styles";
import globo from "./img/cambio.png";



export const Resultado = () => {
    return (
        <C.Container>
            <C.Div>
                <C.Label>Comercial</C.Label>
                <C.Input />
            </C.Div>
            <C.img src={globo} />
            <C.Div>
                <C.Label>Turismo</C.Label>
                <C.Input />
                </C.Div>
        </C.Container>
    );
};
export default Resultado;