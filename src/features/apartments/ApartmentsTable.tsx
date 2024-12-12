import React from "react";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import ApartmentRow from "./ApartmentRow";

const apartments = [
  {
    room: "101",
    ownerName: "Nguyen Van A",
    contact: "0123456789",
    residentCount: 4,
    status: "occupied",
  },
  {
    room: "102",
    ownerName: "Tran Thi B",
    contact: "0987654321",
    residentCount: 3,
    status: "available",
  },
  {
    room: "103",
    ownerName: "Le Van C",
    contact: "0345678901",
    residentCount: 2,
    status: "occupied",
  },
  {
    room: "104",
    ownerName: "Pham Thi D",
    contact: "0129876543",
    residentCount: 1,
    status: "available",
  },
  {
    room: "105",
    ownerName: "Vu Tien E",
    contact: "0912345678",
    residentCount: 5,
    status: "occupied",
  },
  {
    room: "106",
    ownerName: "Nguyen Thi F",
    contact: "0976543210",
    residentCount: 2,
    status: "available",
  },
  {
    room: "107",
    ownerName: "Do Van G",
    contact: "0901234567",
    residentCount: 3,
    status: "occupied",
  },
  {
    room: "108",
    ownerName: "Hoang Thi H",
    contact: "0987123456",
    residentCount: 4,
    status: "available",
  },
  {
    room: "109",
    ownerName: "Phan Van I",
    contact: "0345678123",
    residentCount: 1,
    status: "occupied",
  },
  {
    room: "110",
    ownerName: "Bui Thi J",
    contact: "0912765432",
    residentCount: 2,
    status: "available",
  },
  {
    room: "111",
    ownerName: "Tran Van K",
    contact: "0123345678",
    residentCount: 6,
    status: "occupied",
  },
  {
    room: "112",
    ownerName: "Nguyen Thi L",
    contact: "0987123123",
    residentCount: 2,
    status: "available",
  },
  {
    room: "113",
    ownerName: "Pham Van M",
    contact: "0345678901",
    residentCount: 4,
    status: "occupied",
  },
  {
    room: "114",
    ownerName: "Le Thi N",
    contact: "0908765432",
    residentCount: 5,
    status: "available",
  },
  {
    room: "115",
    ownerName: "Vu Van O",
    contact: "0912345678",
    residentCount: 3,
    status: "occupied",
  },
  {
    room: "116",
    ownerName: "Dang Thi P",
    contact: "0976543210",
    residentCount: 2,
    status: "available",
  },
  {
    room: "117",
    ownerName: "Tran Van Q",
    contact: "0123456789",
    residentCount: 1,
    status: "occupied",
  },
  {
    room: "118",
    ownerName: "Bui Thi R",
    contact: "0987654321",
    residentCount: 4,
    status: "available",
  },
  {
    room: "119",
    ownerName: "Nguyen Van S",
    contact: "0345678123",
    residentCount: 3,
    status: "occupied",
  },
  {
    room: "120",
    ownerName: "Pham Thi T",
    contact: "0912345678",
    residentCount: 2,
    status: "available",
  },
];

export default function ApartmentsTable() {
  return (
    <Table columns="1.5fr 2fr 2fr 1.5fr 1.2fr 1.2fr">
      <Table.Header>
        <div>Room</div>
        <div>Owner Name</div>
        <div>Contact</div>
        <div>ResidentCount</div>
        <div>Status</div>
        <div>Actions</div>
      </Table.Header>

      {apartments.map((apartment) => (
        <ApartmentRow apartment={apartment} />
      ))}

      <Table.Footer>
        <Pagination count={apartments.length} />
      </Table.Footer>
    </Table>
  );
}
