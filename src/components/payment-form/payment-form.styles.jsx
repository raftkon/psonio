import styled from "styled-components";
import tw from "twin.macro";

export const PaymentFormContainer = styled.div`
  ${tw`
    h-80
    flex
    flex-col
    items-center
    justify-center
  `}
`;

export const FormContainer = styled.form`
  ${tw`h-24 min-w-[500px]`}
`;
