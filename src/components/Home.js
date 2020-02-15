import React, {Component} from 'react';
import {Button, ButtonGroup, Navbar, Image, Container, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Rates from './Rates';


class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        address: '108 NGUYỄN DUY CUNG P12 GÒ VẤP'
      };
  }
  render(){
    if(this.props.isHome){
      return null;
      }
      return (
        <div>

            <Header/>

            <br/>
            <Rates/>
            <br/>
            <br/>

            <Footer address={this.state.address} />

        </div>
    );
  }
}

export default Home;
{/*<header className="App-header">
  <Navbar variant="dark" className="App-transition">
    <Navbar.Brand>
      <img
        alt="React Bootstrap logo"
        src="logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    <h1>XIN KÍNH CHÀO QUÝ KHÁCH</h1>
    </Navbar.Brand>
  </Navbar>
  <img src="logo192.png" className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>

  <Container fluid>
    <Row>
      <Col><Image src="logo192.png" onClick={()=>{ alert('Excellent'); }} rounded /></Col>
      <Col><Image src="logo192.png" onClick={()=>{ alert('Good'); }} rounded /> </Col>
      <Col><Image src="logo192.png" onClick={()=>{ alert('Normal'); }} rounded /> </Col>
      <Col><Image src="logo192.png" onClick={()=>{ alert('Bad'); }} rounded /> </Col>
    </Row>
  </Container>

</header>*/}
