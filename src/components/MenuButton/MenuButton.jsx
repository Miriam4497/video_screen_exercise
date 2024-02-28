import React from "react";
import { SpanStyled, StyledMenuButton, WrapperDivStyled } from "./MenuButton.styled";
import IconButton from "../IconButton/IconButton";
import PropTypes from "prop-types";
import theme from "../../themes/theme";

const MenuButton = (props) => {
  const { text, icon, color, number } = props;
  return (
    <>
      <StyledMenuButton
        icon={icon}
        color={color}
        theme={theme}
      >
        <WrapperDivStyled>
          {number && <SpanStyled backgroundColor={'white'} theme={theme}>{number}</SpanStyled>}
          <IconButton icon={icon}></IconButton>
        </WrapperDivStyled>
        {text}
      </StyledMenuButton></>

  );
};
MenuButton.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(theme.colors).concat(["none"])),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
};
MenuButton.defaultProps = {
  backgroundColor: "primary",
  color: "white",
};
export default MenuButton;