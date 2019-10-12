import React, { useState, useEffect } from "react";
import axios from "axios";

import LaunchpadCard from "./LaunchpadCard";

function Launchpads() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchDate();
  }, []);
  const fetchDate = async () => {
    const res = await axios.get("https://api.spacexdata.com/v3/launchpads");
    let data = res.data;
    setItems(data);
  };

  const cardList = dataList => {
    return dataList.map((item, index) => {
      return <LaunchpadCard key={item.id} data={item} />;
    });
  };


  return (
    <div className="spacex-container spacex-cardwrapper">
      {cardList(items)}
    </div>
  );
}

export default Launchpads;
