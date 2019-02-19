import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from '../../../styles';

const AssetContainer = styled.div`
	flex: 1 0 20rem;
	margin: 0.5rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
`;

const ImageContainer = styled.img`
  display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 400ms ease-out;
  &:hover {
	  transform: scale(1.15);
  }
`;

interface Props {
  asset: any;
}

class Assetthumbnail extends React.Component<Props> {
  render() {
    return (
      <AssetContainer>
        <Link to={`/dashboard/assets/${this.props.asset.id}`}>
          <ImageContainer src={this.props.asset.uris.jpg}/>
        </Link>
      </AssetContainer>
    );
  }
}

export default Assetthumbnail;