import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex py-2`}
`;

export const Img = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  ${tw`rounded w-20 h-24 object-cover`}
`;

export const InnerContainer = styled.div`
  ${tw`flex flex-col ml-4 justify-center items-start text-xs`}
`;

export const Title = styled.h2`
  ${tw`font-medium`}
`;

export const DetailsContainer = styled.div``;

export const Detail = styled.span``;
