import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

// Styled components with types
interface StyledFormProps {
  width?: string;
}

const StyledForm = styled.form<StyledFormProps>`
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

interface FieldsProps {
  type?: "vertical" | "horizontal";
}

const Fields = styled.div<FieldsProps>`
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
  type: "vertical" as "vertical",
};

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid var(--color-grey-700);
  border-radius: 15px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  resize: none;
`;

interface FormProps {
  children: ReactNode;
  width?: string;
}

// Extending React.FC to allow additional properties (Buttons, Fields, TextArea)
interface FormComponent extends React.FC<FormProps> {
  Buttons: React.ElementType;
  Fields: React.ElementType;
  TextArea: React.ElementType;
}

const Form: FormComponent = ({ children, width }) => {
  return (
    <StyledForm width={width} >
      {children}
    </StyledForm>
  );
};

Form.Buttons = Buttons;
Form.Fields = Fields;
Form.TextArea = TextArea;

export default Form;
