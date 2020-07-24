import React, { Component } from 'react';
import Login from './components/loginComponent/Login';
import Register from './components/registerComponent/Register';
import Navbar from './components/navComponent/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/footerComponent/Footer';
import Welcome from './components/welcomeComponent/Welcome';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {Route, BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar/>
              <Route  exact path='/' component={Welcome}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>      
            <Footer/>
          </React.Fragment>
        </Router>
      </Provider>
    )
  } 
}

export default App;
