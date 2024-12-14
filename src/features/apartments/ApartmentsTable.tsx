import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import ApartmentRow from "./ApartmentRow";

export default function ApartmentsTable() {
  const [apartments, setApartments] = useState<any[]>([]);

  const apiApartments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/apartments"
      );

      setApartments(response.data.data.result);
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
  };

  useEffect(() => {
    console.log(apartments.length);
    apiApartments();
  }, []);

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

      {apartments.map((apartment: any) => (
        <ApartmentRow key={apartment.addressNumber} apartment={apartment} />
      ))}

        <Table.Footer>
          <Pagination count={apartments.length} />
        </Table.Footer>
    </Table>
  );
}
