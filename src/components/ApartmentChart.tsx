import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import styled from "styled-components";
import Heading from "./Heading";
import axios from "axios";
import { useEffect, useState } from "react";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  width: 100%;
  padding: 24px 32px;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

interface Apartment {
  status: string; // Trạng thái của căn hộ
}

interface ProcessedData {
  status: string; // Tên nhóm trạng thái
  value: number; // Số lượng căn hộ thuộc nhóm
}

// Mảng bắt đầu với các nhóm trạng thái và giá trị ban đầu
const startData: ProcessedData[] = [
  { status: "Business", value: 0 },
  { status: "Residential", value: 0 },
  { status: "Vacant", value: 0 },
];

async function prepareData(): Promise<ProcessedData[]> {
  // Hàm lấy dữ liệu căn hộ từ API
  const fetchApartments = async (): Promise<Apartment[]> => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/apartments?size=999"
      );
      return response.data.data.result; // Trả về danh sách căn hộ
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu căn hộ:", error);
      return []; // Trả về mảng rỗng khi lỗi
    }
  };

  // Hàm tăng giá trị của một nhóm trong mảng
  function incArrayValue(arr: ProcessedData[], field: string): ProcessedData[] {
    return arr.map((obj) =>
      obj.status === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  // Lấy dữ liệu từ API
  const apartments = await fetchApartments();

  // Xử lý dữ liệu
  const data = apartments
    .reduce<ProcessedData[]>((arr, cur) => {
      const status = cur.status;
      if (status === "Business") return incArrayValue(arr, "Business");
      if (status === "Residential") return incArrayValue(arr, "Residential");
      if (status === "Vacant") return incArrayValue(arr, "Vacant");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0); // Lọc ra các nhóm có giá trị lớn hơn 0

  return data;
}
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ApartmentChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await prepareData();
      setData(result);
    };
    console.log("Test");
    fetchData();
  }, []);

  const totalValue = data.reduce((total, entry) => total + entry.value, 0);
  return (
    <ChartBox>
      <Heading as="h2">Apartment Summary</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="35%"
            cy="50%"
            innerRadius={85}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
            nameKey="status"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={totalValue}
              position="center"
              fontSize={60}
              fontWeight="bold"
              fill="#333"
            />
          </Pie>
          <Tooltip />
          <Legend
            cx="20%"
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={15}
            width={150}
            iconType="circle"
            formatter={(value, entry, index) =>
              `${entry.payload.status}: ${entry.payload.value}`
            }
          ></Legend>
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}
