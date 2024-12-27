import Table from "../../components/Table";
import VehicleRow from "./VehicleRow";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VehiclesTable() {
  const [vehicles, setVehicles] = useState([]);

  const apiVehicles = async () => {
    try {
      // API này chỉ tìm theo căn hộ xác định (VD: 102)
      const response = await axios.get(
        "http://localhost:8080/api/v1/vehicles"
      );
      
      console.log(response.data.data.result);
      setVehicles(response.data.data.result);
    } catch(error) {
      console.error("Error fetching apartments: ", error);
    }

  }

  useEffect(() => {
    apiVehicles();
  }, []);

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
        <Pagination count={vehicles.length} />
      </Table.Footer>
    </Table>
  );
}
