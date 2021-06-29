import React, {useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Navbar from './components/layout/Navbar';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
