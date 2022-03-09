import React, { Component } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar fixed-top">
                <span className="navbar-brand mb-0 h1">📖 Anime and Books Search</span>
                <Link to="/">Home</Link>
                <div>
                    <Link to="/books">Books</Link>
                    <Link to ="/anime">Anime</Link>
                    <Link to="/saved">Saved</Link>
                    <Link to="/asaved">ASaved</Link>
                    <Link to="/results">Results</Link>
                </div>
            </nav>

        )
    }
};

export default Navbar;