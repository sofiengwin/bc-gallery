import * as React from 'react';
import {values} from 'mobx';
import {inject, observer} from 'mobx-react';
import Assetthumbnail from './AssetThumbnail';
import {Pagination, Spin} from 'antd';

import {fetchData} from '../../../lib/fetchData';
import { IAssetStore } from '../../../services/AssetSore';
import {ErrorText} from '../../ui'
import CenterSpinner from '../../ui/CenterSpinner'
import { Link } from 'react-router-dom';

interface IData {
  options: {
    pagination: {
      page: number;
      perPage: number
    }
  }
}

interface State {
  loading: boolean;
  serverError: string
  assets: any[];
}

interface Props {
  assetStore?: IAssetStore
}

class AssetsList extends React.Component<Props, State> {
  state: State = {loading: true, serverError: '', assets: []}
  async componentDidMount() {
    this.paginate(1, 20)
  }

  paginate = async (page: number, pageSize: number) => {
    this.setState({loading: true})
    const {assetStore} = this.props
    const response = await fetchData<IData>(
      '/media/galleryList',
      'POST',
      {
        options: {
          pagination: {page: page, perPage: pageSize}
        }
      },
      '4.2.0'
    )

    if(!response.status) {
      this.setState({serverError: response['data-error']['userMessage'], loading: false})
      return
    }
    const items = response['data-success']['items'].map((item: any) => item['media']['id']);
    if(assetStore) {
      //fetch signed url
      Promise.all(items.map((mediaId: string) => assetStore.fetchAsset(mediaId)))
      .then((response) => {
        this.setState({loading: false, assets: response.filter((asset:any) => asset)})
      })
    } 
  }

  render() {
    const assets = this.state.assets;
    return (
      <>
        {this.state.loading ? (<CenterSpinner />) : (
          <div>
            <ErrorText style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}>{this.state.serverError}</ErrorText>
            {!!assets.length && <Link to='/dashboard/upload'>Uploa More</Link>}
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {assets.map((asset: any, index: number) => {
                return <Assetthumbnail key={index} asset={asset}/>
              })}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
              {!!assets.length && <Pagination defaultCurrent={1} total={100} onChange={this.paginate} pageSize={20}/>}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default observer(inject('assetStore')(AssetsList));