import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/vendor/normalize.css';
import './assets/styles/app.scss';
import Sidebar from'./components/sidebar';
import Home from'./pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Odsa from './pages/details/odsa';
import Workpamoja from './pages/details/workpamoja';
import Rubrics from './pages/details/rubrics';

function App() {
  return (
    <section className="page-container">
      <Router>
      <Sidebar />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/ODSA" component={Odsa} />
          <Route path="/workpamoja" component={Workpamoja} />
          <Route path="/rubrics" component={Rubrics} />
      </Router>
    </section>
  );
}

export default App;
