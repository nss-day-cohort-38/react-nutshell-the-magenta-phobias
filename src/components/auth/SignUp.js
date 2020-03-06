import React, { useState } from "react";

const SignUp = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);

  const handleInputFieldChange = event => {
    const stateToChange = { ...credentials };
    stateToChange[event.target.id] = event.target.value;
    setCredentials(stateToChange);
  };
  const handleCheckBox = event => {
    setIsChecked(event.target.checked);
  };
  const handleLogin = event => {
    event.preventDefault();
    props.setUser();
    props.history.push("/");
  };
  if (isChecked === true) {
    localStorage.setItem("credentials", JSON.stringify(credentials));
    props.history.push("/");
  } else {
    sessionStorage.setItem("credentials", JSON.stringify(credentials));
    props.history.push("/");
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Create Your Account</h3>
        <div className="sign-in-form-grid">
          <input
            onChange={handleInputFieldChange}
            type="email"
            id="email"
            placeholder="Enter Email Address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email Address</label>

          <input
            onChange={handleInputFieldChange}
            type="password"
            id="password"
            placeholder="Create Your Password"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign In</button>
        <label>Remember Me</label>
        <input type="checkbox" onChange={handleCheckBox}></input>
      </fieldset>
    </form>
  );
};

export default SignUp;
