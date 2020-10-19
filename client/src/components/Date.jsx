import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Beach from '../assets/beach.jpg';
import Row from 'react-bootstrap/Row';
import { useStoreContext } from '../utils/GlobalState';


const cardStyles = {
	height: '500px'
}
const subText = {
	marginBottom: '0'
}

const Date = (props) => {
	
	const { name, partnerName, activity, location, time, meta } = props.date;
	const { removeDate, update } = props
	
  return (
    <Card style={cardStyles}>
      <Card.Img variant="top" src={Beach} alt="some picture" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <div className="flex-grow-1">
          <p className="mb-0">{partnerName}</p>
          <p className="mb-0">{time}</p>
        </div>
        <ul className="flex-grow-1">
          <li>{activity}</li>
          <li>{location}</li>
          <li>{meta.comments}</li>
        </ul>
        <Row>
          <Button className="flex-grow-1 mr-1" variant="primary" onClick={() => update(props.date)}>
            Go Somewhere Else
          </Button>
          <Button
            onClick={() => removeDate(props.date._id)}
            className="flex-grow-1 ml-1"
            variant="danger"
          >
            X
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Date;
