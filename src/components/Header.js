import React, {Component} from 'react';
import {Button, Navbar, Alert, Image, Col, Row, Container, Modal, Form} from 'react-bootstrap';

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
      ],
      showSetting: false,
      user: '',
      password:''
    };
    this.handleSetting=this.handleSetting.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleChangeUser=this.handleChangeUser.bind(this);
    this.handleChangePassword=this.handleChangePassword.bind(this);
  }
  handleSetting(){
    this.setState({showSetting: !this.state.showSetting})
  }
  handleLogin(){
    if((this.state.user)==='admin' && (this.state.password)==='admin' ){
      console.log("OK")

      this.setState({showSetting: !this.state.showSetting})
      alert("Login Success")
    }
    else
    console.log("Fail")

  }
  handleChangeUser(event){
    this.setState({user: event.target.value});
  }
  handleChangePassword(event){
    this.setState({password: event.target.value});
  }
  render(){
      const profile = this.state.profiles[0];
      return (
      <div>
        <Container fluid>
            <Alert variant="custom-header">Vui lòng nhấn nút bình chọn
              <Image  style={{"marginLeft": "64vw"}}
                      src='./logo192.png'
                      width={30}
                      onClick={this.handleSetting}>
              </Image>
            </Alert>
            <Row className='Avatar' >
              <Col sm={2}>
                <Image  src={profile.avatar} rounded/>
              </Col>
              <Col className='TextTitle'>
                <Row>Nhân viên: {profile.name}</Row>
                <Row>Quầy số: {profile.counter}</Row>
              </Col>
            </Row>
        </Container>

        <Modal show={this.state.showSetting} onHide={this.handleSetting}>
          <Modal.Header closeButton>
            <Modal.Title>Please Login!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2"> <strong>User</strong> </Form.Label>
                <Col><Form.Control placeholder="User" onChange={this.handleChangeUser}/></Col>
              </Form.Group>
              <Form.Group as={Row} onChange={this.handleChangePassword}  >
                <Form.Label column sm="2"> <strong>Password</strong> </Form.Label>
                <Col><Form.Control type="password" placeholder="Password" /></Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleLogin} variant="primary" type='submit'>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
        </div>



    );
  }
}

export default Header;
