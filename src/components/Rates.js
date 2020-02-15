import React, {Component} from 'react';
import {Button, Navbar, Alert, Image, Row, Col, Container} from 'react-bootstrap';

class Rates extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        imagesrc:[
          './logo512.png',
          './logo512.png',
          './logo512.png',
          './logo512.png'
        ]

      };
  }
  render(){
    const imagesrc = this.state.imagesrc;
      return (
        <div>
          <Container fluid>
            <Row>
              <Col><Image className="img-fluid" src={imagesrc[0]} onClick={()=>{ alert('Excellent'); }} rounded /></Col>
              <Col><Image className="img-fluid" src={imagesrc[1]} onClick={()=>{ alert('Good'); }} rounded /> </Col>
              <Col><Image className="img-fluid" src={imagesrc[2]} onClick={()=>{ alert('Normal'); }} rounded /> </Col>
              <Col><Image className="img-fluid" src={imagesrc[3]} onClick={()=>{ alert('Bad'); }} rounded /> </Col>
            </Row>
          </Container>
        </div>

    );
  }
}

export default Rates;
