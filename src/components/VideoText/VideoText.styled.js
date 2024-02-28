import styled from "styled-components";

export const TextWrapper = styled.div`
   background-color:rgb(27,52,67);
   opacity:0.5;
   border-radius: 5px;
   display:flex;
   justify-content: space-between;
`;
export const StyledTitle = styled.div`
   color: ${(props) => props.theme.colors[props.color]}
`;
export const StyledText = styled.div`
   color: ${(props) => props.theme.colors[props.color]}
`;
