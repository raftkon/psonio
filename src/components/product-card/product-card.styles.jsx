import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw` 
    w-full 
    flex 
    flex-col 
    rounded 
    relative 
    items-center 
    h-80
    border
    shadow-[0_4px_8px_0_rgba(31,38,135,0.37)]
    bg-[rgba(255,255,255,0.45)]`}
`;

export const Img = styled.img`
  ${tw`w-full h-[90%] rounded object-cover group-hover:opacity-[90%]`}
`;
export const InnerContainer = styled.div`
  ${tw`w-full h-[10%] flex justify-between items-center text-sm px-2`}
`;

export const Detail = styled.span`
  src: ${(props) => props.imageUrl};
  alt: ${(props) => props.name};
  ${tw`font-semibold`}
`;
