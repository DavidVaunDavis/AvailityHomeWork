import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      fName: "",     
      lName: "",
      Addr1: "",
      Addr2: "",
      AddrCity: "",
      AddrState: "",
      AddrZip: "",
      phone: "",
      AddrEmail: ""};


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
  event.preventDefault();  
}

  handleSubmit(event) {
    alert("First Name : " + this.state.fName+"\n" +
    "Last Name : " + this.state.lName+"\n" +
    "Addr Line1 : " + this.state.Addr1+"\n" +
    "Addr Line2 : " + this.state.Addr2+"\n" +
    "City : " + this.state.AddrCity+"\n" +
    "State : " + this.state.AddrState+"\n" +
    "Zip : " + this.state.AddrZip+"\n" +
    "Phone Number: " + this.state.phone+"\n" +
    "Email : " + this.state.AddrEmail+"\n");
    event.preventDefault();    
  }


render() {
  return (
    <div className='App d-flex flex-column align-items-center'>
      <Form style={{ width: '500px' }} onSubmit={this.handleSubmit}>
      <Row className="g-2">
                <Col md>
                <FloatingLabel>
                <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            name ='fName'
                            type='text'
                            value={this.state.fName}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                </FloatingLabel>
                </Col>
                <Col md>
                <FloatingLabel>
                <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            name='lName'
                            type='text'
                            value={this.state.lName}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                </FloatingLabel>
                </Col>
            </Row>    
            <Form.Group>
          <Form.Label>NPI number</Form.Label>
          <Form.Control type='number'placeholder="##########" 
                            name='npiNumber'
                            value={this.state.npiNumber}
                            onChange={this.handleInputChange}
                        />
        </Form.Group>    
        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St"
                            name='Addr1'
                            type='text'
                            value={this.state.Addr1}
                            onChange={this.handleInputChange}
                        />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor"                     
                            name='Addr2'
                            type='text'
                            value={this.state.Addr2}
                            onChange={this.handleInputChange}
                        />
      </Form.Group>
    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control     
                            name='AddrCity'
                            type='text'
                            value={this.state.AddrCity}
                            onChange={this.handleInputChange}
                        />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select  name='AddrState'
                        value={this.state.AddrState}
                        onChange={this.handleInputChange}>
            <option>Choose...</option>
            <option>AL</option>
            <option>AK</option>
            <option>AZ</option>
            <option>AR</option>
            <option>CA</option>
            <option>CO</option>
            <option>ID</option>
            <option>FL</option>
          </Form.Select>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type='number' placeholder="#####"
                        name='AddrZip'
                        value={this.state.AddrZip}
                        onChange={this.handleInputChange}
                        />
        </Form.Group>
      </Row>
      <Form.Group>
          <Form.Label>Telephone Number</Form.Label>
          <Form.Control type='tel' placeholder="###-###-####"
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                        />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email"
                        name='AddrEmail'
                        value={this.state.AddrEmail}
                        onChange={this.handleInputChange}
                        />
       </Form.Group>
        <Button type='submit'value="Submit" >Submit Review</Button>
      </Form>
    </div>

  )
}
}

export default App;
