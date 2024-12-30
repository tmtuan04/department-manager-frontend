import styled from "styled-components";

const CardStyled = styled.div`
  background-color: var(--color-grey-0);
  color: var(--color-grey-500);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 22px;
  font-weight: 700;
  align-items: center;

  /* Thiết lập CSS Grid */
  display: grid;
  grid-template-columns: 1fr 1fr; /* Chỉ 1 cột */
  grid-template-rows: 1fr 1.5fr;
  gap: 8px; /* Khoảng cách giữa các phần tử */
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  grid-column: 2;
  grid-row: 2;
`;

const Icon = styled.div<{ color: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--color-${(props) => props.color}-100);
  color: var(--color-${(props) => props.color}-700);
`;

const Title = styled.p`
  font-size: 16px;
  grid-column: 1 / span 2;
  grid-row: 1; /* Title nằm ở hàng thứ 1 */
  color: black;
`;

const Value = styled.div`
  font-size: 30px;
  line-height: 1;
  grid-row: 2; /* Value nằm ở hàng thứ 2 */
  grid-column: 1;
  margin: auto;
  color: black;
`;

const Span = styled.span`
  display: block;
  font-size: 12px;
  color: var(--color-grey-600);
`;

interface CardProps {
  color: string;
  icon: React.ReactNode;
  title: string | number;
  value: string | number;
  iconDetails: string;
}

export default function Card({
  color,
  icon,
  title,
  value,
  iconDetails,
}: CardProps) {
  return (
    <CardStyled>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <IconBox>
        <Icon color={color}>{icon}</Icon>
        <Span>{iconDetails}</Span>
      </IconBox>
    </CardStyled>
  );
}
