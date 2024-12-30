import Table from "../../components/Table";
import ResidentRow from "./ResidentRow";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const PAGE_SIZE = 10;

export default function ResidentsTable({}) {
  const [residents, setResidents] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);

  const apiResidents = async (page: number = 2) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/residents?size=${PAGE_SIZE}&page=${page}`
      );
      // console.log(response.data.data.result);
      setResidents(response.data.data.result);
      setTotalPages(response.data.data.totalPages);
      setTotalElements(response.data.data.totalElements);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiResidents(curPage);
  }, [curPage]);

  const handlePageChange = (page: number) => {
    setCurPage(page);
  };

  return (
    <Table columns="0.5fr 0.7fr 1.5fr 1fr 0.8fr 1fr 1fr 1fr">
      <Table.Header>
        <div>STT</div>
        <div>Room</div>
        <div>Name</div>
        <div>CCCD</div>
        <div>Gender</div>
        <div>DOB</div>
        <div>Status</div>
        <div>Actions</div>
      </Table.Header>

      {residents.map((resident, index) => (
        <ResidentRow resident={resident} index={index} />
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
