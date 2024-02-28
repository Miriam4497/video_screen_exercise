import React, { useEffect, useState } from "react";
import SideMenu from "./SideMenu/SideMenu";
import MainContent from "./MainContent";
import { getData } from "../../../data/ApiCalls";

const AppLayout = () => {

  const [judgesList, setJudgesList] = useState([]);
  const [speakersList, setSpeakersList] = useState([]);
  const [length, setLength] = useState();

  const getAll = async () => {

    const response1 = await getData(1);
    setJudgesList(response1);

    const response2 = await getData(2);
    setSpeakersList(response2);
    setLength(response1.length+response2.length)
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="app_layout_wrapper">
      <SideMenu length={length} />
      <MainContent judgesList={judgesList} speakersList={speakersList} />
    </div>
  );
};

export default AppLayout;