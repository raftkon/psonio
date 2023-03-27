import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex items-center min-h-[100px] py-3 mx-auto w-[100%]`}
`;

export const ImgContainer = styled.div`
  ${tw`w-[23%] h-52 pr-4`}
`;

export const Img = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  ${tw`rounded h-full w-full`}
`;

export const Title = styled.span`
  ${tw`w-[23%] pl-4`}
`;

export const InnerContainer = styled.div`
  ${tw`cursor-pointer  w-[23%] flex  items-center`}
`;

export const Cross = styled.span`
  ${tw`cursor-pointer text-3xl`}
`;

export const Quantity = styled.span`
  ${tw`text-xl mx-3`}
`;

export const Price = styled.span`
  ${tw`w-[23%]`}
`;

export const Remove = styled.div`
  ${tw`cursor-pointer w-[8%] pl-3`}
`;
