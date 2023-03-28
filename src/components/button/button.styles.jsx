import styled from "styled-components";
import tw from "twin.macro";

export const BaseButton = styled.button`
  ${tw`px-4 py-2 rounded transition
        duration-300 font-semibold hover:border
        bg-black text-white border border-black hover:bg-white hover:text-black
        `}
`;

export const GoogleSignInButton = styled(BaseButton)`
  ${tw`bg-[#4285f4] border-[#4285f4] hover:text-white hover:bg-[#3273dc] hover:border-[#3273dc]`}
`;

export const InvertedButton = styled(BaseButton)`
  ${tw`bg-white text-black border border-black hover:bg-black  hover:text-white`}
`;
