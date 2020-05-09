import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<h1 className="navbar-brand">Books from Google!</h1>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={window.location.pathname === "/search" ? "active" : ""}>
                            <Link className="nav-link" to="/search">Search Books</Link>
                        </li>
                        <li className={window.location.pathname === "/" ? "active" : ""}>
                            <Link className="nav-link" to="/">Saved Books</Link>
                        </li>
                    </ul>
                    <br />
                </div>
            </nav>
        </div>
    )
}
export default Navbar;