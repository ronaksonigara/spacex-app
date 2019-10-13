import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonGroup, Button } from "react-bootstrap";
import LaunchpadCard from "./LaunchpadCard";

function Launchpads() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState([]);
  const [showFilter, setShowFilter] = useState("all");
  useEffect(() => {
    fetchDate();
  }, []);
  const fetchDate = async () => {
    const res = await axios.get("https://api.spacexdata.com/v3/launchpads");
    let data = res.data;
    setItems(data);
    let filterArray = [];
    data.map(item => {
      if (filterArray.indexOf(item.status) === -1) {
        filterArray.push(item.status);
      }
    });
    setFilters(filterArray);
  };

  const cardList = dataList => {
    return dataList.map((item, index) => {
      return showFilter === "all" ? (
        <LaunchpadCard key={item.id} data={item} />
      ) : (
        showFilter === item.status && (
          <LaunchpadCard key={item.id} data={item} />
        )
      );
    });
  };

  const handlefilter = e => {
    setShowFilter(e.target.getAttribute("data-filter"));
  };

  const filterList = list => {
    return list.map((item, index) => {
      return (
        <React.Fragment key={item}>
          {index === 0 && (
            <Button
              className="flter-button"
              data-filter="all"
              onClick={handlefilter}
            >
              All
            </Button>
          )}
          <Button
            className="flter-button"
            data-filter={item}
            onClick={handlefilter}
          >
            {item}
          </Button>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <ButtonGroup className="filter-wrapper">
        {filterList(filters)}
      </ButtonGroup>

      <div className=" launchpad-container spacex-cardwrapper">
        {cardList(items)}
      </div>
    </>
  );
}

export default Launchpads;
