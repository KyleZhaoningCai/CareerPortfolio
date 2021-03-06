import React, {useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import "react-datepicker/dist/react-datepicker.css";
import 'react-confirm-alert/src/react-confirm-alert.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Website from './components/pages/Website';
import Game from './components/pages/Game';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ToDo from './components/todo/ToDo';

if (localStorage.token){
  setAuthToken(localStorage.token);
}

const App = (props) => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store} >
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/website'><Website /></Route>
            <Route path='/games'><Game /></Route>
            <Route exact path='/login'><Login /></Route>
            <Route exact path='/register'><Register /></Route>
            <Route exact path='/todo'><ToDo /></Route>
          </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
