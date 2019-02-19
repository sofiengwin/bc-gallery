import * as React from 'react';
import {Redirect, RouteComponentProps} from 'react-router-dom';
import jwt from 'jwt-simple';
import { fetchData } from '../lib/fetchData'

interface State {
  loading: boolean;
}


// I did not end up using this because of time contraint but I usually wrap 
// protected pages/route with this component
class RequireLoggedInUser extends React.Component<RouteComponentProps, State> {
  state: State = {loading: false}
  async componentDidMount() {
    const token = localStorage.getItem('token');
    if(token) {
      this.setState({loading: true})
      await fetchData(
        '/users/signin',
        'POST',
        {
          email: 'apiguest@bcaster.com',
          password: 'apiguest2019',
          channel: 'bcaster',
          origin: 'web',
          appId: 'BCaster-Android-V3.5.2'
        },
        '4.3.0'
      );
      this.setState({loading: false})
    }

  }

  render() {
    const token = localStorage.getItem('token');
    if (token) {
      return React.Children.only(
        (typeof this.props.children === 'function') ?
          this.props.children() :
          this.props.children
      );

    } else if (this.state.loading) {
      return <h1>Loading</h1>;

    } else {
      return <Redirect
        to={{
          pathname: '/login',
          state: {redirect: this.props.location.pathname},
        }}
      />;
    }
  }
}