import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
import { GENDER_CHART } from '../chart/genderChart';

import TotalUser from './TotalUser/TotalUser';
import BestUser from './BestUser/BestUser';

import { DashboardDiv1, StyledCard, CardSpan } from '../Dashboard.styled';

import { CardLoading } from '../Dashboard.styled';

const Cards = () => {
  const [total, setTotal] = useState(false);
  const [best, setBest] = useState(false);
  const [gender, setGender] = useState(true);
  const [average, setAverage] = useState(true);
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <CardLoading />;
  if (error) return <p>오류 :(</p>;

  let totalUser = data.users.length;
  let numberOfFollowing = 0;
  data.users.map((user) =>
    user.following.map((follwing) => {
      if (follwing.id) {
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
              {totalUser} Total Users <Icon type="usergroup-add" />
            </span>
          }
          style={{
            backgroundColor: 'rgb(47 125 247)',
          }}
        >
          <CardSpan onClick={() => setTotal(!total)}>view detail</CardSpan>
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
            <div>총 유저 수: {totalUser}</div>
            <div>총 팔로잉 수: {numberOfFollowing}</div>
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
      {total ? <TotalUser /> : null}
      {best ? <BestUser /> : null}
    </>
  );
};

export default Cards;
