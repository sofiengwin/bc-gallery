import * as React from 'react';

const src = 'https://placeimg.com/640/480/people'

class AssetView extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Asset View</h1>
        <img src={src} />
      </div>
    );
  }
}

export default AssetView;