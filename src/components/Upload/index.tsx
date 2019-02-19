import * as React from 'react';
import {Form, Button, TimePicker, DatePicker} from 'antd';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';

import TextInput from '../ui/TextInput';
import SimplePage from '../ui/SimplePage';
import UploadFile from './UploadFile';
import styled from '../../styles';


const MainContainer = styled.div`
  width: 400px;
  background: #ECECEC;
  padding: 20px;
`;

interface State {
  serverError: string;
  loading?: boolean;
}
class Upload extends React.Component<{} & FormComponentProps & RouteComponentProps, State> {
  state: State = {serverError: '', loading: false}
  handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        console.log('validation failed');
        return;
      } else {
        console.log('uploading files');
      }
    });
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { setFieldsValue	 } = this.props.form;
    setFieldsValue({[e.target.name]: e.target.value})
  }

  render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    return (
      <SimplePage>
        <MainContainer>
          <h1 style={{textAlign: 'center'}}>Upload File</h1>
          <Form onSubmit={this.handleSubmit}>
            <TextInput
              label='Location'
              type='text'
              onChange={this.handleInput}
              key='location'
              name='location'
              fieldDecorator={getFieldDecorator}
              rules={[{required: true, message: 'Please input your location!'}]}
            />

            <Form.Item>
              <TimePicker onChange={(_, timeString) => setFieldsValue({time: timeString})}  size='large'/>
            </Form.Item>

            <Form.Item>
              <DatePicker size='large' onChange={(_, dateString) => setFieldsValue({date: dateString})} />
            </Form.Item>


            <Form.Item>
              <UploadFile />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                loading={this.state.loading}
                disabled={this.state.loading}
                htmlType="submit"
                block
              >
                Upload
              </Button>
            </Form.Item>
          </Form>
        </MainContainer>
      </SimplePage>
    );
  }
}

export default Form.create({ name: 'upload' })(withRouter(Upload));