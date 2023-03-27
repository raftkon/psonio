import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { Container, InnerContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <Container>
      <InnerContainer>
        <SignInForm />
        <SignUpForm />
      </InnerContainer>
    </Container>
  );
};

export default Authentication;
