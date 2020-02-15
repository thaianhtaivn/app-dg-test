import React, {Component} from 'react';
import {Button, Navbar, Alert, Image, Col, Row, Container} from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        profiles:[
          {
          avatar: "./Image/140x180.png",
          name:'Nguyễn Văn A',
          counter: 1
        },
          {
          avatar: "./Image/140x180.png",
          name:'Nguyễn Văn B',
          counter: 2
        }
      ]
    };
  }
  render(){
      const profile = this.state.profiles[0];
      return (
        <Container fluid>
          <Alert variant="custom-header">Vui lòng nhấn nút bình chọn</Alert>
            <Row className='Avatar' >
              <Col sm={3}>
                <Image  src={profile.avatar} rounded/>
              </Col>
              <Col className='TextTitle'>
                <Row>Nhân viên: {profile.name}</Row>
                <Row>Quầy số: {profile.counter}</Row>
              </Col>
            </Row>
        </Container>



    );
  }
}

export default Header;
