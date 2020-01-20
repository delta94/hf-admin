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
  { title: 'Following', dataIndex: 'following', key: 'following' },
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

const FollowingsRank = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  let followings = data.users
    .map((user) => {
      return {
        id: user.id,
        nickname: user.nickname,
        following: user.following.length,
      };
    })
    .sort((a, b) => b.following - a.following);
  let rank = 1;
  for (let i = 0; i < followings.length; i++) {
    if (i > 0 && followings[i].following < followings[i - 1].following) {
      rank++;
    }
    followings[i].rank = rank;
  }
  let dataSource = followings.map((user, i) => {
    return {
      rank: user.rank,
      key: user.id,
      nickname: user.nickname,
      following: user.following,
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

export default FollowingsRank;
