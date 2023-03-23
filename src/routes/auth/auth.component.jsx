import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    createUserDocumentFromAuth(response.user);
  };

  return (
    <div className="">
      <h2 className="font-semibold text-2xl">Sign In</h2>
      <button
        className="px-4 py-2 bg-amber-300 rounded-lg "
        onClick={logGoogleUser}
      >
        Sign in With google
      </button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
