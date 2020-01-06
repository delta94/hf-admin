import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../graphql/queries';

const { data } = useQuery(GET_USERS, {
  fetchPolicy: 'network-only',
});

export const GET_NUMBER_OF_USER = () => {
  if (data) {
    return data.users.length;
  }
};
