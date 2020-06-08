import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

import { AuthProvider } from "./AuthService";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp} />
      </Router>
    </AuthProvider>
  );
};

export default App;