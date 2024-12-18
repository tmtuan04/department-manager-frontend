import Search from "./Search";
import styled from "styled-components";
import Add from "./Add";

const AddAndSearchStyled = styled.div`
  display: inline-flex;
  align-items: center;
  // justify-content: space-between;
  gap: 10px;
`;

export default function AddAndSearch({ children, title }) {
  return (
    <AddAndSearchStyled>
      <Add title={title}>{children}</Add>
      <Search />
    </AddAndSearchStyled>
  );
}
