import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Layout, Card } from 'antd';
const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 24px;
  margin: 0;
`;

const StyledTable = styled.table`
  border-spacing: 2px;
`;

const User = () => {
  return (
    <StyledContent>
      <Card title="유저 정보">
        <Card>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid lightblue' }}>
                <th scope="col">email</th>
                <th scope="col">nickname</th>
                <th scope="col">삼대중량</th>
                <th scope="col">createdAt</th>
                <th scope="col">role</th>
              </tr>
            </thead>
            <UserInfo />
          </table>
        </Card>
      </Card>
    </StyledContent>
  );
};

export default User;
