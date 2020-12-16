import React from 'react';
import Footer from '../components/Footer';
import HomePageBody from '../components/HomePage/HomePageBody/HomePageBody';

const HomePage = () => (
  <div className="container-fluid px-3 px-lg-5 m-0">
    <div className="px-lg-5">
      <HomePageBody />
      <Footer />
    </div>
  </div>
);

export default HomePage;
