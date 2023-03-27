import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex flex-col`}
`;

export const Label = styled.label`
  ${tw`font-light`}
`;

export const Input = styled.input`
  ${tw`border-b-2 px-2`}
`;
