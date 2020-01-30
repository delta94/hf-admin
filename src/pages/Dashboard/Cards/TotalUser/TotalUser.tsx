import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

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

const TotalUser = () => {
  return (
    <OuterDiv>
      <InnerDiv>
        <div style={{ color: 'white', fontSize: '2rem', marginLeft: '20px' }}>
          <Icon type="google" />
          <span style={{ marginLeft: '30px' }}>144명</span>
        </div>
      </InnerDiv>
      <InnerDiv>
        <div style={{ color: 'white', fontSize: '2rem', marginLeft: '20px' }}>
          <Icon type="facebook" />
          <span style={{ marginLeft: '30px' }}>0명</span>
        </div>
      </InnerDiv>
      <InnerDiv>
        <div style={{ color: 'white', fontSize: '2rem', marginLeft: '20px' }}>
          <Icon type="github" />
          <span style={{ marginLeft: '30px' }}>0명</span>
        </div>
      </InnerDiv>
      <InnerDiv>
        <div style={{ color: 'white', fontSize: '2rem', marginLeft: '20px' }}>
          <span>K</span>
          <span style={{ marginLeft: '30px' }}>0명</span>
        </div>
      </InnerDiv>
    </OuterDiv>
  );
};

export default TotalUser;
