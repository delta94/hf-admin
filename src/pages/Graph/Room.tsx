import React from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
} from 'stream-chat-react';
import { API_KEY, TOKEN } from '../../config/config';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, GET_USERINFO } from '../../graphql/queries';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat(API_KEY);

const userToken = TOKEN;

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
      id: 'wispy-scene-2',
      name: `${myEmail}`,
      image:
        'https://getstream.io/random_svg/?id=wispy-scene-2&name=Wispy+scene',
    },
    userToken,
  );

  const channel = chatClient.channel('messaging', `${room}`, {
    image:
      'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
    name: `${nickname}`,
  });
  return (
    <div>
      <Icon
        style={{ fontSize: '50px', color: '#08c' }}
        type="message"
        theme="twoTone"
      />
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
