import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './header';
import Login from './login';
import Home from './home';
import Register from './register';
import Mycart from './cart';
import Dashboard from './dashboard';
import Myproduct from './myproduct';

function App() {
  return (
    <HashRouter>
       <Header/>
       <Route exact path='/' component={Home}/>
       <Route exact path='/dashboard' component={Dashboard}/>
       <Route exact path ="/myproduct" component={Myproduct}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/register' component={Register}/>
       <Route exact path='/cart' component={Mycart}/>
      
    </HashRouter>
  );
}

export default App;


