import styled from "styled-components";
import Heading from "../../../components/Heading";
import Row from "../../../components/Row";
import { FcCalendar } from "react-icons/fc";
import Cards from "../../../components/Cards";
import ApartmentFeeChart from "../../../components/ApartmentFeeChart";
import ApartmentChart from "../../../components/ApartmentChart";
import ResidentsChart from "../../../components/ResidentChart";

const CalendarStyled = styled.label`
  font-size: 14px;
  padding: 6px 12px;
  text-align: center;
  font-weight: 600;
  border: 1px solid var(--color-grey-700);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-200);
    border-color: var(--color-grey-600);
  }
`;

function Calendar() {
  const today = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return (
    <CalendarStyled>
      <FcCalendar size={28} />
      {`   ${month} ${year}, ${day}`}
    </CalendarStyled>
  );
}

const PieChartBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export default function Overview() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">
          <>Overview</>
          <Calendar />
        </Heading>
      </Row>

      <Cards />
      <PieChartBoxes>
        <ApartmentChart />
        <ResidentsChart />
      </PieChartBoxes>
      <ApartmentFeeChart />
    </>
  );
}
