import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Routes from './app/Routes';
import Header from './app/components/Header';
import Footer from './app/components/Footer';

function App() {
  return (
    <React.Suspense fallback={() => <div>Loading...</div>}>
      <BrowserRouter>
        <Container className="py-4 px-lg-5">
          <Header />
          <Routes />
          <Footer />
        </Container>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
