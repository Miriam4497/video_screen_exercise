import React from "react";
import { ParticipantWrapper } from "./Participant.styled";
import VideoText from "../VideoText/VideoText";
import VideoTag from "../VideoTag/VideoTag";
// import providerContact from "../../assets/provider_contact.jpg"

const Participant = (props) => {
  const { data } = props;

  return (
    <ParticipantWrapper type={data.type} url={data.url}>
      <VideoTag backgroundColor={data.isMe ? 'blue' : 'white'} data={data}></VideoTag>
      <VideoText data={data}></VideoText>
    </ParticipantWrapper>
  );
};
export default Participant;
