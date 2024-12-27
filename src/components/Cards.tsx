import styled from "styled-components";
import Card from "./Card";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { PiBuildingApartmentLight } from "react-icons/pi";

const CardsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

export default function Cards() {
  return (
    <CardsStyled>
      <Card
        icon={<PiBuildingApartmentLight size={32} />}
        title="Total Apartments"
        value={50}
        color="cyan"
      ></Card>

      <Card
        icon={<MdFamilyRestroom size={32} />}
        title="Total Residents"
        value={50}
        color="emerald"
      ></Card>

      <Card
        icon={<MdFamilyRestroom size={32} />}
        title="Total Apartments"
        value={50}
        color="pink"
      ></Card>

      <Card
        icon={<PiBuildingApartmentFill size={32} />}
        title="Total Apartments"
        value={50}
        color="purple"
      ></Card>
    </CardsStyled>
  );
}
