import styled from "styled-components";
import tw from "twin.macro";

// ${tw}
export const Container = styled.div`
  ${tw`flex flex-col w-[35%]`}
`;
export const TextHaveAccount = styled.h2`
  ${tw`mt-4`}
`;

export const TextSignIn = styled.span`
  ${tw`text-xl font-semibold mb-8`}
`;

export const Form = styled.form`
  ${tw`space-y-6`}
`;

export const ButtonsContainer = styled.div`
  ${tw`space-x-2`}
`;
