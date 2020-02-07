import React from 'react';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import { Avatar, Badge } from 'antd';

const CustomerList = styled.div`
  position: relative;
  line-height: 80px;
  font-size: 1.3rem;
`;

const ChannelPreview = ({ setActiveChannel, channel }) => {
  // const unreadCount = channel.countUnread();

  return (
    <CustomerList>
      <div style={{ marginLeft: '20px' }}>
        <Avatar size="large" icon="user" />

        <a
          onClick={() => {
            setActiveChannel(channel);
          }}
        >
          {channel.data.name}
        </a>
      </div>
    </CustomerList>
  );
};

export default ChannelPreview;
