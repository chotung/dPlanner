import React, { useEffect, useCallback } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { useStoreContext } from '../utils/GlobalState';
import { LOADING, UPDATE_DATES, REMOVE_DATE} from '../utils/actions';
import Date from '../components/Date';
import API from '../utils/API';
const Home = () => {
	const [state, dispatch] = useStoreContext();

  const getAllDates = () => {
    dispatch({ type: LOADING });
    API.getDates()
      .then((results) => {
				dispatch({ type: UPDATE_DATES, dates: results.data });
      })
      .catch((err) => console.log(err));
	};
	
	const removeDate = (id) => {
		API.deleteDate(id)
			.then(() => {
				dispatch({
					type: REMOVE_DATE,
					_id: id,
				});
			})
			.catch((err) => console.log(err));
		getAllDates()
	}
	
	const editDate = (date, edit, setEdit) => {
		setEdit(!edit)
	}

	const updateDates = (e, editedInfo, edit, setEdit) => { 
		e.preventDefault()
		dispatch({ type: LOADING})
		API.editDate(editedInfo._id, editedInfo)
			.then((results) => {
				dispatch({ type: UPDATE_DATES, dates: results.data });
				setEdit(!edit)
			})
			.catch((err) => console.log(err))

	}
	
	const stableDispatchGetDates = useCallback(getAllDates, []);
	// const stableDispatchRemoveDate = useCallback(removeDate, [])

  useEffect(() => {
		stableDispatchGetDates()
  }, [stableDispatchGetDates]);

  const renderDates = () => {
    const { dates } = state;
    return dates.map((date) => {
      return (
        <Col key={date._id} className='date-columns mb-1' >
          <Date date={date} removeDate={removeDate} editDate={editDate} updateDates={updateDates}/>
        </Col>
      );
    });
	};
	

  return (
    <>
      <Jumbotron fluid className="bg-light">
        <Container className="text-center">
          <h1>Your Plans</h1>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row md={4}>{state.dates.length !== 0 ? renderDates() : (<div>{`You Have No Dates` + ' :( ' +  `let's get you some`}</div>) }</Row>
      </Container>
    </>
  );
};

export default Home;
