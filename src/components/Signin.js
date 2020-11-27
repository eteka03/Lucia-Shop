import React, { useState } from "react";
import { FormGroup } from "reactstrap";
import "../styles/formulaire.scss";
import CustomButton from "./CustomButton";
import { signInWithGoogle } from "../firebase/firebase.utils";

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
      <FormGroup>
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="button">
          Sign In with Google
        </CustomButton>
      </FormGroup>
    </form>
  );
};

export default Signin;
