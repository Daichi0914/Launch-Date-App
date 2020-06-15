import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./AUTH/SignIn";
import SignUp from "./AUTH/SignUp";
import SignedInRoute from './AUTH/SignedInRoute';
import Top from "./TOP/Top";
import MyList from './MY_LIST/MyList';
import Settings from "./SETTING/Settings";

import { AuthProvider } from "./AUTH/AuthService";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

window.parent.document.body.style.zoom = 1.2;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp} />
        <SignedInRoute exact path='/Launch-Date-App' component={Top} />
        {/* <Route exact path='/MyList' component={MyList} /> */}
        {/* <Route exact path='/Settings' component={Settings} /> */}
      </Router>
    </AuthProvider>
  );
};

export default App;