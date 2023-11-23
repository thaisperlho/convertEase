
import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 5%;
width: 100%;
justify-content: space-evenly;
align-items: center;

  @media (max-width: 750px){
    width: 20%;
    p{
      font-size: 12px;
    }
    select{
      font-size: 20px;
} svg{
      display: none;
    }
} `;
export const Label = styled.label`
color: var(--tex-cor-1, #ED217C);
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
` 
export const Div = styled.div`
width: 20%;
`
export const Input = styled.input`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 2%;
border: 1px solid var(--tex-cor-4, #434343);
width: 100%;
height: 5vh;
border-radius: 5px;
background-color: #F4D3DD;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const img = styled.img`
width: 70px;
`;

