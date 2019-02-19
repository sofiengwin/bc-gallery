import {types, flow} from 'mobx-state-tree';

import {fetchData} from '../lib/fetchData';

import Asset from '../models/Asset'

const AssetStore = types.model('AssetStore', {
  assets: types.optional(types.map(Asset), {})
}).actions((self) => {
  const fetchAsset: (mediaId: string) => Promise<any> = flow(
    function* (mediaId: string) {
      const asset = yield fetchData(
        '/media/play',
        'POST',
        {mediaId, typeOfId: 'original'},
        '2.2.0'
      )
      
      let refinedAsset = undefined;
      if(asset['SUCCESS']) {
        refinedAsset = {
          id: asset.media._id,
          type: asset.media.type,
          numberOfWatch: asset.media.meta.numberOfWatch,
          uris: asset.media.uris
        }
  
        self.assets.set(refinedAsset.id, refinedAsset)
      }
      console.log({asset})
      return refinedAsset;
    }

  );

  return {
    fetchAsset
  }
})

export type IAssetStore = typeof AssetStore.Type;

export default AssetStore;