import React from "react";
import Signin from "../components/Signin";
import SignUp from "../components/SignUp";
import "../styles/pages/signInSignUp.scss";

const PageSignInSignUp = () => {
  return (
    <div className="page_login conteneur_large">
      <div className="_container signIn">
        <h3 className="">I already have an account</h3>
        <p>Sign in with e-mail and password</p>
        <Signin />
      </div>

      <div className="_container signUp">
        <h3>I do not have an account</h3>
        <p>Sign in with e-mail and password</p>
        <SignUp />
      </div>
    </div>
  );
};

export default PageSignInSignUp;
