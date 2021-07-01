import React, {useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Website from './components/pages/Website';
import Game from './components/pages/Game';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/website'><Website /></Route>
          <Route path='/games'><Game /></Route>
        </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
