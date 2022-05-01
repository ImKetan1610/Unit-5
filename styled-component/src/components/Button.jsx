import styled from 'styled-components';

export const Button = styled.button`
    font-family:Times new Romen;
    padding: 10px 10px ;
    margin: 10px;
    border: 0;
    background-color: ${(props) => (props.backColor? props.backColor: "white")};
    color: ${(props) => (props.textColor? props.textColor: "black")};
    border: ${(props) => (props.sima? props.sima: "none")};
    border-radius: 5px;

    `