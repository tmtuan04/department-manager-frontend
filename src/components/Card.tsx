import styled from "styled-components";

const CardStyled = styled.div`
  background-color: var(--color-grey-700);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
`;

const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--color-${(props) => props.color}-100);
  color: var(--color-${(props) => props.color}-700);
`;

const Title = styled.p`
  font-size: 16px;
`;
const Value = styled.p`
  font-size: 20px;
  line-height: 1;
`;

interface CardProps {
  color: any;
  icon: any;
  title: any;
  value: any;
}
export default function Card({ color, icon, title, value }: CardProps) {
  return (
    <CardStyled>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </CardStyled>
  );
}
