import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', Sans-Serif;
        background-color: #F5EAEA;
    } `;

export default Global;