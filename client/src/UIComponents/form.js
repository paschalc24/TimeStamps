import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CSSComponents/form.css';
import InputGroup from 'react-bootstrap/InputGroup';

function LogForm() {
  return (
    <Form id="eform">
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
        <Row>
          <Col>
            <Form.Label>Employer</Form.Label>
            <Form.Control type="text" placeholder="" /> 
          </Col>
          <Col>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Col>
        </Row>
        <Row>
        <Col>
          <Form.Label id="hourlylabel">Hourly</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup> 
        </Col>
        <Col id="submitbuttoncol">
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Col>
        </Row>        
      </Form.Group>
    </Form>
  );
}

export default LogForm;