import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Beach from '../assets/beach.jpg';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

// import { useStoreContext } from '../utils/GlobalState';
import { useState } from 'react';


const cardStyles = {
	height: '500px'
}

const Date = (props) => {
	const { name, partnerName, activity, location, time, meta } = props.date;
	const { removeDate, editDate, updateDates } = props
	const [edit, setEdit] = useState(false)
	const [card, setCard] = useState({
		name,
		partnerName,
		activity,
		location,
		time,
		meta
	})
	const updateOnChange = (e) => {
		// should update the store
	}
	

  return (
    <Card style={cardStyles}>
      <Card.Img variant="top" src={Beach} alt="some picture" />
      {!edit ? (
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
            <Button
              className="flex-grow-1 mr-1"
              variant="primary"
              onClick={() => editDate(props.date, edit, setEdit)}
            >
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
      ) : (
        <Card.Body>
					<Form onSubmit={updateDates}>
						<Form.Group>
							<Form.Control onChange={updateOnChange} type="text" value={name}/>
						</Form.Group>
						<Button type="submit">Confirm Edits</Button>
						<Button
							onClick={() => editDate(props.date, edit, setEdit)}
						>Exit Without Saving</Button>
					</Form>
				</Card.Body>
      )}
    </Card>
  );
};

export default Date;
