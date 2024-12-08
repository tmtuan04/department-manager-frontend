import React from "react";
import Table from "../../components/Table";
import ResidentRow from "./ResidentRow";
import Pagination from "../../components/Pagination";
import useResidents from "./useResidents";
import Spinner from "../../components/Spinner";

// const residents = [
//   {
//     id: 1,
//     room: "101",
//     name: "Nguyen Van A",
//     cic: "CIC12345",
//     gender: "male",
//     dob: "1990-01-01",
//     status: "active",
//   },
//   {
//     id: 2,
//     room: "102",
//     name: "Le Thi B",
//     cic: "CIC67890",
//     gender: "female",
//     dob: "1992-02-15",
//     status: "moved",
//   },
//   {
//     id: 3,
//     room: "103",
//     name: "Tran Thi C",
//     cic: "CIC11223",
//     gender: "female",
//     dob: "1985-06-30",
//     status: "active",
//   },
//   {
//     id: 4,
//     room: "104",
//     name: "Pham Minh D",
//     cic: "CIC44567",
//     gender: "male",
//     dob: "1995-12-20",
//     status: "moved",
//   },
//   {
//     id: 5,
//     room: "105",
//     name: "Nguyen Thi E",
//     cic: "CIC77889",
//     gender: "female",
//     dob: "1993-03-22",
//     status: "active",
//   },
//   {
//     id: 6,
//     room: "106",
//     name: "Le Minh F",
//     cic: "CIC99887",
//     gender: "male",
//     dob: "1994-11-12",
//     status: "moved",
//   },
//   {
//     id: 7,
//     room: "107",
//     name: "Tran Thi G",
//     cic: "CIC55443",
//     gender: "female",
//     dob: "1987-07-30",
//     status: "active",
//   },
//   {
//     id: 8,
//     room: "108",
//     name: "Pham Thi H",
//     cic: "CIC33456",
//     gender: "female",
//     dob: "1990-09-05",
//     status: "moved",
//   },
//   {
//     id: 9,
//     room: "109",
//     name: "Nguyen Minh I",
//     cic: "CIC22334",
//     gender: "male",
//     dob: "1991-01-14",
//     status: "active",
//   },
//   {
//     id: 10,
//     room: "110",
//     name: "Le Thi J",
//     cic: "CIC55432",
//     gender: "female",
//     dob: "1992-05-16",
//     status: "moved",
//   },
//   {
//     id: 11,
//     room: "111",
//     name: "Tran Minh K",
//     cic: "CIC33445",
//     gender: "male",
//     dob: "1990-04-22",
//     status: "active",
//   },
//   {
//     id: 12,
//     room: "112",
//     name: "Pham Thi L",
//     cic: "CIC99866",
//     gender: "female",
//     dob: "1993-02-18",
//     status: "moved",
//   },
//   {
//     id: 13,
//     room: "113",
//     name: "Nguyen Thi M",
//     cic: "CIC44322",
//     gender: "female",
//     dob: "1988-08-25",
//     status: "active",
//   },
//   {
//     id: 14,
//     room: "114",
//     name: "Le Minh N",
//     cic: "CIC55788",
//     gender: "female",
//     dob: "1992-07-11",
//     status: "moved",
//   },
//   {
//     id: 15,
//     room: "115",
//     name: "Tran Thi O",
//     cic: "CIC22366",
//     gender: "female",
//     dob: "1994-03-15",
//     status: "active",
//   },
//   {
//     id: 16,
//     room: "116",
//     name: "Pham Minh P",
//     cic: "CIC33489",
//     gender: "male",
//     dob: "1989-10-09",
//     status: "moved",
//   },
//   {
//     id: 17,
//     room: "117",
//     name: "Nguyen Thi Q",
//     cic: "CIC55477",
//     gender: "female",
//     dob: "1995-06-30",
//     status: "active",
//   },
//   {
//     id: 18,
//     room: "118",
//     name: "Le Thi R",
//     cic: "CIC66789",
//     gender: "female",
//     dob: "1991-12-05",
//     status: "moved",
//   },
//   {
//     id: 19,
//     room: "119",
//     name: "Tran Minh S",
//     cic: "CIC77800",
//     gender: "male",
//     dob: "1993-04-18",
//     status: "active",
//   },
//   {
//     id: 20,
//     room: "120",
//     name: "Pham Thi T",
//     cic: "CIC88999",
//     gender: "female",
//     dob: "1994-08-20",
//     status: "moved",
//   },
// ];

export default function ResidentsTable() {
  const { isLoading, residents, error } = useResidents();

  if (isLoading) return <Spinner />;

  console.log(residents);

  console.log(residents.length);
  console.log(typeof residents);
  return (
    <Table columns="0.5fr 1.5fr 2fr 2fr 2fr 2fr 1.2fr 1.2fr">
      <Table.Header>
        <div>ID</div>
        <div>Room</div>
        <div>Name</div>
        <div>CIC</div>
        <div>Gender</div>
        <div>DOB</div>
        <div>Status</div>
        <div>Actions</div>
      </Table.Header>

      {residents.data.map((resident, index) => (
        <ResidentRow resident={resident} key={index} />
      ))}
      <Table.Footer>
        <Pagination count={residents.data.length} />
      </Table.Footer>
    </Table>
  );
}
