import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Employee/Dashboard';
import Report from './components/Report';
import History from './components/History';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/Login/login';
import { AuthTokenContextProvider } from './context/AuthTokenContext';

function App() {
  return (
    <React.Fragment>
      <AuthTokenContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/History" component={History} />
          </Switch>
          {/* <Route exact path="/" render={() => <Landing posts={Landing} />} /> */}
          {/* <Route path="/Report" component={Report} />s
            <Route path="/History" component={History} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Login" component={Login} /> */}
        </BrowserRouter>
      </AuthTokenContextProvider>
    </React.Fragment>
  );
}

export default App;
