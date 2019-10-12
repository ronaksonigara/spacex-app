import React from "react";
import { Link } from "react-router-dom";

import { Card, ListGroup } from "react-bootstrap";

function LaunchpadCard(props) {
  const { data } = props;

  const missionPayLoads = payloadsData => {
    return payloadsData.map(item => {
      return (
        <ListGroup.Item key={item}>
          <Link className="card-link" to={`/payloads/${item}`}>
            {item}
          </Link>
        </ListGroup.Item>
      );
    });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{data.mission_name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <ListGroup variant="flush">
          {missionPayLoads(data.payload_ids)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default LaunchpadCard;
