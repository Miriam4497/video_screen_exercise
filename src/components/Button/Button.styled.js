import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors[props.backgroundColor]?.light};
    color: ${(props) => props.theme.colors[props.color]};
    border-radius: 20px;
    border:none;
    height: max-content;
    display: flex;
    padding: 15px;
    margin: 1%;
`;
