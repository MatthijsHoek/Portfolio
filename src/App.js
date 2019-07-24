import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/vendor/normalize.css';
import './assets/styles/app.scss';
import Sidebar from'./components/sidebar';
import Home from'./pages/home';
import Projects from './pages/projects';
import Details from './pages/details'
import About from './pages/about';

function App() {
  return (
    <section className="page-container">
      <Router>
      <Sidebar />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/details" component={Details} />
      </Router>
    </section>
  );
}

export default App;
