import React from "react";
import { StyledIcondButton } from "./IconButton.styled";
import PropTypes from "prop-types";
import theme from "../../themes/theme";


const IconButton = (props) => {
  const { icon, color } = props;
  return (
    <StyledIcondButton
      icon={icon}
      color={color}
      theme={theme}
    ></StyledIcondButton>
  );
};
IconButton.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.colors).concat(["none"])),
};

IconButton.defaultProps = {
  color: "white",
};
export default IconButton;