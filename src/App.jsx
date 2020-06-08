import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./HOME/Home";
import SignIn from "./AUTH/SignIn";
import SignUp from "./AUTH/SignUp";
import SignedInRoute from './AUTH/SignedInRoute';

import { AuthProvider } from "./AUTH/AuthService";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <SignedInRoute exact path='/' component={Home} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp} />
      </Router>
    </AuthProvider>
  );
};

export default App;