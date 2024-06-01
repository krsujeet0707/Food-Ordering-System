import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListOrderComponent from './components/ListOrderComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateOrderComponent from './components/CreateOrderComponent';
import UpdateOrderComponent from './components/UpdateOrderComponent';
import ViewOrderComponent from './components/ViewOrderComponent';
import LoginPage from './components/LoginPage';
import './BackgroundP.css';
import Signup from './components/Signup';

function App() {
  return (
    <div className='backimg'>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={LoginPage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route path="/listorders/:id" exact component={ListOrderComponent}></Route>
            <Route path="/orders/:id" component={ListOrderComponent}></Route>
            <Route path="/add-order/:id" component={CreateOrderComponent}></Route>
            <Route path="/view-order/:id" component={ViewOrderComponent}></Route>
            {/* <Route path = "/update-order/:id" component = {UpdateOrderComponent}></Route> */}
          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>

  );
}

export default App;
