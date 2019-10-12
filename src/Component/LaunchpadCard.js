import React from "react";

import Card from "react-bootstrap/Card";

function LaunchpadCard(props) {
  const { data } = props;
  const status = {
    active: "success",
    "under construction": "primary",
    retired: "secondary"
  };
  return (
    <Card bg={status[data.status]} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {data.location.name + "," + data.location.region}
        </Card.Title>
        <Card.Text>{data.details}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LaunchpadCard;
