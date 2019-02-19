import * as React from 'react';

import styled from '../../../styles'

const StyledImage = styled.img`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

interface Props {
  src: string;
}

const Image = ({src}: Props) => {
  return (
    <StyledImage src={src} />
  );
}

export default Image;