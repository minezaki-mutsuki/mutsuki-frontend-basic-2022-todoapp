import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledShadow />
      <img src={pencil} />
    </StyledButton>
  );
};
export default EditButton;

const StyledShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GRAY};
  transition: 0.2s;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0;
  & > ${StyledShadow} {
    opacity: 0;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2;
    }
  }
`;