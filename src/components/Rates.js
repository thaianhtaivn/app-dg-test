import React, {Component} from 'react';
import {Button, Navbar, Alert, Image, Row, Col, Container, Modal} from 'react-bootstrap';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Rates extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        imagesrc:[{
            scr:'./logo512.png',
            rate: 'Excellent'
          },{
            scr:'./logo512.png',
            rate: 'Good'
            },{
            scr:'./logo512.png',
            rate: 'Normal'
              },{
            scr:'./logo512.png',
            rate: 'Bad'
                }
        ],
        showAlert: false,
        rate: null

      };
      this.showAlert = this.showAlert.bind(this);

  }

  showAlert(rate){
    this.setState({showAlert: true})
    this.setState({rate: rate})
    setTimeout(() => this.setState({showAlert: false}),3000)
  }
  render(){
    const imagesrc = this.state.imagesrc;
    const elmRate = imagesrc.map((image) =>{
      return(
        <Col>
          <Image
            className="img-fluid"
            src={image.scr}
            onClick={()=>{this.showAlert(image.rate)}}
            rounded />
        </Col>
      );
    });
      return (
        <div>


          <Container fluid>
            <Row>
              {elmRate}
            </Row>

                    <Modal show={this.state.showAlert} size='lg'>
                      <Modal.Header bsPrefix='Rate'>
                        <Modal.Title>
                          <h2>CẢM ƠN QUÝ KHÁCH ĐÃ ĐÁNH GIÁ</h2>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <div className='Rate'>
                        Bạn vừa đánh giá: <strong> {this.state.rate}</strong>
                      </div>
                      </Modal.Body>
                      </Modal>
          </Container>
        </div>

    );
  }
}

export default Rates;
