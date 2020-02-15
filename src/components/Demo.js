import React, {useState} from 'react';
import {Button, InputGroup, Image, Container, Row, Col, Form} from 'react-bootstrap';
function Demo(props) {
  const [greeting, setGreeting] = useState('WELCOME TO MY APP COMPONENT');
  const onChangeGreeting = e => setGreeting(e.target.value);
  const items = [
    { name: 'Excellent',
      src: 'logo192.png'
    },
    { name: 'Good',
      src: 'logo192.png'
    },
    { name: 'Normal',
      src: 'logo192.png'
    },
    { name: 'Bad',
      src: 'logo192.png'
    }
  ];
  const elmImage = items.map((item, index) =>
    <Col key={index}>
      <h2>{item.name}</h2>
      <Image src={item.src} onClick={()=>{ alert('Excellent'); }} rounded />
      <Button variant ='success'>{item.name}</Button>
      <Form.Control type='text' placeholder={item.name}/>
    </Col>
  );

  if(!props.isDemo){
    return null;
  }
  return (
    <div>
        <Container fluid className='App-header'>
        <h1 className='App-transition'>{greeting}</h1>
        <InputGroup>
          <Button variant='success'>Edit text</Button>
          <Form.Control
              size='lg' type='text'
              value={greeting}
              onChange={onChangeGreeting}
          />
        </InputGroup>


          <Row>
            {elmImage}
          </Row>
        </Container>
    </div>
  );
}


export default Demo;
