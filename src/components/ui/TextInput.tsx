
import * as React from 'react';
import {
  Form, Input,
} from 'antd';

interface Props {
  autoFocus?: boolean;
  placeholder?: string;
  label: string;
  type: 'text' | 'password' | 'email';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  name?: string;
  fieldDecorator: any;
  rules?: {}[];
}

class TextInput extends React.Component<Props> {
  render() {
    return (
      <Form.Item label={this.props.label}>
        {this.props.fieldDecorator(this.props.name, {
          rules: this.props.rules
        })(
          <Input
            autoFocus={this.props.autoFocus}
            placeholder={this.props.placeholder}
            type={this.props.type}
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            className={this.props.className}
            name={this.props.name}
          />
        )}
      </Form.Item>
    );
  }
}

export default TextInput;