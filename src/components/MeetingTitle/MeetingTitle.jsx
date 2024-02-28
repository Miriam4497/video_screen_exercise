import React from "react";
import { IconsTitleStyled, MeetingTitleStyled, WrapperDiv } from "./MeetingTitle.styled";
import IconButton from "../IconButton/IconButton";
import { fas } from "@fortawesome/free-solid-svg-icons";

const MeetingTitle = (props) => {

  const titleMeetingRoom = "משרד המשפטים, ועדת ערר לענייני קורונה – השתתפות בהוצאות קבועות"
  const subTitleMeetingRoom = "תיק מספר 64949-02-22"

  const iconList = [
    { icon: fas.faHandshakeAlt },
    { icon: fas.faD },
    { icon: fas.faStapler }
  ]
  
  return (
    <div className="meeting_title">
      <WrapperDiv>
        <MeetingTitleStyled>{titleMeetingRoom}</MeetingTitleStyled>
        <MeetingTitleStyled>{subTitleMeetingRoom}</MeetingTitleStyled>
      </WrapperDiv>
      <IconsTitleStyled>
        {iconList.map((item, index) => { return <IconButton key={index} icon={item.icon}></IconButton> })}
      </IconsTitleStyled>
    </div>
  );
};
export default MeetingTitle;
