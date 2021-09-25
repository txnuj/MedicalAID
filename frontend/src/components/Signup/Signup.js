import { React, useState } from "react";
import Button from "../UI/Buttons/Button";
import "./Signup.css";

export default function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  //Input storing handlers
  const [name, setName] = useState("");
  const [bloodgroup, setbgroup] = useState("");
  const [age, setage] = useState("");
  const [sex, setsex] = useState("");
  const [district, setdistrict] = useState("");
  const [mobnum, setnum] = useState("");
  const [email, setemail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const [hospname, sethospname] = useState("");
  const [hosploc, sethosploc] = useState("");
  const [hosptype, sethosptype] = useState("");
  const [hospcont, sethospcont] = useState("");

  //userReference number
  const [userRno, setUserRno] = useState("");
  //Input state validity
  const [unameValidity, setUnameValidity] = useState(null);
  const [passValidity, setpassValidity] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [adminIdValidity, setAdminIdValidity] = useState(null);
  const [userRnoValidity, setUserRnoValidity] = useState(null);
  const [nameValidity, setNameValidity] = useState(null);
  const [bgroupValidity, setbloodgroupValidity] = useState(null);
  const [mobValidity, setmobValidity] = useState(null);
  const [ageValidity, setAgeValidity] = useState(null);
  const [emailValidity, setemailValidity] = useState(null);
  const [sexValidity, setsexValidity] = useState(null);
  const [districtValidity, setdistrictValidity] = useState(null);
  const [hospnameValidity, sethospnameValidity] = useState(null);
  const [hosplocValidity, sethosplocValidity] = useState(null);
  const [hosptypeValidity, sethosptypeValidity] = useState(null);
  const [hospcontValidity, sethospcontValidity] = useState(null);

  //Handler functions
  //Input handlers
  //Admin
  const adminIdInputHandler = (e) => {
    setAdminId(e.target.value);
  };
  //User
  const userRnoInputHandler = (e) => {
    setUserRno(e.target.value);
  };
  const unameInputHandler = (e) => {
    setUname(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  const NameInputHandler = (e) => {
    setName(e.target.value);
  };
  //User
  const bgroupInputHandler = (e) => {
    setbgroup(e.target.value);
  };
  const ageInputHandler = (e) => {
    setage(e.target.value);
  };
  const sexInputHandler = (e) => {
    setsex(e.target.value);
  };
  const districtInputHandler = (e) => {
    setdistrict(e.target.value);
  };
  //User
  const numInputHandler = (e) => {
    setnum(e.target.value);
  };
  const emailInputHandler = (e) => {
    setemail(e.target.value);
  };
  const hospnameInputHandler = (e) => {
    sethospname(e.target.value);
  };
  //User
  const hosplocInputHandler = (e) => {
    sethosploc(e.target.value);
  };
  const hosptypeInputHandler = (e) => {
    sethosptype(e.target.value);
  };
  const hospcontInputHandler = (e) => {
    sethospcont(e.target.value);
  };

  //Validity handler
  //Admin
  const adminIdValidityHandler = () => {
    if (adminId.trim() === "") {
      setAdminIdValidity(false);
      setErrorMessage("AdminId not valid!");
    } else {
      setAdminIdValidity(true);
      setErrorMessage("");
    }
  };
  const NameValidityHandler = () => {
    if (name.trim() === "") {
      setNameValidity(false);
      setErrorMessage("Name not valid!");
    } else {
      setNameValidity(true);
      setErrorMessage("");
    }
  };
  const bloodgroupValidityHandler = () => {
    if (bloodgroup.trim() === "") {
      setbloodgroupValidity(false);
      setErrorMessage("Enter any bloodgroup!");
    } else {
      setbloodgroupValidity(true);
      setErrorMessage("");
    }
  };
  const mobValidityHandler = () => {
    if (mobnum.trim() === "") {
      setmobValidity(false);
      setErrorMessage("Enter any Mobile Number!");
    } else {
      setmobValidity(true);
      setErrorMessage("");
    }
  };
  const AgeValidityHandler = () => {
    if (age.trim() === "") {
      setAgeValidity(false);
      setErrorMessage("Enter any Age!");
    } else {
      setAgeValidity(true);
      setErrorMessage("");
    }
  };
  const emailValidityHandler = () => {
    if (email.trim() === "") {
      setemailValidity(false);
      setErrorMessage("Enter any Email!");
    } else {
      setemailValidity(true);
      setErrorMessage("");
    }
  };
  const sexValidityHandler = () => {
    if (sex.trim() === "Male" || sex.trim() === "Female") {
      setsexValidity(false);
      setErrorMessage("Enter valid Gender!");
    } else {
      setsexValidity(true);
      setErrorMessage("");
    }
  };
  const DistrictValidityHandler = () => {
    if (district.trim() === "") {
      setdistrictValidity(false);
      setErrorMessage("Enter any District!");
    } else {
      setdistrictValidity(true);
      setErrorMessage("");
    }
  };
  const userRnoValidityHandler = () => {
    if (userRno.trim() === "") {
      setUserRnoValidity(false);
      setErrorMessage("User Identification number not valid!");
    } else {
      setUserRnoValidity(true);
      setErrorMessage("");
    }
  };
  const nameValidityHandler = () => {
    if (uname.trim() === "" || /\d/.test(uname)) {
      setUnameValidity(false);
      setErrorMessage("Username cannot contain digits or be empty!");
    } else {
      setUnameValidity(true);
      setErrorMessage("");
    }
  };
  const passwordValidityHandler = () => {
    if (password.trim() === "") {
      setpassValidity(false);
      setErrorMessage("Password field cannot be empty!");
    } else {
      setpassValidity(true);
      setErrorMessage("");
    }
  };
  const hospnameValidityHandler = () => {
    if (hospname.trim() === "" || /\d/.test(hospname)) {
      sethospnameValidity(false);
      setErrorMessage("Hospital name cannot contain digits or be empty!");
    } else {
      sethospnameValidity(true);
      setErrorMessage("");
    }
  };
  const hosplocValidityHandler = () => {
    if (hosploc.trim() === "") {
      sethosplocValidity(false);
      setErrorMessage("Location field cannot be empty!");
    } else {
      sethosplocValidity(true);
      setErrorMessage("");
    }
  };
  const hosptypeValidityHandler = () => {
    if (hosptype.trim() === "") {
      sethosptypeValidity(false);
      setErrorMessage("Hospital Type field cannot be empty!");
    } else {
      sethosptypeValidity(true);
      setErrorMessage("");
    }
  };
  const hospcontValidityHandler = () => {
    if (hospcont.trim() === "") {
      sethospcontValidity(false);
      setErrorMessage("Hospital Contact field cannot be empty!");
    } else {
      sethospcontValidity(true);
      setErrorMessage("");
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (isAdmin) {
      if (
        unameValidity &&
        passValidity &&
        adminIdValidity &&
        hospnameValidity &&
        hosptypeValidity &&
        hosplocValidity && 
        hospcontValidity
      ) {
        console.log(uname, password, adminId);
        setErrorMessage("");
      } else {
        setErrorMessage("Form not valid yet! Try again!");
      }
    } else if (!isAdmin) {
      if (
        unameValidity &&
        passValidity &&
        userRnoValidity &&
        nameValidity &&
        bgroupValidity &&
        mobValidity &&
        ageValidity &&
        emailValidity &&
        sexValidity &&
        districtValidity
      ) {
        console.log(uname, password, userRno);
        setErrorMessage("");
      } else {
        setErrorMessage("Form not valid yet! Try again!");
      }
    }
  };

  return (
    <div>
      <div className="auth-choice-container">
        <h4>I am a / an ,</h4>
        <div>
          <button
            onClick={() => {
              setIsAdmin(true);
              setErrorMessage("");
            }}
          >
            Admin <i class="fas fa-user-lock"></i>
          </button>
          <button
            onClick={() => {
              setIsAdmin(false);
              setErrorMessage("");
            }}
          >
            User <i class="fas fa-user"></i>
          </button>
        </div>
      </div>
      <form onSubmit={formSubmitHandler}>
        <fieldset className="login-fieldset">
          <legend>{isAdmin ? "Admin" : "User"}</legend>
          {!isAdmin ? (
            <div className="username-container">
              <label
                htmlFor="userref"
                id="user-ref-label"
                onClick={() => {
                  alert("Your unique Aadhar number:");
                }}
                style={{
                  color: `${userRnoValidity !== false ? "black" : "red"}`,
                }}
              >
                User's Aadhar No: &nbsp;
              </label>
              <input
                type="text"
                id="userref"
                name="userref"
                onChange={userRnoInputHandler}
                onBlur={userRnoValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
              <br />
              <label
                htmlFor="name"
                id="user-ref-label"
                style={{
                  color: `${nameValidity !== false ? "black" : "red"}`,
                }}
              >
                User's Name:{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={NameInputHandler}
                onBlur={NameValidityHandler}
                style={{
                  outlineColor: `${
                    nameValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
              <br />

              <label
                htmlFor="bloodgroup"
                id="user-ref-label"
                style={{
                  color: `${bgroupValidity !== false ? "black" : "red"}`,
                }}
              >
                User's bloodgroup:{" "}
              </label>
              <input
                type="text"
                id="bloodgroup"
                name="bloodgroup"
                onChange={bgroupInputHandler}
                onBlur={bloodgroupValidityHandler}
                style={{
                  outlineColor: `${
                    bgroupValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
              <br />

              <label
                htmlFor="age"
                id="age-label"
                style={{
                  color: `${ageValidity !== false ? "black" : "red"}`,
                }}
              >
                User's age:{"         "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="age"
                name="age"
                onChange={ageInputHandler}
                onBlur={AgeValidityHandler}
                style={{
                  outlineColor: `${ageValidity !== false ? "black" : "salmon"}`,
                }}
              />
              <br />
              <br />

              <label
                htmlFor="sex"
                id="sex-label"
                style={{
                  color: `${sexValidity !== false ? "black" : "red"}`,
                }}
              >
                User's sex:{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="sex"
                name="sex"
                onChange={sexInputHandler}
                onBlur={sexValidityHandler}
                style={{
                  outlineColor: `${sexValidity !== false ? "black" : "salmon"}`,
                }}
              />
              <br />
              <br />

              <label
                htmlFor="mobnum"
                id="mobnum-label"
                style={{
                  color: `${mobValidity !== false ? "black" : "red"}`,
                }}
              >
                User's mob num: &nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="mobnum"
                name="mobnum"
                onChange={numInputHandler}
                onBlur={mobValidityHandler}
                style={{
                  outlineColor: `${mobValidity !== false ? "black" : "salmon"}`,
                }}
              />
              <br />
              <br />

              <label
                htmlFor="email"
                id="email-label"
                style={{
                  color: `${emailValidity !== false ? "black" : "red"}`,
                }}
              >
                User's email:{"      "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={emailInputHandler}
                onBlur={emailValidityHandler}
                style={{
                  outlineColor: `${
                    emailValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
              <br />

              <label
                htmlFor="district"
                id="district-label"
                style={{
                  color: `${districtValidity !== false ? "black" : "red"}`,
                }}
              >
                User's district:{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="district"
                name="district"
                onChange={districtInputHandler}
                onBlur={DistrictValidityHandler}
                style={{
                  outlineColor: `${
                    districtValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
            </div>
          ) : (
            <div className="adminid-container">
              <label
                htmlFor="adminid"
                style={{
                  color: `${adminIdValidity !== false ? "black" : "red"}`,
                }}
              >
                Hospital ID/Admin ID:
              </label>
              <input
                type="password"
                id="adminid"
                name="adminid"
                onChange={adminIdInputHandler}
                onBlur={adminIdValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
              <br />
              <label
                htmlFor="adminid"
                style={{
                  color: `${adminIdValidity !== false ? "black" : "red"}`,
                }}
              >
                Hospital Name:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="hospname"
                name="hospname"
                onChange={hospnameInputHandler}
                onBlur={hospnameValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
              <br />
              <label
                htmlFor="hosploc"
                style={{
                  color: `${adminIdValidity !== false ? "black" : "red"}`,
                }}
              >
                Hospital Locality: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="hosploc"
                name="hosploc"
                onChange={hosplocInputHandler}
                onBlur={hosplocValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
              <br />
              <br />
              <label
                htmlFor="hosptype"
                style={{
                  color: `${adminIdValidity !== false ? "black" : "red"}`,
                }}
              >
                Hospital Type:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="hosptype"
                name="hosptype"
                onChange={hosptypeInputHandler}
                onBlur={hosptypeValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
                      <br />
              <br />
              <label
                htmlFor="hospcont"
                style={{
                  color: `${adminIdValidity !== false ? "black" : "red"}`,
                }}
              >
                Hospital Contact Num:
              </label>
              <input
                type="text"
                id="hospcont"
                name="hospcont"
                onChange={hospcontInputHandler}
                onBlur={hospcontValidityHandler}
                style={{
                  outlineColor: `${
                    userRnoValidity !== false ? "black" : "salmon"
                  }`,
                }}
              />
            </div>
          )}
          <div className="username-container">
            <label
              htmlFor="uname"
              style={{ color: `${unameValidity !== false ? "black" : "red"}` }}
            >
              Create Username: &nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="text"
              id="uname"
              name="uname"
              onChange={unameInputHandler}
              onBlur={nameValidityHandler}
              style={{
                outlineColor: `${unameValidity !== false ? "black" : "salmon"}`,
              }}
            />{" "}
            <br />
          </div>
          <div className="password-container">
            <label
              htmlFor="pass"
              style={{
                color: `${passValidity !== false ? "black" : "red"}`,
              }}
            >
              Create Password: &nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="password"
              id="pass"
              name="pass"
              onChange={passwordInputHandler}
              onBlur={passwordValidityHandler}
              style={{
                outlineColor: `${passValidity !== false ? "black" : "salmon"}`,
              }}
            />{" "}
            <br />
          </div>
          {errorMessage && <p className="error-msg">{errorMessage}</p>}
          <Button className="login">Signup</Button>
        </fieldset>
      </form>
    </div>
  );
}
