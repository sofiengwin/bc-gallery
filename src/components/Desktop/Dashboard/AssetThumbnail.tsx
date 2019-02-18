import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from '../../../styles';

const AssetContainer = styled.div`
  height: '293px';
  width: '293px';
`;

const ImageContainer = styled.img`
  width: '293px';
  height: '293px';
`;

const src = 'https://placeimg.com/640/480/people'

class Assetthumbnail extends React.Component {
  render() {
    return (
      <AssetContainer>
        <Link to={`/dashboard/assets/imag.jpg`}>
          <ImageContainer src={src} style={{ width: '100%', height: '100%'}}/>
        </Link>
      </AssetContainer>
    );
  }
}

export default Assetthumbnail;