import AddAndSearch from "../../../components/AddAndSearch";
import Heading from "../../../components/Heading";
import Row from "../../../components/Row";
import VehiclesTable from "../../../features/vehicles/VehiclesTable";
import VehicleForm from "../../../features/vehicles/VehicleForm";
import { useState } from "react";

export default function Vehicles() {
  const [keyword, setKeyword] = useState('');
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Vehicles Management</Heading>
        <AddAndSearch title="Add Vehicle" setKeyword={setKeyword} keyword={keyword}>
          <VehicleForm />
        </AddAndSearch>
      </Row>
      <VehiclesTable keyword={keyword}/>
    </>
  );
}
