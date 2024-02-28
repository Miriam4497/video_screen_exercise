import React from "react";
import { JudgeListStyle, SpeakerListStyle } from "./MeetingRoom.styled";
import Participant from "../Participant/Participant";

const MeetingRoom = (props) => {
  const { judgesList, speakersList } = props;

  return (
    <div className="meeting_room">
      {
        <>
          <JudgeListStyle length={judgesList.length}> {judgesList.map((row, index) => (<Participant key={index} data={row}></Participant>))}</JudgeListStyle>
          <SpeakerListStyle length={speakersList.length}> {speakersList.map((row, index) => (<Participant key={index} data={row}></Participant>))}</SpeakerListStyle>
        </>
      }
    </div>
  );

};
export default MeetingRoom;
