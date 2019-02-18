
import * as React from 'react';
import {
  Form, Input,
} from 'antd';

interface Props {
  autoFocus?: boolean;
  placeholder?: string;
  label: string;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

class TextInput extends React.Component<Props> {
  render() {
    return (
      <Form.Item label={this.props.label}>
        <Input
          autoFocus={this.props.autoFocus}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
          className={this.props.className}
        />
      </Form.Item>
    );
  }
}

export default TextInput;