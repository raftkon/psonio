import styled from "styled-components";
import tw from "twin.macro";
import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  ${tw`px-4 py-2 rounded transition
        duration-300 font-semibold hover:border
        bg-black text-white border border-black hover:bg-white hover:text-black
        flex
        justify-center
        items-center
        `}/* ${({ disabled }) => disabled && `${tw`animate-spin`}`} */
`;

export const GoogleSignInButton = styled(BaseButton)`
  ${tw`bg-[#4285f4] border-[#4285f4] hover:text-white hover:bg-[#3273dc] hover:border-[#3273dc]`}
`;

export const InvertedButton = styled(BaseButton)`
  ${tw`bg-white text-black border border-black hover:bg-black  hover:text-white`}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  ${tw`w-4 h-4`}
`;
