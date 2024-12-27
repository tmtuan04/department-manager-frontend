import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Heading from "./Heading";
import styled from "styled-components";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: 10px;

  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const feeData = [
  { month: "January", fees_due: 5641.87, fees_collected: 6356.75 },
  { month: "February", fees_due: 5020.84, fees_collected: 6901.61 },
  { month: "March", fees_due: 6029.0, fees_collected: 4459.96 },
  { month: "April", fees_due: 9475.39, fees_collected: 5120.06 },
  { month: "May", fees_due: 6834.72, fees_collected: 4426.51 },
  { month: "June", fees_due: 5634.86, fees_collected: 7829.25 },
  // { month: "July", fees_due: 6739.51, fees_collected: 8653.55 },
  // { month: "August", fees_due: 5400.8, fees_collected: 8930.17 },
  // { month: "September", fees_due: 9009.9, fees_collected: 6848.28 },
  // { month: "October", fees_due: 5958.21, fees_collected: 5051.16 },
  // { month: "November", fees_due: 9963.78, fees_collected: 4151.07 },
  // { month: "December", fees_due: 6525.44, fees_collected: 4271.92 },
];

export default function ApartmentFeeChart() {
  return (
    <ChartBox>
      <Heading as="h2">Apartment Fee Collection Chart</Heading>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart
          data={feeData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#c084fc"
            domain={[0, 10000]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#86efac"
            domain={[0, 10000]}
          />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="fees_due" fill="#c084fc" barSize={60}>
            <LabelList dataKey="fees_due" position="top" />
          </Bar>
          <Bar
            yAxisId="right"
            dataKey="fees_collected"
            fill="#86efac"
            barSize={60}
          >
            <LabelList dataKey="fees_collected" position="top" />
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}
