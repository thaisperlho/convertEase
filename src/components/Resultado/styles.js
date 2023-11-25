import styled from "styled-components";


export const ContainerMoedas = styled.div`
  display: flex;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 5%;
gap: 8px;
align-self: stretch;
border: 1px solid var(--tex-cor-4, #434343);
width: 20%;
height: 5vh;
border-radius: 5px;
background-color: var(--tex-cor-1, #ED2172);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;


export const SelectMoedas = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

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

export const imgMoeda = styled.img`
width: 25px;
margin-left: 10%;
margin-right: 10%;
`;

export const img = styled.img`
    width: 30px;
    margin-left: 5%;
    margin-right: 5%;
`;
export const img2 = styled.img`
    width: 80px;
    margin-left: 5%;
    margin-right: 5%;
`;

export const Form = styled.form`
margin-top: 5%;
 display: flex;
 justify-content: center;
 align-items: center;

`;

export const Container = styled.div`
display: flex;
margin-top: 5%;
width: 100%;
justify-content: center;
align-items: center;
  @media (max-width: 750px){

} `;


export const Label = styled.label`
color: var(--tex-cor-1, #ED217C);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: -40%;
` 
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Resultado = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
border: 1px solid var(--tex-cor-4, #434343);
width: 50%;
height: 5vh;
border-radius: 5px;
background-color: #F4D3DD;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`


export const Input = styled.input`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
padding-left: 1%;
align-self: stretch;
border: 1px solid var(--tex-cor-4, #434343);
width: 20%;
height: 5vh;
border-radius: 5px;
background-color: #F4D3DD;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`