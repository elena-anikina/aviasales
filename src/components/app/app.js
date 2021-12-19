import React from 'react';
import './app.scss';
import Header from '../header/header';
import Main from '../main/main';
import Sidebar from '../filters/filters';

const App = () => (
  <section className="app">
    <Header />
    <Sidebar />
    <Main />
  </section>
);

export default App;
