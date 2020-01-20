import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import FollowersRank from '../chart/followersRank';
import FollowingsRank from '../chart/followingsRank';

const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
  background-color: rgb(241, 242, 245);
`;

const InnerDiv = styled.div`
  background-color: rgb(243, 203, 130);
  height: 100%;
  width: 48%;
  overflow: scroll;
  border-radius: 20px;
`;

const BestUser = () => {
  return (
    <OuterDiv>
      <InnerDiv>
        <span style={{ position: 'relative', left: '15px', fontSize: '25px' }}>
          Ranking Followers
        </span>
        <FollowersRank />
      </InnerDiv>
      <InnerDiv>
        <span style={{ position: 'relative', left: '15px', fontSize: '25px' }}>
          Ranking Follwings
        </span>
        <FollowingsRank />
      </InnerDiv>
    </OuterDiv>
  );
};

export default BestUser;
