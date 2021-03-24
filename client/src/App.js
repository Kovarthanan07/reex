import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Employee/Dashboard';
import Report from './components/Report';
import History from './components/History';
import AddExpense from './components/Employee/AddExpense';
// import Dash from './components/Dash';
// import Login from './components/login';
import Topup from './components/Employee/Topup';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './components/landing';
import Login from './components/Login/login';

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
    <div className="App">
      <React.Fragment>
      <BrowserRouter>
      {/* <Login/> */}
      {/* <Dashboard/> */}
      <Route exact path="/" render={() => <Dashboard posts={Dashboard}/>}/>
      {/* <Route path="/receipt/:id" render={props => <Receipt {...props} posts={posts}/>}/>
      <Route path="/update/:id" render={props => <EditReceipt {...props} posts={posts}/>}/> */}
      {/* <Route path="/" component={Dashboard}/> */}
      <Route path="/Topup" component={Topup}/>
      <Route path="/Report" component={Report}/>
      <Route path="/History" component={History}/>
      <Route path="/AddExpense" component={AddExpense}/>
      <Route path="/Landing" component={Landing}/>
      <Route path="/Login" component={Login}/>
      </BrowserRouter>
    </React.Fragment>
    </div>
  );
}

export default App;
