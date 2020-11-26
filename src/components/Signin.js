import React, { useState } from "react";
import { FormGroup } from "reactstrap";
import "../styles/formulaire.scss";

const Signin = () => {
  const [userInfo, setUserInfos] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*setUserInfos({ email: "", password: "" });*/
    console.log(userInfo);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfos({ ...userInfo, [name]: value });
  };
  return (
    <form className="formulaire signin" onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <input type="submit" value="Sign In" />
    </form>
  );
};

export default Signin;
