import styled, { css } from "styled-components";

interface RowProps {
  type?: "horizontal" | "vertical"; // type can either be "horizontal" or "vertical"
}

const Row = styled.div<RowProps>`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 16px;
    `}
`;

Row.defaultProps = {
  type: "vertical", // default type is "vertical"
};

export default Row;
