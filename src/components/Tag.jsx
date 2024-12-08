import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-align: center;
  margin: auto;
  font-weight: 600;

  //Dynamic status based on received prop
  color: var(--color-${(props) => props.type}-500);
`;

export default Tag;
