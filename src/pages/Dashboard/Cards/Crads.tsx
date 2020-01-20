import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Card, Icon } from 'antd';
import { GENDER_CHART } from '../chart/genderChart';
import BestUser from '../BestUser/BestUser';

const DashboardDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const StyledCard = styled(Card)`
  width: 23%;
  height: 120px;
  border-radius: 20px;
`;

const CardSpan = styled.span`
  position: relative;
  top: -12px;
  color: white;
  cursor: pointer;
`;
const Cards = () => {
  const [best, setBest] = useState(false);
  const [gender, setGender] = useState(true);
  const [average, setAverage] = useState(true);
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let googleUser = data.users.filter((user) => user.provider === 'GOOGLE');
  let numberOfFollowing = 0;
  data.users.map((user) =>
    user.following.map((follwing) => {
      if (follwing.nickname) {
        numberOfFollowing += 1;
      }
    }),
  );
  let followingAverage = (numberOfFollowing / data.users.length).toFixed(2);

  return (
    <>
      <DashboardDiv1>
        <StyledCard
          title={
            <span style={{ color: 'white' }}>
              {googleUser.length} Total Users <Icon type="usergroup-add" />
            </span>
          }
          style={{
            backgroundColor: 'rgb(47 125 247)',
          }}
        >
          <CardSpan>
            <a href="/users" style={{ textDecoration: 'none', color: 'white' }}>
              view detail
            </a>
          </CardSpan>
        </StyledCard>

        <StyledCard
          title={
            <span style={{ color: 'white' }}>
              Best Users <Icon type="crown" theme="twoTone" />
            </span>
          }
          style={{
            backgroundColor: 'rgb(246 194 68)',
          }}
        >
          <CardSpan onClick={() => setBest(!best)}>view detail</CardSpan>
        </StyledCard>

        {average ? (
          <StyledCard
            title={
              <span style={{ color: 'white' }}>
                {followingAverage} Avg Followers
                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
              </span>
            }
            style={{
              backgroundColor: 'rgb(83 164 81)',
            }}
          >
            <CardSpan onClick={() => setAverage(false)}>view detail</CardSpan>
          </StyledCard>
        ) : (
          <StyledCard
            style={{
              backgroundColor: 'rgb(152 191 144)',
            }}
          >
            <div>총 팔로잉 수: {numberOfFollowing}</div>
            <div>총 유저 수: {googleUser.length}</div>
            <br />
            <CardSpan onClick={() => setAverage(true)}>back</CardSpan>
          </StyledCard>
        )}

        {gender ? (
          <StyledCard
            title={
              <span style={{ color: 'white' }}>
                Gender graph <Icon type="bar-chart" />
              </span>
            }
            style={{
              backgroundColor: 'rgb(203 68 75)',
            }}
          >
            <CardSpan onClick={() => setGender(false)}>view detail</CardSpan>
          </StyledCard>
        ) : (
          <StyledCard
            style={{
              height: '180px',
              backgroundColor: 'rgb(236 206 206)',
            }}
          >
            <GENDER_CHART />
            <CardSpan onClick={() => setGender(!best)}>back</CardSpan>
          </StyledCard>
        )}
      </DashboardDiv1>
      {best ? <BestUser /> : null}
    </>
  );
};

export default Cards;
