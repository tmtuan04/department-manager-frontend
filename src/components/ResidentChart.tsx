import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
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
  { status: "Absent", value: 0 },
  { status: "Moved", value: 0 },
  { status: "Resident", value: 0 },
  { status: "Temporary", value: 0 },
];

const COLORS = ["#eab308", "#ef4444", "#00C49F", "#ec4899"]; // Màu sắc cho các nhóm trạng thái

async function prepareData(): Promise<ProcessedData[]> {
  // Hàm lấy dữ liệu căn hộ từ API
  const fetchApartments = async (): Promise<Apartment[]> => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/residents?size=999"
      );
      return response.data.data.result; // Trả về danh sách căn hộ
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu cư dân:", error);
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
      if (status === "Absent") return incArrayValue(arr, "Absent");
      if (status === "Moved") return incArrayValue(arr, "Moved");
      if (status === "Resident") return incArrayValue(arr, "Resident");
      if (status === "Temporary") return incArrayValue(arr, "Temporary");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0); // Lọc ra các nhóm có giá trị lớn hơn 0

  return data;
}

export default function ResidentsChart() {
  const [data, setData] = useState<ProcessedData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await prepareData();
      setData(result);
    };
    fetchData();
  }, [data]);

  // Tính tổng giá trị để hiển thị ở giữa PieChart
  const totalValue = data.reduce((total, entry) => total + entry.value, 0);

  return (
    <ChartBox>
      <Heading as="h2">Residents Summary</Heading>
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
            {/* Hiển thị tổng số ở giữa biểu đồ */}
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
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={15}
            width={150}
            iconType="circle"
            formatter={(value, entry, index) =>
              `${entry.payload.status}: ${entry.payload.value}`
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}
