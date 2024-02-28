import React from "react";
import { StyledTitle, StyledText, TextWrapper } from "./VideoText.styled";
import PropTypes from "prop-types";
import theme from "../../themes/theme";
import IconButton from "../IconButton/IconButton";
import { fas } from "@fortawesome/free-solid-svg-icons";

const VideoText = (props) => {
  const { data } = props;
  return (
    <TextWrapper>
      <div>
        <StyledTitle color={"blue"} theme={theme}>{data.title}</StyledTitle>
        <StyledText color={"white"} theme={theme}>{`${data.nick} ${data.name}`}</StyledText>
      </div>
      <IconButton icon={data.isTalking ? fas.faMicrophone : fas.faMicrophoneSlash} color={"white"}></IconButton>
    </TextWrapper>
  );
};
VideoText.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(Object.keys(theme.colors).concat(["none"])),
  type: PropTypes.oneOf(["standard", "wide", "underline"]),
  margin: PropTypes.string,
  buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
};
VideoText.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "blue",
  type: "standard",
  buttonType: "button",
};
export default VideoText;
