import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledShadow />
      <StyledWrapper>
        <img src={plus} />
        <StyledLabel>タスクを追加</StyledLabel>
      </StyledWrapper>
    </StyledButton>
  );
};
export default AddTaskButton;

const StyledShadow = styled.div`
  background-color: ${COLOR.GREEN};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  position: relative;
  cursor: pointer;
  & > ${StyledShadow} {
    opacity: 0;
  }
  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2;
    }
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  & > img {
    width: 20px;
    height: 20px;
  }
`;

const StyledLabel = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S};
  margin-left: 10px;
  white-space: nowrap;
`;