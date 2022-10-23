import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './UIComponents/header.js'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Container fluid>
      <Row><Header/></Row>
    </Container>
    </div>
  );
}

export default App;
