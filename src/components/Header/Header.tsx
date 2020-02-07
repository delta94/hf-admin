import React from 'react';
import styled from 'styled-components';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';

import { Layout, Form } from 'antd';

const StyledForm = styled(Form)`
  position: absolute;
  top: 15px;
  right: 20px;
  color: white;
`;

const Header = () => (
  <Layout.Header>
    <StyledForm>
      <Menu />
      <Login />
    </StyledForm>
  </Layout.Header>
);

export default Header;
