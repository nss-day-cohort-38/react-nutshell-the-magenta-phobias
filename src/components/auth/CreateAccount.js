import React, { useState } from "react";
import "./CreateAccount.css";

const CreateAccount = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);

  const handleInputFieldChange = event => {
    const stateToChange = { ...credentials };
    stateToChange[event.target.id] = event.target.value;
    setCredentials(stateToChange);
  };
  const handleSignInCheckBox = event => {
    setIsChecked(event.target.checked);
  };
  const handleCreateAccountLogin = event => {
    event.preventDefault();
    props.setUser();
    props.history.push("/");
    if (isChecked === true) {
      localStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    } else {
      sessionStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    }
  };

  return (
    <form className="create-account-form" onSubmit={handleCreateAccountLogin}>
      <fieldset className="form">
        <h3 className="header">Create Your Account</h3>
        <div className="sign-in-form-grid">
          <input
            onChange={handleInputFieldChange}
            type="email"
            id="create-email"
            placeholder="Enter Email Address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email Address</label>

          <input
            onChange={handleInputFieldChange}
            type="password"
            id="create-password"
            placeholder="Create Your Password"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button className="login" type="submit">Sign In</button>
        <label className="option">Remember Me</label>
        <input className="option" type="checkbox" onChange={handleSignInCheckBox}></input>
      </fieldset>
    </form>
  );
};

export default CreateAccount;
