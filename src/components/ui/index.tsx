import styled from '../../styles'
import { Spin } from 'antd';

const FormHeader = styled.h1`
  margin: -20px -20px 20px;
  padding: 15px 25px;
  line-height: 30px;
  font-size: 25px;
  font-weight: 300;
  color: #ADADAD;
  text-align:center;
  background: #f7f7f7;
`;

const ErrorText = styled.p`
  color: red;
`;

const BREAKPOINTS = {
  PHABLET: '32em',
  TABLET: '48em',
  PC: '64em',
  WIDESCREEN: '80em'
}

const Center = styled.div`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const CenterSpinner = () => {
  return (
    <Center>
      <Spin />
    </Center>
  )
}

export {FormHeader, ErrorText, BREAKPOINTS, CenterSpinner}