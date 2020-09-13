import React from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import '../../src/landingpage.css';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (
        
        <div class = "navbar">
            <img src = {require('../../src/logo.png')} class = "logo"></img>
            <button type="button" class = "loginbutton">Registration / Log In</button>
        </div>
    )
}

export default Navbar;