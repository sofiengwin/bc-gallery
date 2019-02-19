import * as React from 'react';
import { Row } from 'antd';

import styled from '../../../styles'
import Header from '../../Header';


const LayoutWrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  background: #ECECEC; 
  margin: auto;
  position: relative;
`;

const MainContainer = styled(Row)`
  margin-top: 20px;
`;

const Layout: React.SFC = ({children}) => {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <LayoutWrapper>

        <MainContainer>
          {children}
        </MainContainer>

      </LayoutWrapper>
    </>
  )
}

export default Layout;