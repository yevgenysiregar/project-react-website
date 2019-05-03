import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LogIn from "./Pages/login";
import SignUp from "./Pages/signup";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
};

export default App;
