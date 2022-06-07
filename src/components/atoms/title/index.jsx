import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.M}
  font-family: ${FONTFAMILY.ROBOTO};
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.L}
  }
`;