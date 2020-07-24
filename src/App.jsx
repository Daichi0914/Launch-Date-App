import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./AUTH/SignIn";
import SignUp from "./AUTH/SignUp";
import SignedInRoute from './AUTH/SignedInRoute';
import Header from './HEADER/Header';
import Contents from './CONTENTS/Contents';

import { AuthProvider } from "./AUTH/AuthService";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

window.parent.document.body.style.zoom = 1.2; // 最初から120%で描画

const App = () => {
  const [menuClick, setMenuClick] = useState('Top');

  return (
    <AuthProvider>
      <Router>
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp} />
        <SignedInRoute exact path='/Launch-Date-App' component={Contents}>
          <Header setMenuClick={setMenuClick} />
          <Contents menuClick={menuClick} />
        </SignedInRoute>
      </Router>
    </AuthProvider>
  );
};

export default App;