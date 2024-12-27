import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";

const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  padding: 6px 12px;
  background-color: var(--color-grey-700);
`;

const SearchIcon = styled(HiOutlineSearch)`
  color: white;
`;

const Input = styled.input`
  color: white;
  width: 200px;
  border: none;
  outline: none;
  transition: width 0.3s ease;
  background-color: var(--color-grey-700);

  &:focus {
    width: 300px;
  }
`;

export default function Search() {
  return (
    <SearchStyled>
      <SearchIcon />
      <Input placeholder="Search..." />
    </SearchStyled>
  );
}
