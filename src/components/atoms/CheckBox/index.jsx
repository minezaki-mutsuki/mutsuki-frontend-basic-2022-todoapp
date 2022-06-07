import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

const Checkbox = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={check} />
    </StyledButton>
  );
};
export default Checkbox;

const StyledButton = styled.button`
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  background: none;
  outline: none;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  & > img {
    display: none;
    width: 100%;
    height: 100%;
  }
  &:hover {
    & > img {
      display: block;
    }
  }
`;