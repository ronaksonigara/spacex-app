import React, { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  useEffect(() => {
    fetchDate();
  });
  const fetchDate = async () => {
    const res = await axios.get("https://api.spacexdata.com/v3");
    let data = res.data;
    console.log(data);
  };
  return (
    <div className="spacex-container">
      <div>HomePage</div>
    </div>
  );
}

export default Home;
