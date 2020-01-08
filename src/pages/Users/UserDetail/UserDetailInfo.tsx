import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../../graphql/queries';

export const USER_ID = () => {
  const { data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });

  return <div>{data ? <div></div> : <div>x</div>}</div>;
};
