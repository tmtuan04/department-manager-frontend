import styled from "styled-components";
import Card from "./Card";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { FaCar } from "react-icons/fa";

import axios from "axios";
import { useEffect, useState } from "react";

const CardsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

export default function Cards() {
  const [numOfApartments, setNumOfApartments] = useState<number>(0);
  const [numOfResidents, setNumOfResidents] = useState<number>(0);
  const [numOfVehicles, setNumOfVehicles] = useState<number>(0);
  const [totalAmountLast30Days, setTotalAmountLast30Days] = useState<number>(0);

  // Fetch total apartments when the component mounts
  useEffect(() => {
    const totalApartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/apartments?size=999"
        );
        setNumOfApartments(response.data.data.totalElements);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };

    const totalResidents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/residents?size=999"
        );
        setNumOfResidents(response.data.data.totalElements);
      } catch (error) {
        console.error("Error fetching residents:", error);
      }
    };

    const totalVehicles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/vehicles?size=999"
        );
        setNumOfVehicles(response.data.data.totalElements);
      } catch (error) {
        console.error("Error fetching residents:", error);
      }
    };

    const fetchTotalAmountLast30Days = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/invoices/total"
        );
        // Tính toán tổng amount trong 30 ngày gần nhất
        const invoices = response.data.data;
        const today = new Date();
        const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));

        const totalAmount = invoices.reduce((total: number, invoice: any) => {
          const createDate = new Date(invoice.createDate);
          if (createDate >= thirtyDaysAgo) {
            total += invoice.totalAmount; // Thêm vào totalAmount nếu thuộc 30 ngày gần nhất
          }
          return total;
        }, 0);

        setTotalAmountLast30Days(totalAmount);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    totalApartments();
    totalResidents();
    totalVehicles();
    fetchTotalAmountLast30Days();
    console.log("Test");
  }, []);

  return (
    <CardsStyled>
      <Card
        icon={<PiBuildingApartmentLight size={40} />}
        title="Total Apartments"
        value={numOfApartments}
        color="cyan"
        iconDetails="Apartments"
      />

      <Card
        icon={<MdFamilyRestroom size={40} />}
        title="Total Residents"
        value={numOfResidents}
        color="emerald"
        iconDetails="Residents"
      />

      <Card
        icon={<FaCar size={40} />}
        title="Total Vehicles"
        value={numOfVehicles} // Hiển thị giá trị đã chia cho 1 triệu
        color="pink"
        iconDetails="Vehicles"
      />

      <Card
        icon={<GiPayMoney size={40} />}
        title="Last 30 days"
        value={`₫${(totalAmountLast30Days / 1000000).toFixed(2)}M`} // Hiển thị giá trị đã chia cho 1 triệu
        color="purple"
        iconDetails="Open Invoices"
      />
    </CardsStyled>
  );
}
