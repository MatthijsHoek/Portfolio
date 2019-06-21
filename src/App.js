import React from 'react';
import './assets/js/app';
import './assets/styles/vendor/normalize.css';
import './assets/styles/app.scss';
import Sidebar from'./components/sidebar';
import Home from'./pages/home';

function App() {
  return (
    <>
      <Sidebar />
      <Home />
    </>
  );
}

export default App;
