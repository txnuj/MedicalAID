import React from "react";
import AdminRecords from "./Records/AdminRecords";
import "./Admin.css";
import { districts } from "./helperDistricts";
import { useState } from "react";

export default function Admin() {
  const [recordsActive, setRecordsActive] = useState(true);
  const [recordFormActive, setRecordFormActive] = useState(false);
  const [search, setSearch] = useState("");
  const searchRecordsHandler = () => {
    setRecordsActive(true);
    setRecordFormActive(false);
  };
  const addRecordsHandler = () => {
    setRecordsActive(false);
    setRecordFormActive(true);
  };

  const PATIENT_DETAILS = [
    {
      id: "r1",
      name: "Tanuj",
      bgroup: "O+",
      age: 19,
      sex: "M",
      lastVisit: new Date(2021, 3 - 1, 26).toISOString().slice(0, 10),
      ailments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima dignissimos, aperiam ex perferendis cum minus necessitatibus a id debitis sequi assumenda incidunt laboriosam soluta pariatur voluptas facere magni itaque!Quas consequatur ipsum dicta qui! Quia a at distinctio. Harum est ab repellendus autem tempora! Quasi qui aliquam alias voluptatibus nihil cupiditate dolore praesentium, nesciunt temporibus facere maiores, sint iste?",
    },
    {
      id: "r2",
      name: "Dileep",
      bgroup: "O+",
      age: 20,
      sex: "M",
      lastVisit: new Date(2021, 3 - 1, 21).toISOString().slice(0, 10),
      ailments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima dignissimos, aperiam ex perferendis cum minus necessitatibus a id debitis sequi assumenda incidunt laboriosam soluta pariatur voluptas facere magni itaque!Quas consequatur ipsum dicta qui! Quia a at distinctio. Harum est ab repellendus autem tempora! Quasi qui aliquam alias voluptatibus nihil cupiditate dolore praesentium, nesciunt temporibus facere maiores, sint iste?",
    },
    {
      id: "r3",
      name: "Dileepa",
      bgroup: "O+",
      age: 20,
      sex: "F",
      lastVisit: new Date(2020, 2 - 1, 11).toISOString().slice(0, 10),
      ailments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima dignissimos, aperiam ex perferendis cum minus necessitatibus a id debitis sequi assumenda incidunt laboriosam soluta pariatur voluptas facere magni itaque!Quas consequatur ipsum dicta qui! Quia a at distinctio. Harum est ab repellendus autem tempora! Quasi qui aliquam alias voluptatibus nihil cupiditate dolore praesentium, nesciunt temporibus facere maiores, sint iste?",
    },
  ];

  return (
    <div className="admin-container">
      <div className="admin-card">
        <img
          src="https://mk0ehealtheletsj3t14.kinstacdn.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg"
          alt="profile"
        />
        <div className="card-details">
          <h2>Lorem Ipsum</h2>
          <p>+91 9231235324</p>
          <p>loremimpum@mailing.com</p>
        </div>
      </div>
      <div className="record-choices">
        <button
          onClick={searchRecordsHandler}
          style={{
            pointerEvents: `${recordsActive ? "none" : "all"}`,
          }}
        >
          Search Records
        </button>
        <button
          onClick={addRecordsHandler}
          style={{
            pointerEvents: `${recordFormActive ? "none" : "all"}`,
          }}
        >
          Add Records
        </button>
      </div>
      {recordsActive ? (
        <div>
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Who are you looking for?"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              type="submit"
              class="searchButton"
              style={{ pointerEvents: "none" }}
            >
              <i class="fa fa-search"></i>
            </button>
          </div>

          <div className="record-container">
            <h2>Patient Records</h2>
            <table>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Last Visit</th>
                <th>Ailments</th>
                <th></th>
              </tr>
              {PATIENT_DETAILS.filter((details) => {
                if (search === "") {
                  return details;
                } else if (
                  details.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return details;
                }
              }).map((details) => (
                <AdminRecords
                  key={details.id}
                  name={details.name}
                  bgroup={details.bgroup}
                  age={details.age}
                  sex={details.sex}
                  lastVisit={details.lastVisit}
                  ailments={details.ailments}
                />
              ))}{" "}
            </table>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <div class="form-body">
            <div class="row">
              <div class="form-holder">
                <div class="form-content">
                  <div class="form-items">
                    <h3>Register Patient</h3>
                    <p>Fill in the data below.</p>
                    <form class="requires-validation" novalidate>
                      <div class="col-md-12">
                        <input
                          class="form-control"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                        {/* <div class="valid-feedback">
                          Username field is valid!
                        </div>
                        <div class="invalid-feedback">
                          Username field cannot be blank!
                        </div> */}
                      </div>

                      <div class="col-md-12">
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          placeholder="E-mail Address"
                          required
                        />
                        {/* <div class="valid-feedback">Email field is valid!</div>
                        <div class="invalid-feedback">
                          Email field cannot be blank!
                        </div> */}
                      </div>

                      <div class="col-md-12">
                        <select>
                          <option>Blood Group</option>
                          <option>O+</option>
                          <option>O-</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                        </select>
                        {/* <div class="valid-feedback">
                          You selected a position!
                        </div>
                        <div class="invalid-feedback">
                          Please select a position!
                        </div> */}
                      </div>

                      <div class="col-md-12">
                        <input
                          class="form-control"
                          type="text"
                          name="mobile"
                          placeholder="Mobile Number"
                          maxLength="13"
                          required
                        />
                        {/*  <div class="valid-feedback">
                          Password field is valid!
                        </div>
                        <div class="invalid-feedback">
                          Password field cannot be blank!
                        </div> */}
                      </div>

                      <div
                        class="col-md-12 mt-3"
                        style={{
                          marginTop: "2rem",
                          fontSize: "1.2rem",
                          padding: "10px",
                        }}
                      >
                        <label class="mb-3 mr-1" for="gender">
                          Gender:{" "}
                        </label>

                        <input
                          type="radio"
                          class="btn-check"
                          name="gender"
                          id="male"
                          autocomplete="off"
                          required
                        />
                        <label
                          class="btn btn-sm btn-outline-secondary"
                          for="male"
                        >
                          Male
                        </label>

                        <input
                          type="radio"
                          class="btn-check"
                          name="gender"
                          id="female"
                          autocomplete="off"
                          required
                        />
                        <label
                          class="btn btn-sm btn-outline-secondary"
                          for="female"
                        >
                          Female
                        </label>

                        <input
                          type="radio"
                          class="btn-check"
                          name="gender"
                          id="secret"
                          autocomplete="off"
                          required
                        />
                        <label
                          class="btn btn-sm btn-outline-secondary"
                          for="secret"
                        >
                          Secret
                        </label>
                        {/*   <div class="valid-feedback mv-up">
                          You selected a gender!
                        </div>
                        <div class="invalid-feedback mv-up">
                          Please select a gender!
                        </div> */}
                      </div>
                      <div
                        class="col-md-12 date-container"
                        style={{ margin: "20px 0px 30px 0px" }}
                      >
                        <label
                          for="date"
                          style={{
                            fontSize: "1.2rem",
                            marginRight: "10px",
                            marginLeft: "10px",
                          }}
                        >
                          {" "}
                          Date of birth:{" "}
                        </label>
                        <input
                          class="form-control"
                          type="date"
                          name="date"
                          required
                        />
                        {/* <div class="valid-feedback">Email field is valid!</div>
                        <div class="invalid-feedback">
                          Email field cannot be blank!
                        </div> */}
                      </div>
                      <div class="col-md-12" style={{ margin: "25px 0px" }}>
                        <select>
                          <option selected disabled hidden>
                            District
                          </option>
                          {districts.map((district) => (
                            <option value={district}>{district}</option>
                          ))}
                        </select>
                        {/* <div class="valid-feedback">
                          You selected a position!
                        </div>
                        <div class="invalid-feedback">
                          Please select a position!
                        </div> */}
                      </div>

                      <div class="ailments">
                        <textarea
                          class="form-ailments"
                          id="invalidCheck"
                          placeholder="Ailments/Reason of visit"
                          required
                        />

                        {/* <div class="invalid-feedback">
                          Please confirm that the entered data are all correct!
                        </div> */}
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label class="form-check-label">
                          I confirm that all data are correct
                        </label>
                        {/* <div class="invalid-feedback">
                          Please confirm that the entered data are all correct!
                        </div> */}
                      </div>

                      <div class="form-button mt-3">
                        <button
                          id="submit"
                          type="submit"
                          class="btn btn-primary"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
