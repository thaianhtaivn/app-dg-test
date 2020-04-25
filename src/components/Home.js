import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import Header from './Header';
import Footer from './Footer';
import Rates from './Rates';
var socket;
class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        address: '108 NGUYỄN DUY CUNG P12 GÒ VẤP',
        counter:1,
        endpoint: "localhost:8888"
      };
      this.counter_num = this.counter_num.bind(this);
      this.counter_rate = this.counter_rate.bind(this);
      socket = socketIOClient(this.state.endpoint, {secure:true});

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
  counter_num(num){
    this.setState({counter:num})
  }
  counter_rate(rate){
    socket.emit("Client-send-data",this.state.counter+': '+rate)

    console.log(this.state.counter+': '+rate);

  }
  render(){
    if(this.props.isHome){
      return null;
      }
      return (
        <div>

            <Header counter_num = {this.counter_num}/>
            <hr/>
            <Rates counter_rate = {this.counter_rate}/>
            <hr/>
            <Footer address={this.state.address} />

        </div>
    );
  }
}

export default Home;
