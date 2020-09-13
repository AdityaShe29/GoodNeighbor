import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import LandingPage_Background1 from '../components/landingpage_background1'
import MapUI from "../components/mapui";
import SideBar from '../components/sidebar';

const MainPage = () => {
    return (
        <div>
            <SideBar>
            </SideBar>
            <MapUI>
            </MapUI>
        </div>
    )
}

export default MainPage;
