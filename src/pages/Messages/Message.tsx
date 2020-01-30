import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import { useQuery } from '@apollo/react-hooks';
import { GET_USERINFO } from '../../graphql/queries';
import { API_KEY } from '../../config/config';
import Cookies from 'js-cookie';

import MyMessageComponent from './MyMessageComponent';
import ChannelPreview from './ChannelPreview';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat(API_KEY);
const token = Cookies.get('stream-chat-token');

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
