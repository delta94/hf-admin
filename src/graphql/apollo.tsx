import ApolloClient from 'apollo-client';
// import { ApolloClient, HttpLink, split } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import Cookies from 'js-cookie';

import { WebSocketLink } from 'apollo-link-ws';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});
// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql',
//   credentials: 'include',
// });

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('access-token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export default client;
