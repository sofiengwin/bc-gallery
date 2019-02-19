import {types} from "mobx-state-tree";

const UriProps = types.model().props({
  gif: types.optional(types.string, ''),
  jpg: types.optional(types.string, ''),
  p360: types.optional(types.string, ''),
  p480: types.optional(types.string, ''),
  p720: types.optional(types.string, ''),
});

const Uri = UriProps.named('Uri');

const AssetProps = types.model().props({
  id: types.string,
  type: types.string,
  numberOfWatch: types.optional(types.number, 0),
  uris: types.optional(Uri, {})
})

const Asset = AssetProps.named('Asset').views((self) => {
  return {
    get isVideo() {
      return self.type === 'videos';
    },
  };
})

export type IAsset = typeof Asset.Type;
export type IAssetSnapshot = typeof Asset.SnapshotType;
export default Asset;