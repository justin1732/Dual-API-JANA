import React, { Component } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
// import API from "../../utils/API"

class Home extends Component {

    render(){
    return(
        <div className="home">
            <h1>Home page for the dual-API searches</h1>
           <Link to= "/anime" className="btn btn-danger">To Anime</Link>
           <Link to= "/books" className="btn btn-danger">To Books</Link>
           <Link to ="/saved" className="btn btn-info">To Saved</Link>
           <Link to ="/asaved" className="btn btn-info">To ASaved</Link>
           <form>
               <div className="html">
                <h3>This search result brought to you by JANA</h3>
                </div>
           </form>
                            </div>
 
    )
    }
};

export default Home;