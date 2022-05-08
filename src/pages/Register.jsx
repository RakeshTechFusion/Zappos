import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import LoginPage from "./LoginPage";
import styles from "../Styled/login-styled/login.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !cpassword) {
      setFlag(true);
    } else if (!password == !cpassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("userData", JSON.stringify({email,password}));

      setLogin(!login);
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <>
      <div style={{ textAlign: "center", margin: "1%" }}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
          alt=""
        />
      </div>

      <div
        style={{
          width: "27%",
          margin: "auto",
          border: "1px solid black",
          padding: "1%",
        }}
      >
        {login ? (
          <form onSubmit={handleSubmit}>
            <h2>Create account</h2>

            <div>
              <lable>
                <h6>Your Name</h6>
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div>
              <lable>
                <h6>Email </h6>
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div>
              <lable>
                <h6>Password </h6>
              </lable>
              <input
                type="password"
                className="form-control"
                placeholder=" At least 6 characters"
                onChange={(event) => setPassword(event.target.value)}
              />
              <p style={{ fontSize: "13px", color: "gray" }}>
                ! Password must be at least 6 characters.
              </p>
            </div>

            <div>
              <lable>
                <h6>Re-enter password</h6>
              </lable>
              <input
                type="password"
                className="form-control"
                placeholder=""
                onChange={(event) => setCpassword(event.target.value)}
              />
            </div>

            <div style={{display:"flex" , margin:"2% -5%"}} className={styles.parentBtn}>
              <button
                onClick={handleClick}
                type="submit"
                className="btn btn-dark btn-lg btn-block"
              >
                Create your Zappos account
              </button>
            </div>
            <br></br>

            <p style={{ fontSize: "11px" }}>
              Don't have an email address or need additional help? Don't worry!
              Give us a call at (800) 927-7671
            </p>
            <p style={{ fontSize: "11px" }}>
              Registering means you agree to the Zappos terms of use and privacy
              policy
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <p style={{ fontSize: "13px" }}>Already have an account ? </p>
              <p style={{fontSize: "15px" , cursor:"pointer" , color:"darkcyan"}} onClick={handleClick}>Sign-In</p>
            </div>

            {flag && (
              <Alert color="primary" varient="danger">
                <h2>Please fill all fields..</h2>
              </Alert>
            )}
          </form>
        ) : (
          <LoginPage />
        )}
      </div>
    </>
  );
};

export default Register;
