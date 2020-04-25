import React, {Component} from 'react';
import {Container,Alert} from 'react-bootstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        footer: "Default Address",
      };
  }
  render(){
       let footer=this.props.address;
      return (
        <div >
          <Container fluid>
            <Alert variant="custom-footer">
                <div className='move'>{footer}</div>
            </Alert>
          </Container>
        </div>
    );
  }
}

export default Footer;
