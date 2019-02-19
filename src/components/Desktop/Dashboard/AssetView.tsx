import * as React from 'react';
import {withRouter, RouteComponentProps, RouteProps} from 'react-router-dom';
import {inject} from 'mobx-react';
import { IAssetStore } from '../../../services/AssetSore';
import styled from '../../../styles';
import Video from './Video';
import Image from './Image';
import CenterSpinner from '../../ui/CenterSpinner'
import { ErrorText } from '../../ui';

interface Props {
  assetStore?: IAssetStore;
}

interface State {
  loading: boolean;
  serverError: string;
}

class AssetView extends React.Component<Props & RouteComponentProps<any>, State> {
  state: State = {loading: false, serverError: ''}
  async componentWillMount() {
    const {assetStore, match} = this.props
    const asset = assetStore.assets.get(match.params.assetId)
    //If asset not in store fetch asset from server
    if(!asset) {
      this.setState({loading: true})
      const response = await assetStore.fetchAsset(match.params.assetId)
      if (!response) {
        this.setState({loading: false, serverError: 'Something went wrong. Try again later'})
      } else {
        this.setState({loading: false})
      }
    }
  }

  render() {
    const {assetStore, match} = this.props
    const asset = assetStore.assets.get(match.params.assetId)
    console.log({asset})
    return (
      <div>
        <ErrorText>{this.state.serverError}</ErrorText>
        {!this.state.serverError && <div style={{display: 'flex', justifyContent: 'center', position: 'relative', paddingBottom: '56.25%', background: 'black', alignItems: 'center'}}>
          {this.state.loading ? (<CenterSpinner />) : (
            <div>
              {asset.type == 'image' ? <Image src={asset.uris.gif} /> :  <Video src={asset.uris.p720}/>}        
            </div>
          )}
        </div>}
      </div>
    );
  }
}

export default withRouter(inject('assetStore')(AssetView));