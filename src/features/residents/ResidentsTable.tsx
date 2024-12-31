import Table from "../../components/Table";
import ResidentRow from "./ResidentRow";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";


interface ResidentsTableProps {
  keyword: string;
}


export default function ResidentsTable({keyword}: ResidentsTableProps) {
  const [residents, setResidents] = useState<any[]>([]);

  const apiResidents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/residents?size=10&page=1&filter=name~'${keyword}'`);
      setResidents(response.data.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    apiResidents();
  }, [keyword]);
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

      {/* <Table.Footer>
        <Pagination count={residents.length} />
      </Table.Footer> */}
    </Table>
  );
}
