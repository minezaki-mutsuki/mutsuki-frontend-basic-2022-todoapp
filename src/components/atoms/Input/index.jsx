import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue = "" }) => {
  const ref = useRef(null);  

    useEffect(() => {
        ref.current.value = defaultValue;
        ref.current.focus()
        const onFocusOut = () => onEditComplete(ref.current.value);
        ref.current.addEventListener("focusout", onFocusOut);
        ref.current.addEventListener("keypress", (event) => {
          if (event.key !== "Enter") return;
          ref.current.removeEventListener("focusout", onFocusOut);
          onEditComplete(ref.current.value);
        });
    },[])

  return <StyledInput ref={ref} />;
};
export default Input;

const StyledInput = styled.input.attrs((props) => ({ ...props, size: "1" }))`
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  border-radius: 2px;
  padding: 0 4px;
  border: none;
  outline: none;
  width: 100%;
`;