import React, { useState } from "react";
import Button from "../Button/Button";
import { fas } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton/IconButton";


const MeetingRoomFooter = (props) => {


  const [cameraIcon, setCameraIcon] = useState(fas.faVideo);

  const useCamera = () => {
    //here open or close the camera for half example
    setCameraIcon(fas.faVideoSlash)
  };
  const useMicrophone = () => {
    //here open or close the microphone
  };
  const shareScreen = () => {
    //here share the screen
  };

  const buttonList = [
    { onClick: useCamera, icon: cameraIcon, text: 'מצלמה' },
    { onClick: useMicrophone, icon: fas.faMicrophone, text: 'מיקרופון' },
    { onClick: shareScreen, icon: fas.faUpload, text: 'שיתוף' },
  ]


  return (
    <div className="meeting_room_footer">
      {buttonList.map((item, index) => {
        return <Button onClick={item.onClick}><IconButton key={index} icon={item.icon}></IconButton> {item.text}</Button>
      })}
    </div>
  );
};
export default MeetingRoomFooter;
