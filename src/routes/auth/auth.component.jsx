import React from "react";
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
    <div>
      <button onClick={logGoogleUser}>Sign in With google</button>
      <h2>Sign In</h2>
    </div>
  );
};

export default Authentication;
