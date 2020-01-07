import React from 'react';
import { Route } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import UserDetail from './UserDetail/UserDetail';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Card } from 'antd';
const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 24px;
  margin: 0;
`;

const User = ({ match }) => {
  return (
    <StyledContent>
      <Card title="유저 정보">
        <Card>
          <Route exact path={match.path} component={UserInfo} />
          <Route path={`${match.path}/:id`} component={UserDetail} />
        </Card>
      </Card>
    </StyledContent>
  );
};

export default User;
