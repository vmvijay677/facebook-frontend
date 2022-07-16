import React, { useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../Actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.authReducer.loading);

  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img
          src="https://westwind.org/wp-content/uploads/2018/11/facebook-logo-png.png"
          alt=""
        ></img>
        <div className="Webname">
          <h1>facebook.com</h1>
          <h3>The Next Gen</h3>
        </div>
      </div>

      {/* Signup - right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              ></input>
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Email"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            ></input>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            ></input>

            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              ></input>
            )}
          </div>

          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "16px",
              alignSelf: "center",
              fontWeight: "500",
            }}
          >
            * Password mismatch!
          </span>

          <div>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Signup"}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
