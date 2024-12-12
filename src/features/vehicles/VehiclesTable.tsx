import React from "react";
import Table from "../../components/Table";
import VehicleRow from "./VehicleRow";
import Pagination from "../../components/Pagination";

const vehicles = [
  {
    id: 1,
    vehicleNumber: "29A-12345",
    ownerName: "Nguyen Van A",
    type: "Car",
    registrationDate: "2023-01-15",
  },
  {
    id: 2,
    vehicleNumber: "30B-54321",
    ownerName: "Tran Thi B",
    type: "Motorbike",
    registrationDate: "2022-06-20",
  },
  {
    id: 3,
    vehicleNumber: "31C-67890",
    ownerName: "Le Van C",
    type: "Truck",
    registrationDate: "2023-03-11",
  },
  {
    id: 4,
    vehicleNumber: "32D-09876",
    ownerName: "Pham Thi D",
    type: "Car",
    registrationDate: "2023-07-05",
  },
  {
    id: 5,
    vehicleNumber: "33E-11223",
    ownerName: "Vu Tien E",
    type: "Motorbike",
    registrationDate: "2021-09-25",
  },
  {
    id: 6,
    vehicleNumber: "34F-44556",
    ownerName: "Nguyen Thi F",
    type: "Car",
    registrationDate: "2020-11-18",
  },
  {
    id: 7,
    vehicleNumber: "35G-77889",
    ownerName: "Do Van G",
    type: "Truck",
    registrationDate: "2022-01-10",
  },
  {
    id: 8,
    vehicleNumber: "36H-99001",
    ownerName: "Hoang Thi H",
    type: "Motorbike",
    registrationDate: "2023-04-22",
  },
  {
    id: 9,
    vehicleNumber: "37I-22334",
    ownerName: "Phan Van I",
    type: "Car",
    registrationDate: "2022-08-13",
  },
  {
    id: 10,
    vehicleNumber: "38J-55667",
    ownerName: "Bui Thi J",
    type: "Motorbike",
    registrationDate: "2021-12-30",
  },
  {
    id: 11,
    vehicleNumber: "39K-88990",
    ownerName: "Tran Van K",
    type: "Truck",
    registrationDate: "2023-02-15",
  },
  {
    id: 12,
    vehicleNumber: "40L-11223",
    ownerName: "Nguyen Thi L",
    type: "Car",
    registrationDate: "2023-09-08",
  },
  {
    id: 13,
    vehicleNumber: "41M-33445",
    ownerName: "Pham Van M",
    type: "Motorbike",
    registrationDate: "2022-10-21",
  },
  {
    id: 14,
    vehicleNumber: "42N-55678",
    ownerName: "Le Thi N",
    type: "Truck",
    registrationDate: "2021-03-29",
  },
  {
    id: 15,
    vehicleNumber: "43O-88991",
    ownerName: "Vu Van O",
    type: "Car",
    registrationDate: "2022-07-14",
  },
  {
    id: 16,
    vehicleNumber: "44P-11224",
    ownerName: "Dang Thi P",
    type: "Motorbike",
    registrationDate: "2023-05-06",
  },
  {
    id: 17,
    vehicleNumber: "45Q-33446",
    ownerName: "Tran Van Q",
    type: "Car",
    registrationDate: "2022-02-28",
  },
  {
    id: 18,
    vehicleNumber: "46R-55679",
    ownerName: "Bui Thi R",
    type: "Truck",
    registrationDate: "2021-11-17",
  },
  {
    id: 19,
    vehicleNumber: "47S-88992",
    ownerName: "Nguyen Van S",
    type: "Motorbike",
    registrationDate: "2020-09-12",
  },
  {
    id: 20,
    vehicleNumber: "48T-11225",
    ownerName: "Pham Thi T",
    type: "Car",
    registrationDate: "2023-06-04",
  },
];

export default function VehiclesTable() {
  return (
    <Table columns="0.5fr 1.5fr 2fr 2fr 2fr 2fr 1.2fr">
      <Table.Header>
        <div>ID</div>
        <div>Vehicle Number</div>
        <div>Owner Name</div>
        <div>Room</div>
        <div>Type</div>
        <div>Registration Date</div>
        <div>Actions</div>
      </Table.Header>

      {vehicles.map((vehicle) => (
        <VehicleRow vehicle={vehicle} />
      ))}
      <Table.Footer>
        <Pagination count={vehicles.length} />
      </Table.Footer>
    </Table>
  );
}
