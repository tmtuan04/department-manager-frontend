import Table from "../../components/Table";
import ResidentRow from "./ResidentRow";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ResidentsTable({}) {
  const [residents, setResidents] = useState<any[]>([]);

  const apiResidents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/residents?size=5&page=1");
      console.log(response.data.data.result);
      setResidents(response.data.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    apiResidents();
  }, []);

  return (
    <Table columns="0.5fr 1fr 1.5fr 1fr 2fr 1.2fr 1.2fr">
      <Table.Header>
        <div>CCCD</div>
        <div>Room</div>
        <div>Name</div>
        <div>Gender</div>
        <div>DOB</div>
        <div>Status</div>
        <div>Actions</div>
      </Table.Header>

      {residents.map((resident) => (
        <ResidentRow resident={resident} />
      ))}

      {/* <Table.Footer>
        <Pagination count={residents.length} />
      </Table.Footer> */}
    </Table>
  );
}
