import React from "react";
import Signin from "../components/Signin";
import "../styles/pages/signInSignUp.scss";

const PageSignInSignUp = () => {
  return (
    <div className="page_signIn">
      <div className="_container ">
        <h4 className="">I already have an account</h4>
        <span>Sign in with e-mail and password</span>
        <Signin />
      </div>
    </div>
  );
};

export default PageSignInSignUp;
