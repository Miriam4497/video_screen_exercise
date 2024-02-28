import React from "react";
import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";
import theme from "../../themes/theme";

const Button = (props) => {
  const {  buttonType,  backgroundColor, color,  ...other } = props;
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      theme={theme}
      {...other}
    ></StyledButton>
  );
};
Button.propTypes = {
  backgroundColor: PropTypes.oneOf(Object.keys(theme.colors).concat(["none"])),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
};
Button.defaultProps = {
  backgroundColor: "primary",
  color: "white",
  buttonType: "button",
};
export default Button;