import React from "react";
import { Container, Input, Label } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <Container>
      <Label htmlFor={inputOptions.id}>{label}</Label>
      <Input {...inputOptions} />
    </Container>
  );
};

export default FormInput;
