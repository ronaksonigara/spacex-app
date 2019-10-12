import React, { useState, useEffect } from "react";
import axios from "axios";

import MissionCard from "./MissionCard";

function Missions() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchDate();
  }, []);
  const fetchDate = async () => {
    const res = await axios.get("https://api.spacexdata.com/v3/missions");
    let data = res.data;
    setItems(data);
  };

  const cardList = dataList => {
    return dataList.map((item, index) => {
      return <MissionCard key={item.mission_id} data={item} />;
    });
  };
  return (
    <div className="spacex-container spacex-cardwrapper">{cardList(items)}</div>
  );
}

export default Missions;
