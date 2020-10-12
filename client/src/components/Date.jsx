import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Beach from '../assets/beach.jpg';
import Row from 'react-bootstrap/esm/Row';

const Date = (props) => {
	const { name, partnerName, activity, location, time, meta } = props.date;
	console.log(props.date)
  return (
    <Card>
      <Card.Img variant="top" src={Beach} alt="some picture" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{partnerName}</Card.Text>
        <ul>
          <li>{time}</li>
          <li>{activity}</li>
          <li>{location}</li>
          <li>{meta.comments}</li>
        </ul>
        <Row>
          <Button className="flex-grow-1 mr-1" variant="primary">
            Go somewhere
          </Button>
          <Button className="flex-grow-1 ml-1" variant="danger">
            X
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Date;
