import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CSSComponents/form.css';
import InputGroup from 'react-bootstrap/InputGroup';

function LogForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Row>
          <Col>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="00:00" />
          </Col>
          <Col>
            <Form.Label>Started</Form.Label>
            <Form.Control type="time" placeholder="00:00" />
          </Col>
          <Col>
            <Form.Label>Finished</Form.Label>
            <Form.Control type="time" placeholder="00:00" />
          </Col>
        </Row>
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Label>Employer</Form.Label>
        <Form.Control type="text" placeholder="" /> 
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Label>Hourly</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>0.00</InputGroup.Text>
      </InputGroup>         
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LogForm;