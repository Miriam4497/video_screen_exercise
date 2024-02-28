import React from "react";
import MenuButton from "../../../../components/MenuButton/MenuButton";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { StyledLogo, WrapperMenuButton } from "./SideMenu.styled";
import Button from "../../../../components/Button/Button"
import logo from "../../../../assets/logo.jpg"

const SideMenu = (props) => {
  const { length } = props;

  const menuButtonList = [
    { text: 'אנשים', icon: fas.faPerson, number: length },
    { text: 'פרטי דיון', icon: fas.faBank },
    { text: 'מנהל דיון', icon: fas.faPerson },
    { text: 'הגדרות', icon: fas.faKipSign },
  ]

  const handleClickExit = () => {
    //here exit from meeting room
  };

  return (
    <div className="side_menu_wrapper">
      <StyledLogo src={logo}></StyledLogo>
      <WrapperMenuButton>
        {menuButtonList.map((item, index) => { return <MenuButton text={item.text} icon={item.icon} number={item.number}></MenuButton> })}
      </WrapperMenuButton>
      <Button color={"red"} onClick={handleClickExit}>יציאה מהדיון</Button>
    </div>

  );
};

export default SideMenu;