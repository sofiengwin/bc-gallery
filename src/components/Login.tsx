import * as React from 'react';
import {Form, Button} from 'antd';

import TextInput from './ui/TextInput';
import SimplePage from './ui/SimplePage'
import styled from '../styles';

const MainContainer = styled.div`
  width: 400px;
  background: #ECECEC;
  padding: 20px;
`;

class Login extends React.Component {
  render() {
    return (
      <SimplePage>
        <MainContainer>
          <h1 style={{textAlign: 'center'}}>Login</h1>
          <TextInput
            label='Email'
            type='email'
            onChange={() => null}
            value={'this'}
            key='email'
          />

          <TextInput
            label='Password'
            type='email'
            onChange={() => null}
            value={'this'}
            key='password'
          />

          <Form.Item>
            <Button type='primary'>Login</Button>
          </Form.Item>
        </MainContainer>
      </SimplePage>
    );
  }
}

export default Login;