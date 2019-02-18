import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import RenderError from '../RenderError';
import LoginRoute from '../Login';
import SignupRoute from '../Signup';
import Homepage from '../Homepage';

const Public: React.SFC = () => {
  return (
    <Switch>
      <Route exact path='/error' component={RenderError} />
      <Route exact path='/login' component={LoginRoute} />
      <Route exact path='/signup' component={SignupRoute} />
      <Route path='/' component={Homepage} />
    </Switch>
  );
}

export default Public;