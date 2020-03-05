import React, { useState } from "react";

const Login = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [newUserCredentials, setNewUserCredentials] = useState({
    email: "",
    password: ""
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = { ...credentials };
    stateToChange[e.target.id] = e.targe.value;
    setCredentials(stateToChange);
  };

  const handleCheckBoxChange = e => {
    setIsChecked(e.target.checked);
  };
  const handleLogin = e => {
    e.preventDefault();
    props.setUser();
    props.history.push("/");
    if (isChecked === true) {localStorage.setItem("credentials", JSON.stringify(credentials));
      sessionStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    } else {
      sessionStorage.setItem("credentials", JSON.stringify(credentials));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please Sign In</h3>
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
        <button type="submit">Sign In To Your Folo</button>
        <label>Remember Me</label>
        <input type="checkbox" onChange={handleCheckBoxChange}></input>
      </fieldset>
    </form>
  );
};

export default Login;
