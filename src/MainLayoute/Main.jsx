import React from 'react';
import Header from '../sharedPages/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedPages/footer/Footer';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;