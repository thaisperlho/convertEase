import React from 'react'
import * as C from "./styles";
import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png"
import github from "./img/github.png"



export const Footer = () => {
    return (
        <C.Box>
            <C.Icons>
                <C.Icon src={github} />
                <C.Icon src={linkedin} />
                <C.Icon src={insta} />
            </C.Icons>
            <C.Creditos>ThaisCarvalho © 2023 ConvertEase. Todos os direitos reservados.</C.Creditos>
        </C.Box>
    );  
};
export default Footer;