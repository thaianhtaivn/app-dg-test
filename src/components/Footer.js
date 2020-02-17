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
            <Alert variant="custom-footer">{footer}</Alert>
            <DropdownButton id="dropdown-basic-button" title="1">
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
            </DropdownButton>
          </Container>
        </div>
    );
  }
}

export default Footer;
