import React, {Component} from 'react';
import {Container, Button, Navbar, Alert, DropdownButton, Dropdown} from 'react-bootstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        footer: "CHI NHÁNH HỒ CHÍ MINH",
        href:''
      };
  }
  handleChoose(){
    console.log("Chose");
  }
  render(){
       let footer=this.props.address;
       console.log(this.state.href);
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
