import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/landingpage.css';
import '../../src/mapui.css';
import '../../src/sidebarUIdata.css';

class Profile extends Component {
    render() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      );
    }
  }
   
  export default Profile;