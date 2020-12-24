import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Routes from './app/Routes';
import Header from './app/components/Header';
import Menu from './app/components/Menu';
import Footer from './app/components/Footer';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <React.Suspense fallback={() => <div>Loading...</div>}>
      <BrowserRouter>
        <Container className="py-4 px-lg-5">
          <Header />
          {user && <Menu />}
          <Routes />
          <Footer />
        </Container>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
