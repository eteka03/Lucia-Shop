import React, { useState } from "react";
import { FormGroup } from "reactstrap";
import "../styles/formulaire.scss";
import CustomButton from "./CustomButton";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

const Signin = () => {
  const [userInfo, setUserInfos] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userInfo;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserInfos({});
    } catch (error) {}
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfos({ ...userInfo, [name]: value });
  };
  return (
    <form className="formulaire signin" onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          placeholder=""
          name="email"
          type="email"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="password">Password</label>
        <input
          placeholder=""
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
