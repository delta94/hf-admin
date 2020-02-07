import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import { useQuery } from '@apollo/react-hooks';
import { GET_USERINFO } from '../../graphql/queries';
import { API_KEY } from '../../config/config';
import Cookies from 'js-cookie';

// import MyMessageComponent from './MyMessageComponent';
// import ChannelPreview from './ChannelPreview';
import styled from 'styled-components';
import { Avatar, Badge } from 'antd';
import 'stream-chat-react/dist/css/index.css';
import { render } from '@testing-library/react';

const chatClient = new StreamChat(API_KEY);
const token = Cookies.get('stream-chat-token');

const SpeechBubbleHost = styled.div`
  background-color: lightgrey;
  padding: 10px;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-left-color: lightgray;
    border-right: 0;
    border-top: 0;
    margin-top: -4.5px;
    margin-right: -9px;
  }
`;

const SpeechBubbleGuest = styled.div`
  background-color: lightskyblue;
  padding: 10px;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 80%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-right-color: lightskyblue;
    border-left: 0;
    border-top: 0;
    margin-top: -7px;
    margin-left: -14px;
  }
`;

const CustomerList = styled.div`
  position: relative;
  line-height: 80px;
  font-size: 1.3rem;
`;

const App = () => {
  const { error, loading, data: dataMe } = useQuery(GET_USERINFO, {
    fetchPolicy: 'network-only',
  });
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;

  chatClient.disconnect();
  chatClient.setUser(
    {
      id: dataMe.me.id,
      name: dataMe.me.nickname,
    },
    token,
  );
  const filters = { type: 'messaging' };
  const sort = { last_message_at: -1 };

  return (
    <div>
      <Chat client={chatClient} theme={'messaging light'}>
        <ChannelList filters={filters} sort={sort} Preview={ChannelPreview} />
        <Channel Message={MyMessageComponent}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default App;

class ChannelPreview extends React.Component {
  render() {
    const { setActiveChannel, channel } = this.props;
    const unreadCount = channel.countUnread();
    return (
      <CustomerList>
        <div style={{ marginLeft: '20px' }}>
          <Badge count={unreadCount}>
            <Avatar size="large" icon="user" />
          </Badge>
          <a
            onClick={(e) => {
              setActiveChannel(channel, e);
            }}
          >
            {channel.data.name}
          </a>
        </div>
      </CustomerList>
    );
  }
}

const MyMessageComponent = (props) => {
  return (
    <div>
      {props.message.user.name === 'admin' ? (
        <div
          style={{
            textAlign: 'right',
            marginBottom: '10px',
          }}
        >
          <SpeechBubbleHost>{props.message.text}</SpeechBubbleHost>
        </div>
      ) : (
        <div style={{ marginBottom: '15px' }}>
          <div style={{ marginBottom: '10px' }}>
            <Avatar size="large" icon="user" />
            <span style={{ marginLeft: '10px' }}>
              {props.message.user.name}
            </span>
          </div>
          <SpeechBubbleGuest>{props.message.text}</SpeechBubbleGuest>
        </div>
      )}
    </div>
  );
};
