import React from "react";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import FeeAndFundRow from "./FeeAndFundRow";

const feesAndFunds = [
  {
    id: 1,
    name: "Tuition Fee",
    description: "Fee for semester-based education",
    unitCost: 5000000,
    type: "Fee",
  },
  {
    id: 2,
    name: "Library Fund",
    description: "Fund for maintaining library resources",
    unitCost: 200000,
    type: "Fund",
  },
  {
    id: 3,
    name: "Maintenance Fee",
    description: "Fee for building maintenance",
    unitCost: 300000,
    type: "Fee",
  },
  {
    id: 4,
    name: "Sports Fund",
    description: "Fund to support sports activities",
    unitCost: 150000,
    type: "Fund",
  },
  {
    id: 5,
    name: "Registration Fee",
    description: "Fee for new student registration",
    unitCost: 1000000,
    type: "Fee",
  },
  {
    id: 6,
    name: "Alumni Fund",
    description: "Fund for alumni activities",
    unitCost: 250000,
    type: "Fund",
  },
  {
    id: 7,
    name: "Exam Fee",
    description: "Fee for examination arrangements",
    unitCost: 500000,
    type: "Fee",
  },
  {
    id: 8,
    name: "Technology Fund",
    description: "Fund to upgrade technology infrastructure",
    unitCost: 400000,
    type: "Fund",
  },
  {
    id: 9,
    name: "Lab Fee",
    description: "Fee for laboratory usage",
    unitCost: 700000,
    type: "Fee",
  },
  {
    id: 10,
    name: "Research Fund",
    description: "Fund to support research projects",
    unitCost: 1000000,
    type: "Fund",
  },
  {
    id: 11,
    name: "Hostel Fee",
    description: "Fee for hostel accommodation",
    unitCost: 2000000,
    type: "Fee",
  },
  {
    id: 12,
    name: "Cultural Fund",
    description: "Fund for cultural events",
    unitCost: 300000,
    type: "Fund",
  },
  {
    id: 13,
    name: "Transportation Fee",
    description: "Fee for transportation services",
    unitCost: 500000,
    type: "Fee",
  },
  {
    id: 14,
    name: "Emergency Fund",
    description: "Fund for unforeseen expenses",
    unitCost: 500000,
    type: "Fund",
  },
  {
    id: 15,
    name: "Health Fee",
    description: "Fee for medical services",
    unitCost: 100000,
    type: "Fee",
  },
  {
    id: 16,
    name: "Scholarship Fund",
    description: "Fund to support student scholarships",
    unitCost: 2000000,
    type: "Fund",
  },
  {
    id: 17,
    name: "Parking Fee",
    description: "Fee for vehicle parking",
    unitCost: 100000,
    type: "Fee",
  },
  {
    id: 18,
    name: "Community Fund",
    description: "Fund for community development",
    unitCost: 300000,
    type: "Fund",
  },
  {
    id: 19,
    name: "Club Fee",
    description: "Fee for student club memberships",
    unitCost: 150000,
    type: "Fee",
  },
  {
    id: 20,
    name: "Innovation Fund",
    description: "Fund for innovative projects",
    unitCost: 500000,
    type: "Fund",
  },
];

export default function FeeAndFundTable() {
  return (
    <Table columns="0.5fr 1.5fr 4fr 2fr 2fr 1.2fr">
      <Table.Header>
        <div>ID</div>
        <div>Name</div>
        <div>Description</div>
        <div>Unit Cost</div>
        <div>Type</div>
        <div>Actions</div>
      </Table.Header>

      {feesAndFunds.map((feeOrFund) => (
        <FeeAndFundRow feeOrFund={feeOrFund} />
      ))}
      <Table.Footer>
        <Pagination count={feesAndFunds.length} />
      </Table.Footer>
    </Table>
  );
}
