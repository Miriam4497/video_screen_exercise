import styled from "styled-components";

export const StyledMenuButton = styled.button`
    background-color: inherit;
    color: ${(props) => props.theme.colors[props.color]};
    height: max-content;
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:none;
    margin: 30% 0 1% 0;
`;

export const WrapperDivStyled = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SpanStyled = styled.span`
    background-color: ${(props) => props.theme.colors[props.backgroundColor]};
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    color: #6e6e6e;
    display: inline-block;
    margin-right: 5px;
    text-align: center;
    width: 50%;
    height: 50%;
    min-width: 15px;
    min-height: 15px;
    `;