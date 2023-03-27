import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`absolute right-20 top-16 rounded border border-black flex flex-col 
      p-5 w-64 h-80 z-10 bg-white transition`}
`;

export const ItemsContainer = styled.div`
  ${tw`h-60 flex flex-col overflow-auto mb-1`}
`;

export const Text = styled.span`
  ${tw`flex h-[80%] justify-center items-center font-light`}
`;
