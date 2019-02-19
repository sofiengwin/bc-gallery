import * as React from 'react';
import styled from '../../styles'
import { Spin } from 'antd';

const Center = styled(Spin)`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
  margin-top: 25%;
`;

const CenterSpinner = () => {
  return (
    <Center size='large'/>
  )
}

export default CenterSpinner;