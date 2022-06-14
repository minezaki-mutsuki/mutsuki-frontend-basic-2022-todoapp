import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = ({ visible, errorText }) => {
  return (
    <StyledContent visible={visible}>
      <StyledText>{errorText}</StyledText>
    </StyledContent>
  );
};
export default Alert;

const StyledContent = styled.div`
  position: absolute;
  left: 50%;
  top: 80px;
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  transition: 0.5s;
  transform: translateX(-50%) translateY(-40px);
  opacity: 0;

  ${(props) =>
    props.visible &&
    `
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  `}
`;

const StyledText = styled.div`
  ${TEXT.S}
  color: ${COLOR.WHITE};
`;