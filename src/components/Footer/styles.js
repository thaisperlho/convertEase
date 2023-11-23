import styled from "styled-components";

export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
  padding: 50px 60px;
  background: #F677AA;
  position: absolute;
  bottom: 0;
  width: 100%;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Creditos = styled.h1`
color: var(--tex-cor-2, #F5EAEA);
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
`

export const Icon = styled.img`
width: 38px;
height: 38px;
margin: 5%;
flex-shrink: 0;
`

export const Icons = styled.div`
display: flex;
position: absolute;
left: 0;
`