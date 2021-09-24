import React from "react";
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
export default App;
