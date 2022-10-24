import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './UIComponents/header.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogForm from './UIComponents/form.js';
import Cal from "./UIComponents/calendar.js";
import HTable from "./UIComponents/htable.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div className="App">
    <Container fluid>
      <Row><Header/></Row>
      <Row className="mainRow">
      <Col><LogForm/></Col>
        <Col><Cal/></Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
        <HTable/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
