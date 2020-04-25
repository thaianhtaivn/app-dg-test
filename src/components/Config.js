import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
class Config extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      textname:'WELCOME'
    };
    this.onChangeText = this.onChangeText.bind(this);
}
   onChangeText (event) {
     this.setState({textname: event.target.value});
   }
 render(){
  if(!this.props.isConfig){
    return null;
  }
  return (
    <div className="App">
      <h1>This function is under <code>development</code> </h1>
      <Form.Control type='text' value={this.state.textname} onChange={this.onChangeText}/>
      <Button>{this.state.textname}</Button>
    </div>
  );
}
}

export default Config;
