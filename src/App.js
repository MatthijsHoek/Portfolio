import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './assets/js/app';
import './assets/styles/vendor/normalize.css';
import './assets/styles/app.scss';
import Sidebar from'./components/sidebar';
import Home from'./pages/home';
import Projects from './pages/projects';
import About from './pages/about';

function App() {
  return (
    <>
      <Router>
      <Sidebar />
          <Route exact path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
      </Router>
    </>
  );
}

export default App;
