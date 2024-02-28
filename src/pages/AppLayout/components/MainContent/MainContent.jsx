import React from "react";
import MeetingTitle from "../../../../components/MeetingTitle/MeetingTitle";
import MeetingRoom from "../../../../components/MeetingRoom/MeetingRoom";
import MeetingRoomFooter from "../../../../components/MeetingRoomFooter/MeetingRoomFooter";

const MainContent = (props) => {
  const {judgesList,speakersList} = props;


  return (
    <div className="main_content_wrapper">
      <MeetingTitle></MeetingTitle>
      <MeetingRoom judgesList={judgesList} speakersList={speakersList}  ></MeetingRoom>
      <MeetingRoomFooter></MeetingRoomFooter>
    </div>
  );
};
export default MainContent;