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
    } 

    .css-13cymwt-control{
        background-color: #F4D3DD !important; 
        width: 100% !important;

    }
    .css-1nmdiq5-menu{
        background-color: #F4D3DD !important; 
    }
    .css-b62m3t-container{
        width: 200px !important;
        border-radius: 10px !important;
        background-color: #F4D3DD !important; 
    }
    .css-13cymwt-control:hover{
        background-color: pink !important; 
    }
    `
    

export default Global;