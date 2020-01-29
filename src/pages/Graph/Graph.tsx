import React, { useState } from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  Thread,
  Window,
} from 'stream-chat-react';
import { API_KEY, TOKEN, SECRET } from '../../config/config';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, GET_USERINFO } from '../../graphql/queries';
import 'antd/dist/antd.css';

import 'stream-chat-react/dist/css/index.css';
import Cookies from 'js-cookie';

import 'antd/dist/antd.css';

export const Graph = () => {
  const chatClient = new StreamChat(API_KEY);
  const token = Cookies.get('stream-chat-token');

  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  const { error: errorR, loading: landingR, data: dataMe } = useQuery(
    GET_USERINFO,
    {
      fetchPolicy: 'network-only',
    },
  );

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 :(</p>;
  if (landingR) return <p>로딩 중...</p>;
  if (errorR) return <p>오류 :(</p>;

  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  const myEmail = dataMe.me.email;
  const yourEmail = 'admin@hf.club';
  const nickname = 'admin';

  const room = [myEmail, yourEmail]
    .sort()
    .join(',')
    .replace(regExp, '');

  chatClient.disconnect();
  chatClient.setUser(
    {
      id: dataMe.me.id,
      name: dataMe.me.nickname,
    },
    token,
  );

  const channel = chatClient.channel('messaging', `${room}`, {
    name: `${nickname}`,
  });
  return (
    <div>
      {isOpen ? (
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <div
              style={{
                position: 'fixed',
                right: '20px',
                bottom: '50px',
                height: '400px',
                width: '380px',
              }}
            >
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
              </Window>
              <Thread />
            </div>
          </Channel>
        </Chat>
      ) : null}

      <div style={{ position: 'fixed', right: '20px', bottom: '20px' }}>
        <button onClick={() => setIsOpen(!isOpen)}>챗봇</button>
      </div>
    </div>
  );
};

export default Graph;
