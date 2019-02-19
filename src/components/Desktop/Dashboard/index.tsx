import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import AssetView from './AssetView';
import AssetsList from './AssetsList';
import Upload from '../../Upload/';
import Layout from './Layout';

class Dashboard extends React.Component {
  render() {
    return (
        <>
        <Switch>
          <Route exact path='/dashboard' render={() => (<Layout><AssetsList /></Layout>)}/>
          <Route path='/dashboard/assets/:assetId' component={() => (<Layout><AssetView /></Layout>)} />

          <Route exact path='/dashboard/upload' component={Upload}/>
        </Switch>
      </>
    );
  }
}

export default Dashboard;