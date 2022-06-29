import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient ({
  uri: 'http://localhost:4000', // Specifies location of GraphQL server
  cache: new InMemoryCache()
});

// ApolloProvider uses React's Context API to make a configured Apollo Client instance available throughout a React component tree
// Allows all pages, containers, and components can access the client via friendly React Hooks thanks to the context API
ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
