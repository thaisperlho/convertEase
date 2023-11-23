
import styled from "styled-components";

export const Container = styled.div`
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

export const img = styled.img`
width: 25px;
margin-right: 10px;
`;

