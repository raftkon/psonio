import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, displayName, password, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(response.user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email alrready in use");
      }
      console.log("An error occurred: ", error);
    }
    // const userDocRef = await createUserDocumentFromAuth(re)
  };
  return (
    <div className="flex flex-col">
      <h2 className="mt-4">Don't have an account</h2>
      <span className="text-xl font-semibold mb-4">
        Sign up with your email and password
      </span>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col w-[30%] justify-center space-y-2"
      >
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            id: "displayName",
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            id: "email",
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "passowrd",
            required: true,
            id: "password",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            id: "confirmPassword",
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <div className="">
          <Button buttonType={"default"}>Sign up</Button>
          {/* <button
            className="px-4 py-2 bg-amber-400 rounded shadow "
            type="submit"
          >
            Sign Up
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
