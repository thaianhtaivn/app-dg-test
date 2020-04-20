import React, {Component} from 'react';
import {Button, Navbar, Alert, Image, Row, Col, Container, Modal} from 'react-bootstrap';
import socketIOClient from "socket.io-client";
var socket;
class Rates extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        imagesrc:[{
            scr:'./Excellent.png',
            rate: 'Excellent'
              },{
            scr:'./Good.png',
            rate: 'Good'
              },{
            scr:'./Normal.png',
            rate: 'Normal'
              },{
            scr:'./Bad.png',
            rate: 'Bad'
              }
        ],
        showAlert: false,
        rate: null,
        endpoint: "localhost:8888"
      };
      this.showAlert = this.showAlert.bind(this);
      socket = socketIOClient(this.state.endpoint);
  }
  componentWillMount(){
    socket.on('connect', () => {
      socket.on('Server-greeting',function(data){
        // <h3>Server connected!</h3>
        console.log(data);

      })
      socket.emit("Client-counter",this.state.counter)
    });
  }

  showAlert(rate){

    this.setState({showAlert: true})
    this.setState({rate: rate})
    setTimeout(() => this.setState({showAlert: false}),2000)
    socket.emit("Client-send-data",rate)
    this.props.counter_rate(rate)
  }
  render(){
    const imagesrc = this.state.imagesrc;
    const elmRate = imagesrc.map((image) =>{
      return(
        <Col>
          <Image
            className="img-fluid"

            width={400}
            src={image.scr}
            onClick={()=>{this.showAlert(image.rate)}}
            rounded />
            <h2 onClick={()=>{this.showAlert(image.rate)}}
                className="Rate-Name">
              {image.rate}
            </h2>
        </Col>
      );
    });
      return (
        <div>
          <Container fluid>
            <Row>
              {elmRate}
            </Row>

          </Container>
          <Container fluid>
            <Modal  show={this.state.showAlert} size='lg'
                    onHide={()=>{this.setState({showAlert:false})}}>
              <Modal.Header bsPrefix='Rate'>
                <Modal.Title>
                  <strong><h2>CẢM ƠN QUÝ KHÁCH ĐÃ ĐÁNH GIÁ</h2></strong>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body bsPrefix='Rate'>
                Bạn vừa đánh giá: <strong> {this.state.rate}</strong>
              </Modal.Body>
            </Modal>

          </Container>

        </div>

    );
  }
}

export default Rates;
