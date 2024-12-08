import React from "react";
import styled from "styled-components";
import { capitalize } from "../utils/helpers";

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

  /* &:hover {
    cursor: pointer;
  } */
`;

const StyledSelect = styled.select`
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 5px 15px;
  border: 1px solid var(--color-grey-700);

  /* appearance: none; 
  position: relative; 

  &:focus {
    border-color: var(--color-grey-700);
    outline: none;
  }

  /* Tạo mũi tên tùy chỉnh */
  /* &::after {
    content: "▼"; 
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 5px; 
    color: black; 
    pointer-events: none; 
  } */
`;

function Label({ label }) {
  return <StyledLabel>{label}</StyledLabel>;
}

function Input({ id, type, value, onChange }) {
  return (
    <StyledInput id={id} type={type} defaultValue={value} onChange={onChange} />
  );
}

function Select({ id, options, value, onChange }) {
  return (
    <StyledSelect id={id} defaultValue={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {capitalize(option)}
        </option>
      ))}
    </StyledSelect>
  );
}

export default function FormField({ children }) {
  return <StyledFormField>{children}</StyledFormField>;
}

FormField.Label = Label;
FormField.Input = Input;
FormField.Select = Select;
