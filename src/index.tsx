import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';

import './styles/main.css';
import Dashboard from './components/routes/Dashboard';
import Public from './components/routes/Public';
import AssetStore from './services/AssetSore';
import * as serviceWorker from './serviceWorker';

const assetStore = AssetStore.create({});

const stores = {
  assetStore
}

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/' component={Public} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
