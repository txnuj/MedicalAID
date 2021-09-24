import React from "react";
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/Signup" exact component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
export default App;
