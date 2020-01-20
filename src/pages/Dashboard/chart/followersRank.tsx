import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';

import 'antd/dist/antd.css';
import { Table, Tag, Button, Divider, Card } from 'antd';

const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
  { title: 'Nickname', dataIndex: 'nickname', key: 'nickname' },
  { title: 'Followers', dataIndex: 'followers', key: 'followers' },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: 'Action',
    render: (text, record) => {
      return (
        <span>
          <a>Message</a>
        </span>
      );
    },
  },
];

const FollowersRank = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let followers = data.users
    .map((user) => {
      return {
        id: user.id,
        nickname: user.nickname,
        follower: user.followers.length,
      };
    })
    .sort((a, b) => b.follower - a.follower);
  let rank = 1;
  for (let i = 0; i < followers.length; i++) {
    if (i > 0 && followers[i].follower < followers[i - 1].follower) {
      rank++;
    }
    followers[i].rank = rank;
  }
  let dataSource = followers.map((user, i) => {
    return {
      rank: user.rank,
      key: user.id,
      nickname: user.nickname,
      followers: user.follower,
    };
  });

  return (
    <Table
      size={'small'}
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default FollowersRank;
