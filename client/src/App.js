import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Employee/Dashboard';
import Report from './components/Report';
import History from './components/History';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/Login/login';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  // class App extends React.Component {
  //   constructor(props){
  //     super(props);
  //     this.state={apiResponse:""};
  //   }

  //   callAPI(){
  //     fetch("http:/localhost:3000/AddeExpense")
  //     .then(res => res.text())
  //     .then(res => this.setState({apiResponse: res}));
  //   }

  //   componentWillMount(){
  //     this.callAPI();
  //   }

  //   // const [posts,setPosts] = useState([])
  //   // useEffect(() => {
  //   //   axios
  //   //   .get('http://localhost:3000/transaction')
  //   //   .then(res => setPosts(res.data))
  //   //   .catch(error => console.log(error));
  //   // });

  // render(){

  // const [posts,setPosts] = useState([])
  // useEffect(() => {
  //   axios
  //   .get('http://localhost:8000/AddExpenseForm')
  //   .then(res => setPosts(res.data))
  //   .catch(error => console.log(error));
  // });

  return (
    <Provider store={store}>
      <div className="App">
        <React.Fragment>
          <BrowserRouter>
            <Route exact path="/" render={() => <Landing posts={Landing} />} />
            <Route path="/Report" component={Report} />
            <Route path="/History" component={History} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Login" component={Login} />
          </BrowserRouter>
        </React.Fragment>
      </div>
    </Provider>
  );
}

export default App;
