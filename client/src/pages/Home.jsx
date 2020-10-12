import React, { useEffect, useCallback } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { useStoreContext } from '../utils/GlobalState';
import { LOADING, UPDATE_DATES } from '../utils/actions';
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
	const stableDispatch = useCallback(getAllDates, []);
	

  useEffect(() => {
		stableDispatch()
  }, [stableDispatch]);

  const renderDates = () => {
    const { dates } = state;
    return dates.map((date) => {
      return (
        <Col key={date._id}>
          <Date date={date} />
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
        <Row>{state.dates.length !== 0 ? renderDates() : 'Loading...'}</Row>
      </Container>
    </>
  );
};

export default Home;
