import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { capitalize } from "../utils/helpers";

const StyledSelector = styled.div`
  border: none;
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  align-items: center;
  transition: none;
  padding: 6px 6px 6px 0px;
  width: 100%;
`;

const StyledOption = styled.div`
  border: none;
  display: flex;
  gap: 5px;
`;

const StyledInput = styled.input`
  width: 20px; /* Điều chỉnh kích thước */
  height: 20px; /* Điều chỉnh kích thước */
  appearance: none; /* Loại bỏ giao diện mặc định */
  border: 1px solid var(--color-grey-400); /* Viền ô */
  border-radius: 50%; /* Tạo hình tròn */
  outline: none;
  cursor: pointer;
  background-color: var(--color-grey-100);

  &:checked {
    background-color: var(--color-green-500); /* Màu khi được chọn */
    border-color: var(--color-grey-400); /* Viền khi được chọn */
  }

  &:hover {
    border-color: var(--color-grey-400); /* Hiệu ứng khi hover */
  }
`;

// const SelectorContext = createContext();

// export default function Selector({
//   id,
//   children,
//   type,
//   value: defaultValue,
//   onChange,
// }) {
//   const [selection, setSelection] = useState(defaultValue || "");

//   const select = setSelection;

//   console.log(selection);

//   return (
//     <SelectorContext.Provider value={{ selection, select, onChange }}>
//       <StyledSelector id={id} type={type} value={selection}>
//         {children}
//       </StyledSelector>
//     </SelectorContext.Provider>
//   );
// }

// function Option({ option }) {
//   const { selection, select, onChange } = useContext(SelectorContext);
//   return (
//     <StyledOption>
//       <StyledInput
//         type="radio"
//         id={option}
//         checked={selection === option}
//         value={option}
//         onChange={(e) => {
//           select(option), onChange(e.target.value);
//         }}
//       />
//       <label>{capitalize(option)}</label>
//     </StyledOption>
//   );
// }

// Selector.Option = Option;

export default function Selector({ options, onChange, id, value, label }) {
  return (
    <StyledSelector id={id}>
      <label>{label}</label>
      {options.map((option) => (
        <StyledOption key={option}>
          <StyledInput
            type="radio"
            id={id}
            name={id}
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          <label htmlFor={option}>{capitalize(option)}</label>
        </StyledOption>
      ))}
    </StyledSelector>
  );
}
