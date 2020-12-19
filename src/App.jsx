import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import apolloClient from './graphql';
import reduxStore from './store';
import Routes from './app/Routes';
import Header from './app/components/Header';
import Footer from './app/components/Footer';

function App() {
  return (
    <Provider store={reduxStore}>
      <ApolloProvider client={apolloClient}>
        <React.Suspense fallback={() => <div>Loading...</div>}>
          <BrowserRouter>
            <Container className="py-4 px-lg-5">
              <Header />
              <Routes />
              <Footer />
            </Container>
          </BrowserRouter>
        </React.Suspense>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
