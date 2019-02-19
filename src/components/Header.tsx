import * as React from 'react';
import styled from '../styles';
import {Menu, Layout} from 'antd';
import {Link, withRouter, RouteComponentProps} from 'react-router-dom';

const Flex = styled.div`
  display: flex;
`
class Header extends React.Component<RouteComponentProps<any>> {
  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {
    return (
      <>
        <Layout>
          <Layout.Header>
            <Flex style={{justifyContent: 'space-between'}}>
              <Flex>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1"><Link to='/dashboard'>Gallery</Link></Menu.Item>
                </Menu>
              </Flex>
              <Flex>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="4" onClick={this.logout}>Logout</Menu.Item>
                </Menu>
              </Flex>
            </Flex>
          </Layout.Header>
        </Layout>
      </>
    );
  }
}

export default withRouter(Header);