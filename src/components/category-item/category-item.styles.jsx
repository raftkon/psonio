import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`
  flex-auto
  flex
  min-w-[30%] 
  h-[240px]
  items-center
  justify-center 
  mt-0 
  mx-2 
  mb-4 
  overflow-hidden
  hover:cursor-pointer 
  first:mr-2 
  last:ml-2 
  rounded-xl 
  shadow-2xl
  `}
`;

export const Img = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  ${tw`
      w-[100%] 
      h-[100%] 
      bg-cover 
      bg-center 
      object-cover 
      transition 
      duration-1000 
      group-hover:scale-110 
      group-hover:ease-in-out
  `}
`;

export const InnerContainer = styled.div`
  ${tw`
    h-[90px] 
    py-0 
    px-6 
    flex 
    rounded-sm 
    flex-col 
    items-center
    justify-center 
    border-black 
    bg-white 
    opacity-70
    absolute 
    group-hover:opacity-90 
  `}
`;

export const Title = styled.h2`
  ${tw`text-xl text-[#4a4a4a] my-0 mx-2 font-bold`}
`;

export const Text = styled.p`
  ${tw`font-extralight text-lg`}
`;
