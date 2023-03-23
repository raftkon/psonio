import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <div className="">
      <div className="flex justify-center space-x-40">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
