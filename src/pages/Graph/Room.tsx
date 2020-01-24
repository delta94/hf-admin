import React from 'react';
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
import stream from 'getstream';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat(API_KEY);
const client = stream.connect('7gfp3v3jzxev', null, '67968');
const userToken = TOKEN;
client.apiSecret = SECRET;

const Room = ({ match }) => {
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
  const yourEmail = data.users[match.params.id].email;
  const nickname = data.users[match.params.id].nickname;

  const room = [myEmail, yourEmail]
    .sort()
    .join(',')
    .replace(regExp, '');

  chatClient.disconnect();
  chatClient.setUser(
    {
      id: 'floral-leaf-9',
      name: myEmail,
    },
    userToken,
  );

  const channel = chatClient.channel('messaging', `${room}`, {
    name: `${nickname}`,
  });

  return (
    <div>
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
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </div>
        </Channel>
      </Chat>
    </div>
  );
};

export default Room;
