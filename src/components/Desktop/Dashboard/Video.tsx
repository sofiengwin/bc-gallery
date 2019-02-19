import * as React from 'react';
import styled from '../../../styles';

const StyledVideo = styled.video`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

interface Props {
  src: string;
}

const Video = ({src}: Props) => {
  return (
    <StyledVideo controls>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </StyledVideo>
  );
}

export default Video;