import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/Navbar';
import Search from "./pages/Search";
import ASearch from "./pages/ASearch";
import Saved from "./pages/Saved";
import ASaved from "./pages/ASaved";
import Footer from "./components/Footer";
import Home from "./components/Home";
import './App.css';
import logo from "./book.svg";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
     <Navbar />
       <Switch>
         <Route exact path="/" component = {Home} />
         <Route exact path="/anime" component= {ASearch} />
       <Route exact path="/books" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/asaved" component={ASaved} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
