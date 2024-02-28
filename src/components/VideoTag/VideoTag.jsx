import React, { useState } from "react";
import { StyledVideoTag } from "./VideoTag.styled";
import PropTypes from "prop-types";
import theme from "../../themes/theme";

const VideoTag = (props) => {
  const { data, backgroundColor } = props;
  return (
    <StyledVideoTag backgroundColor={backgroundColor} theme={theme}>{` ${data.isMe ? 'אני -' : ''} ${data.tag}`}
    </StyledVideoTag>
  );
};
VideoTag.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(Object.keys(theme.colors).concat(["none"])),
  backgroundColor: PropTypes.oneOf(Object.keys(theme.colors).concat(["none"])),
  type: PropTypes.oneOf(["standard", "wide", "underline"]),
  margin: PropTypes.string,
  buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
};
VideoTag.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "black",
  backgroundColor: "white",
  type: "standard",
  buttonType: "button",
};
export default VideoTag;
