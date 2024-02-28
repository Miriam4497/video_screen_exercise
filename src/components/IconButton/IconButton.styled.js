import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledIcondButton = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors[props.color]};
  padding:3%;
`;
