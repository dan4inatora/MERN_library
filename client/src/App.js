import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/navComponent/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <React.Fragment>
          <Navbar/>
          <Welcome/>
          <Login/>
          <Register/>
          <Dashboard/>
          <Footer/>
        </React.Fragment>
      </Provider>
    )
  } 
}

export default App;
