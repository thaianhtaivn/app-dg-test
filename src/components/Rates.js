import React, {Component} from 'react';
import { Image, Row, Col, Container, Modal} from 'react-bootstrap';
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
        rate: null
      };
      this.showAlert = this.showAlert.bind(this);
  }
  showAlert(rate){
    this.setState({showAlert: true})
    this.setState({rate: rate})
    setTimeout(() => this.setState({showAlert: false}),2000)
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
