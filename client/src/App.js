import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/registerComponent/Register';
import Navbar from './components/navComponent/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/footerComponent/Footer';
import Welcome from './components/Welcome';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
//import 'bootstrap/dist/js/bootstrap.bundle.min';



class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <React.Fragment>
          <Navbar/>
          <Welcome/>
          
          <Register/>
          <Dashboard/>
          <Footer/>
        </React.Fragment>
      </Provider>
    )
  } 
}

export default App;
