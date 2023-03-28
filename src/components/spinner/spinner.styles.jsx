import styled from "styled-components";
import tw from "twin.macro";

export const SpinnerOverlay = styled.div`
  ${tw`
    h-[60vh]
    w-full
    flex
    justify-center
    items-center
  `}
`;

export const SpinnerContainer = styled.div`
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  ${tw`
    inline-block
    w-[50px]
    h-[50px]
    border-[3px]
    border-[rgba(195,195,195,0.6)]
    rounded-full
    border-t-[#636767]
  `}
`;
