import React from "react";
import styled, { css } from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 30px 0px 30px;
  border-radius: 20px;
  background-color: var(--color-grey-0);
  ${(props) =>
    css`
      width: ${props.width || "500px"};
    `}

  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
`;

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Fields = styled.div`
  ${(props) =>
    props.type === "vertical" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px 10px;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 10px 10px;
    `}
  width: 100%;
`;

Fields.defaultProps = {
  type: "vertical",
};

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid var(--color-grey-700);
  border-radius: 15px;
  white-space: pre-wrap; /* Ensures text wraps properly */
  word-wrap: break-word; /* Allows long words to break and wrap onto the next line */
  overflow-wrap: break-word; /* Same as word-wrap, for better compatibility */
  resize: none; /* Optional: Disables resizing */
`;

export default function Form({ children, width, onSubmit }) {
  return (
    <StyledForm width={width} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}

Form.Buttons = Buttons;
Form.Fields = Fields;
Form.TextArea = TextArea;
