import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  ${tw`
  mt-auto
  border
  rounded-2xl
  h-40
  flex
  flex-col
  items-center
  justify-center
  px-10
  `}
`;

export const FormContainer = styled.form`
  ${tw`h-28 min-w-[500px] space-y-4`}
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
`;
