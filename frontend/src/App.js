import React, { useState } from "react";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Helper/PrivateRoute";

import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Route path="/login">
            <Login onAdminAuth={adminAuthHandler} />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
export default App;
