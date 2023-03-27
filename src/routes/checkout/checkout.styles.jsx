import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex flex-col py-3 items-center min-h-[80vh] w-[70%] mx-auto`}
`;

export const HeaderTitlesContainer = styled.div`
  ${tw`border-b-2 flex justify-between w-[100%] text-sm font-medium pb-2`}
`;
export const HeaderTitleContainer = styled.div`
  ${tw`w-[23%] last:w-[8%]`}
`;

export const HeaderTitle = styled.span`
  ${tw``}
`;

export const Total = styled.span`
  ${tw`ml-auto text-xl m-4 font-medium`}
`;
