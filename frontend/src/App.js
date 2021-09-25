import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Login from "./components/Login/Login";

import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [adminAuth, setAdminAuth] = useState(false);
  const adminAuthHandler = (admin) => {
    if (admin) {
      setAdminAuth(true);
      console.log(admin);
    }
  };
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login setAuth={adminAuthHandler} />
          </Route>
          <Route exact path="/admin">
            <Admin authorized={adminAuth} />
          </Route>
          <NotFound />
        </Switch>
      </React.Fragment>
    </Router>
  );
}
export default App;
