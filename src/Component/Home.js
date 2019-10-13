import React from "react";
import banner from "../image/spacex.jpeg";

function Home() {
  return (
    <div className="home-container spacex-container">
      <img className="home-baner" src={banner} />
    </div>
  );
}

export default Home;
