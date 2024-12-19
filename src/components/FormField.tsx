import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { capitalize } from "../utils/helpers";

// Styled components for form field
const StyledFormField = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 3.5fr;
`;

const StyledLabel = styled.label`
  border: 1px solid var(--color-grey-700);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  background-color: var(--color-grey-300);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100%;
`;

const StyledInput = styled.input`
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 5px 15px;
  border: 1px solid var(--color-grey-700);
`;

const StyledSelect = styled.select`
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 5px 15px;
  border: 1px solid var(--color-grey-700);
`;

// Type definitions for components
interface LabelProps {
  label: string;
}

interface InputProps {
  id: any;
  type: any;
  value: any;
  onChange: any;
  readOnly?: boolean; // Thêm thuộc tính readOnly vào đây
}

interface SelectProps {
  id: string;
  options: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

// Form field components
function Label({ label }: LabelProps) {
  return <StyledLabel>{label}</StyledLabel>;
}

function Input({ id, type, value, onChange, readOnly }: InputProps) {
  return <StyledInput id={id} type={type} value={value} onChange={onChange} readOnly={readOnly}/>;
}

function Select({ id, options, value, onChange }: SelectProps) {
  return (
    <StyledSelect id={id} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {capitalize(option)}
        </option>
      ))}
    </StyledSelect>
  );
}

// FormField component with nested form components
interface FormFieldProps {
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> & {
  Label: React.FC<LabelProps>;
  Input: React.FC<InputProps>;
  Select: React.FC<SelectProps>;
} = ({ children }) => {
  return <StyledFormField>{children}</StyledFormField>;
};

// Adding components to FormField as static properties
FormField.Label = Label;
FormField.Input = Input;
FormField.Select = Select;

export default FormField;
