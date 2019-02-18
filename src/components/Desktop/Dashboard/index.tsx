import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Assetthumbnail from './AssetThumbnail';
import AssetView from './AssetView';
import Upload from '../../Upload';

class Dashboard extends React.Component {
  render() {
    return (
      <div style={{maxWidth: 1200, minHeight: '100vh', background: '#ECECEC', margin: 'auto' }}>
        <h1>Hello Dashboar</h1>
        <Upload />
        <Switch>
          <Route exact path='/dashboard' render={() => {
            return <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {Array(20).fill(0).map((_, index) => {
                return <Assetthumbnail key={index}/>
              })}
            </div>
          }}/>

          <Route path='/dashboard/assets/:assertId' component={AssetView} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;