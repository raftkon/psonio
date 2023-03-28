import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`container mx-auto flex flex-col min-h-screen `}
`;

export const InnerContainer = styled.div`
  ${tw`px-6 py-2 mb-4 border-b-2 
        flex justify-between items-center`}
`;

export const LogoContainer = styled.div`
  ${tw`drop-shadow-md`}
`;

export const CapitalLetter = styled.span`
  ${tw`text-6xl text-rose-500 font-extrabold`}
`;

export const RestLetters = styled.span`
  ${tw`text-3xl text-amber-400`}
`;

export const LinksContainer = styled.div`
  ${tw`space-x-4 flex items-center`}
`;

export const ShopLink = styled(Link)`
  ${tw`font-medium
  hover:border-b-2
  hover:border-black
  transition
  duration-200
  `}
`;

export const SignInLink = styled(Link)`
  ${tw`text-white px-4 py-2    rounded-lg bg-rose-600 
        transition-all duration-300 hover:translate-x-2 hover:shadow hover:shadow-rose-300`}
`;

export const CartContainer = styled.div`
  ${tw`relative flex justify-center`}
`;

export const Footer = styled.footer`
  ${tw`mt-auto border-t-2 min-w-[100%] h-[60px]`}
`;
