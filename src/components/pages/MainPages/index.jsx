import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import Title from "../../atoms/title";
import TodoCard from "../../organisms/TodoCard";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledTodoCardWrapper>
        <TodoCard />
      </StyledTodoCardWrapper>
    </StyledWrapper>
  );
};
export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;

const StyledTodoCardWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 500px;
    margin-top: 20px;
  }
`;