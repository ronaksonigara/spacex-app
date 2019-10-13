import React, { useState, useEffect } from "react";
import axios from "axios";

function Payloads({ match }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const res = await axios.get(
        `https://api.spacexdata.com/v3/payloads/${match.params.id}`
      );
      let data = res.data;
      setItems(data);
    };
    fetchDate();
  }, [match]);
  // const fetchDate = async () => {
  //   const res = await axios.get(
  //     `https://api.spacexdata.com/v3/payloads/${match.params.id}`
  //   );
  //   let data = res.data;
  //   setItems(data);
  // };
  return (
    <div className="spacex-container payload-container">
      <h1 className="payload-primary-title">
        {items.payload_id + "-" + items.payload_type}
      </h1>
      <h2 className="payload-primary-subtitle">Nation - {items.nationality}</h2>
      <p className="payload-primary-label">
        Manufacturer - {items.manufacturer}
      </p>
      {items.reused && <p>{items.payload_id} was reused</p>}
      {items.payload_mass_kg && items.payload_mass_lbs && (
        <p>
          Weight - {items.payload_mass_kg} Kg {items.payload_mass_lbs} LBS
        </p>
      )}
      <p>Orbit - {items.orbit}</p>
    </div>
  );
}

export default Payloads;
