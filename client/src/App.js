import React from 'react';
import Login from './components/loginComponent/Login';
import Register from './components/registerComponent/Register';
import Navbar from './components/navComponent/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/footerComponent/Footer';
import Welcome from './components/welcomeComponent/Welcome';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {Route, BrowserRouter as Router, useHistory} from 'react-router-dom'

function App  () {
    let history = useHistory();
    return(
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar history={history}/>
              <Route  exact path='/' component={Welcome}/>
              <Route history={history} path='/login' component={Login}/>
              <Route path='/register' component={Register}/> 
              <Route path='/dashboard' component={Dashboard}/>      
            <Footer/>
          </React.Fragment>
        </Router>
      </Provider>
    )
  
}

export default App;
