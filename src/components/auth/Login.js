import React, { useState } from "react";
import "./Login.css";
import ApiManager from "../../modules/ApiManager";
const Login = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = { ...credentials };
    stateToChange[e.target.id] = e.target.value;
    setCredentials(stateToChange);
  };

  const handleCheckBoxChange = e => {
    setIsChecked(e.target.checked);
  };
  const handleLogin = e => {
    e.preventDefault();
    props.setUser();
    // props.history.push("/");
    const getUsers = new Request(ApiManager.getAll("users"));
    fetch(getUsers).then(response => {
      if (response.status === 200) {
        // console.log("response successful");
        if (isChecked === true) {
          localStorage.setItem("credentials", JSON.stringify(credentials));
          sessionStorage.setItem("credentials", JSON.stringify(credentials));
          props.history.push("/");
        } else {
          sessionStorage.setItem("credentials", JSON.stringify(credentials));
          props.history.push("/");
        }
      } else {
        window.alert("Please enter the correct email/ password");
      }
    });
  };

  const handleAuth = e => {
    ApiManager.getAll("users").then(response => {
      console.log({ response });
      if (response.data.code === 200) {
        console.log("response successful");
        handleLogin(e);
      } else {
        window.alert("Please enter the correct email/ password");
      }
    });
  };
  //   users.map(user => {
  //     user
  //       ? handleLogin(e)
  //       : window.alert("Please enter the correct email/ password");
  //   });

  function validateForm() {
    let length = credentials.length > 0;
    return length;
  }

  return (
    <form
      className="login-form"
      onSubmit={handleLogin}
      disabled={!validateForm()}
    >
      <fieldset className="form">
        <h3 className="header">Please Sign In</h3>
        <div className="form-grid">
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="Email Address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email Address</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button className="login" type="submit">
          Sign In To Your Folo
        </button>
        <label className="option">Remember Me</label>
        <input
          className="option"
          type="checkbox"
          onChange={handleCheckBoxChange}
        ></input>
      </fieldset>
    </form>
  );
};

export default Login;
