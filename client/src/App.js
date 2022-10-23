import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './UIComponents/header.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logForm from './UIComponents/form.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Container fluid>
      <Row><Header/></Row>
      <Row className="mainRow">
      <Col><logForm/></Col>
      <Col>Col 2</Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
