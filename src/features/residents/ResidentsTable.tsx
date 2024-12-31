import Table from "../../components/Table";
import ResidentRow from "./ResidentRow";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

interface ResidentsTableProps {
  keyword: string;
}

export default function ResidentsTable({ keyword }: ResidentsTableProps) {
  const [residents, setResidents] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);

  const apiResidents = async (page: number = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/residents?size=10&page=${page}&filter=name~'${keyword}'`
      );
      setResidents(response.data.data.result);
      setTotalPages(response.data.data.totalPages);
      setTotalElements(response.data.data.totalElements);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiResidents(curPage);
  }, [keyword, curPage]);

  const handlePageChange = (page: number) => {
    setCurPage(page);
  };
  return (
    <Table columns="0.5fr 1fr 1.5fr 1.5fr 1fr 1.5fr 1fr 1fr">
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
