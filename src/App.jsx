import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './graphql';
import Routes from './app/Routes';
import Header from './app/components/Header';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <React.Suspense fallback={() => <div>Loading...</div>}>
        <BrowserRouter>
          <Container className="py-4 px-lg-5">
            <Header />
            <Routes />
          </Container>
        </BrowserRouter>
      </React.Suspense>
    </ApolloProvider>
  );
}

export default App;
