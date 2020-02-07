import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  background-color: rgb(241, 242, 245);
`;

const InnerDiv = styled.div`
  background-color: rgb(111, 157, 243);
  border-radius: 20px;
  height: 100%;
  width: 22%;
`;

const Card = styled.div`
  color: white;
  font-size: 2rem;
  margin-left: 20px;
`;

const TotalUser = ({ googleUser, facebookUser }) => (
  <OuterDiv>
    <InnerDiv>
      <Card>
        <Icon type="google" />
        <span style={{ marginLeft: '20px' }}>{googleUser}명</span>
      </Card>
    </InnerDiv>
    <InnerDiv>
      <Card>
        <Icon type="facebook" />
        <span style={{ marginLeft: '20px' }}>{facebookUser}명</span>
      </Card>
    </InnerDiv>
    <InnerDiv>
      <Card>
        <Icon type="github" />
        <span style={{ marginLeft: '30px' }}>0명</span>
      </Card>
    </InnerDiv>
    <InnerDiv>
      <Card>
        <span>K</span>
        <span style={{ marginLeft: '30px' }}>0명</span>
      </Card>
    </InnerDiv>
  </OuterDiv>
);

export default TotalUser;
