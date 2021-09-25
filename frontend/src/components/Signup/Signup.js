import { React, useState } from "react";
import Button from "../UI/Buttons/Button";
import "./Signup.css";

export default function Login() {
  //Input storing handlers
  /*   const [name, setName] = useState("");
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
  const [hospcontValidity, sethospcontValidity] = useState(null); */

  //Handler functions
  //Input handlers
  //Admin
  /*   const adminIdInputHandler = (e) => {
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
  }; */

  return (
    <div className="register">
      <fieldset className="reg-container">
        <legend>Register your hospital</legend>
        <form>
          <div className="register-form-container">
            <p>Hospital details</p>
            <input
              className="signup-text-input"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="signup-text-input"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="signup-text-input"
              type="text"
              placeholder="Mobile"
              maxLength="13"
              required
            />
            <textarea placeholder="Address" rows="7" cols="60" required />
            <div className="ownership-container">
              <label for="pdf">Proof of Ownership:</label>
              <input type="file" name="pdf" accept="application/pdf" />
            </div>
          </div>{" "}
          <div class="reach-button-container">
            <Button className="reach-out-button">
              Reach us <i class="far fa-envelope"></i>
            </Button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
