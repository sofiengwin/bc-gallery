import * as React from 'react';
import {Form, Button} from 'antd';
import {withRouter, RouteComponentProps, Link} from 'react-router-dom';

import TextInput from './ui/TextInput';
import SimplePage from './ui/SimplePage'
import styled from '../styles';
import {FormHeader, ErrorText} from './ui';

import {signinUser} from '../lib/fetchData'
import { FormComponentProps } from 'antd/lib/form';

const MainContainer = styled.div`
  width: 400px;
  background: #ECECEC;
  padding: 20px;
`;

interface State {
  serverError: string;
  loading?: boolean;
}

class Login extends React.Component<{} & FormComponentProps & RouteComponentProps, State> {
  state: State = {serverError: '', loading: false}
  handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        return;
      } else {
        this.setState({loading: true});
        const response = await signinUser();

        this.setState({loading: false});

        if(!response.status) {
          //handle server errors
          this.setState({serverError: response['data-error']['userMessage']})
        } else {
          localStorage.setItem('token', response['data-success']['accessToken'])
          // navigate to dashboard
          this.props.history.push('/dashboard')
        }
      }
    });
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { setFieldsValue	 } = this.props.form;
    setFieldsValue({[e.target.name]: e.target.value})
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <SimplePage>
        <MainContainer>
          <FormHeader style={{textAlign: 'center'}}>Login</FormHeader>
          <ErrorText style={{textAlign: 'center'}}>{this.state.serverError}</ErrorText>
          <Form onSubmit={this.handleSubmit}>
            <TextInput
              label='Email'
              type='email'
              onChange={this.handleInput}
              key='email'
              name='email'
              fieldDecorator={getFieldDecorator}
              rules={[{required: true, message: 'Please input your Email!'}]}
            />

            <TextInput
              label='Password'
              type='password'
              onChange={this.handleInput}
              key='password'
              name='password'
              fieldDecorator={getFieldDecorator}
              rules={[{required: true, message: 'Please input your Password!'}]}
            />

            <Form.Item>
              <Button
                type='primary'
                loading={this.state.loading}
                disabled={this.state.loading}
                htmlType="submit"
                block
              >
                Login
              </Button>
            </Form.Item>

            <p style={{textAlign: 'center'}}>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
          </Form>
        </MainContainer>
      </SimplePage>
    );
  }
}

export default Form.create({ name: 'login' })(withRouter(Login));