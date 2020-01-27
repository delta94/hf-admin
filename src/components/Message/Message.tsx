import React, { useState } from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
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

const chatClient = new StreamChat(API_KEY);

const userToken = TOKEN;

const Message = (props) => {
  const [isOpen, setIsOpen] = useState(true);
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
  const targetUser = data.users.filter((user) => user.id === props.id);
  const yourEmail = targetUser.email;
  const nickname = targetUser.nickname;

  const room = [myEmail, yourEmail]
    .sort()
    .join(',')
    .replace(regExp, '');

  chatClient.disconnect();
  chatClient.setUser(
    {
      id: 'ancient-surf-2',
      // id: dataMe.me.email,
      email: myEmail,
    },
    userToken,
  );

  const channel = chatClient.channel('messaging', `${room}`, {
    name: `${nickname}`,
  });

  return (
    <Chat client={chatClient} theme={'messaging light'}>
      <Channel channel={channel}>
        <div
          style={{
            position: 'fixed',
            right: '0px',
            bottom: '0px',
            height: '400px',
            width: '380px',
          }}
        >
          <a
            onClick={() => {
              window.location.reload();
            }}
          >
            닫기
          </a>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </div>
      </Channel>
    </Chat>
  );
};

export default Message;
