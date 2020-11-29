import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { FormGroup } from "reactstrap";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

const SignUp = () => {
  const [newUser, setNewUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, displayName, password, confirmPassword } = newUser;

    if (password !== confirmPassword) {
      alert("passowrds don't match");
      return;
    }

    try {
      console.log(newUser);
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setNewUser({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <form className="formulaire signup" onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="displayName">Name</label>
        <input
          name="displayName"
          type="text"
          onChange={handleChange}
          required
        />
      </FormGroup>

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
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <CustomButton type="submit">Sign Up</CustomButton>
      </FormGroup>
    </form>
  );
};

export default SignUp;
