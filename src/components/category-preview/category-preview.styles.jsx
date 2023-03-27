import styled from "styled-components";
import tw from "twin.macro";

export const Title = styled.h2`
  ${tw`
    text-2xl
    my-4
    font-semibold
  `}
`;

export const Products = styled.div`
  ${tw`
    grid
    grid-cols-4
    gap-x-2
    gap-y-4
    mb-6
  `}
`;
