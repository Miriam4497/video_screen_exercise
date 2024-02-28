import styled from "styled-components";

export const StyledVideoTag = styled.div`
   background-color: ${(props) => props.theme.colors[props.backgroundColor]};
   border-radius: 5px;
   height: max-content;
   width: max-content;
   border-radius: 5px;
   margin: 5%;
   padding: 1%;
`;

