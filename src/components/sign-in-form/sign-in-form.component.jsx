import React, { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          alert("Incorrect email or password!");
          break;

        default:
          console.log("An error occurred: ", error);
      }
    }
  };

  return (
    <div className="flex flex-col w-[35%]">
      <h2 className="mt-4">Already have an account?</h2>
      <span className="text-xl font-semibold mb-8">
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            id: "email-in",
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            id: "password-in",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="space-x-2">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGooglePopup}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
