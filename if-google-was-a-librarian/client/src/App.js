import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import SavedBooks from "./pages/SavedBooks";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import './App.css';
import logo from "./book.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
        <h2>Google Books React Searcher</h2>
      
      <div className="container.fluid">
        <Router>
          <Navbar />
          <Title />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/books" component={SavedBooks}/>
            <Route exact path="/search" component={Search}/>
            <Route component={NoMatch}/>
            </Switch>
            </Router>
            </div>  
            </div>
      
 
    );
  }
}

export default App;
