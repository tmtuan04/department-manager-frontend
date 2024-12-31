import Table from "../../components/Table";
import VehicleRow from "./VehicleRow";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

interface VehiclesTableProps {
  keyword: string;
}

export default function VehiclesTable({ keyword }: VehiclesTableProps) {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);

  const apiVehicles = async (page: number = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/vehicles?page=${page}&size=10&filter=id~'${keyword}'`
      );

      console.log(response.data.data.result);
      setVehicles(response.data.data.result);
      setTotalPages(response.data.data.totalPages);
      setTotalElements(response.data.data.totalElements);
    } catch (error) {
      console.error("Error fetching apartments: ", error);
    }
  };

  useEffect(() => {
    apiVehicles(curPage);
  }, [keyword, curPage]);

  const handlePageChange = (page: number) => {
    setCurPage(page);
  };

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Vehicle Number</div>
        <div>Room</div>
        <div>Type</div>
        <div>Registration Date</div>
        <div>Actions</div>
      </Table.Header>

      {vehicles.map((vehicle) => (
        <VehicleRow vehicle={vehicle} />
      ))}
      <Table.Footer>
        <Pagination
          totalPages={totalPages}
          curPage={curPage}
          totalElements={totalElements}
          onPageChange={handlePageChange}
        />
      </Table.Footer>
    </Table>
  );
}
