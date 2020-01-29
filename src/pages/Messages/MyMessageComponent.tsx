import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERINFO } from '../../graphql/queries';

const MyMessageComponent = (props) => {
  const { error: errorR, loading: landingR, data: dataMe } = useQuery(
    GET_USERINFO,
    {
      fetchPolicy: 'network-only',
    },
  );
  if (landingR) return <p>로딩 중...</p>;
  if (errorR) return <p>오류 :(</p>;

  console.log();
  return (
    <div>
      {dataMe.me.nickname === props.message.user.name ? (
        <div style={{ textAlign: 'right' }}>
          <b>{props.message.user.name}</b> {props.message.text}
        </div>
      ) : (
        <div>
          <b>{props.message.user.name}</b> {props.message.text}
        </div>
      )}
    </div>
  );
};

export default MyMessageComponent;
