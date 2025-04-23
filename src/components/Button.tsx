import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<ButtonInterface>`
    background-color: #007bff;
    color: #ffff;
    padding:
        ${props => props.size}rem
        ${props => props.size * 5}rem;
    font-size: ${props => props.size + 0.4}rem;
    font-weight: bold;
    border: none;
    border-radius: 50px;

`;

interface ButtonInterface {
    label?: string;
    size: number;
}

const Button: React.Fc<ButtonInterface> = ({ label,size }) => {
    return <StyledButton size={size}>{label || "Click"}</StyledButton>
}

export default Button;
