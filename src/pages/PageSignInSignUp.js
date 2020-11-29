import React from "react";
import Signin from "../components/Signin";
import SignUp from "../components/SignUp";
import "../styles/pages/signInSignUp.scss";

const PageSignInSignUp = () => {
  return (
    <div className="page_login conteneur_large">
      <div className="_container signIn">
        <h5 className="">I already have an account</h5>
        <Signin />
      </div>

      <div className="_container signUp">
        <h5>Sign up with e-mail and password</h5>
        <SignUp />
      </div>
    </div>
  );
};

export default PageSignInSignUp;
