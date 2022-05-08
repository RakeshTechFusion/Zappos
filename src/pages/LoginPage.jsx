import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Homepage } from "./Homepage";
import styles from "../Styled/login-styled/login.module.css";
import {  useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let userData = JSON.parse(localStorage.getItem("userData"));

    let email = userData.email;
    let pass = userData.password;

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("empty");
    } else if (!passwordlog !== pass || !emaillog !== email) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };

  const handleClick = () => {
    navigate("/");
    // setHome(!home);
  };

  return (
    <>
      <div>
        {home ? (
          <form onSubmit={handleLogin}>
            <h2>Sign-In</h2>
            <br></br>
            <div>
              <lable>
                <h6>Email</h6>
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>

            <br></br>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <lable>
                  <h6>Password</h6>
                </lable>
                <p style={{ color: "teal", fontSize: "15px" }}>
                  Forgot your password?
                </p>
              </div>

              <input
                type="password"
                className="form-control"
                placeholder=""
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>

            <br></br>
            <div className={styles.parentBtn}>
              <button
                style={{ marginLeft: "70%" }}
                onClick={handleClick}
                type="submit"
                className="btn btn-dark btn-lg btn-block"
              >
                Sign-In
              </button>
            </div>

            <br></br>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input type="checkbox" style={{ marginLeft: "-100px" }} />
              <span style={{ fontSize: "16px" }}>
                Keep me signed in Details
              </span>
            </div>

            {flag && (
              <Alert color="primary" varient="danger">
                <h2>Please fill correct Info....</h2>
              </Alert>
            )}
          </form>
        ) : (
          <Homepage />
        )}
      </div>
    </>
  );
};

export default LoginPage;
