import { React, useState } from "react";
import Button from "../UI/Buttons/Button";
import "./Login.css";

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <div className="auth-choice-container">
        <h4>I am a/an ,</h4>
        <div>
          <button
            onClick={() => {
              setIsAdmin(true);
            }}
          >
            Admin <i class="fas fa-user-lock"></i>
          </button>
          <button
            onClick={() => {
              setIsAdmin(false);
            }}
          >
            User <i class="fas fa-user"></i>
          </button>
        </div>
      </div>
      <form>
        <fieldset className="login-fieldset">
          <legend>{isAdmin ? "Admin" : "User"}</legend>
          {!isAdmin ? (
            <div className="userref-container">
              <label
                htmlFor="userref"
                id="user-ref-label"
                onClick={() => {
                  alert("Your unique reference number/Aadhar number:");
                }}
              >
                User Reference No:{" "}
              </label>
              <input type="text" id="userref" name="userref" />
              <br />
            </div>
          ) : (
            <div className="adminid-container">
              <label htmlFor="adminid">Admin Access ID:</label>
              <input type="password" id="adminid" name="adminid" />
              <br />
            </div>
          )}
          <div className="username-container">
            <label htmlFor="uname">Username:</label>
            <input type="text" id="uname" name="uname" /> <br />
          </div>
          <div className="password-container">
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" name="pass" /> <br />
          </div>
          <Button className="login">Login</Button>
        </fieldset>
      </form>
    </div>
  );
}
