import AddAndSearch from "../../../components/AddAndSearch";
import Heading from "../../../components/Heading";
import Row from "../../../components/Row";
import VehiclesTable from "../../../features/vehicles/VehiclesTable";
import VehicleForm from "../../../features/vehicles/VehicleForm";

export default function Vehicles() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Vehicles Management</Heading>
        <AddAndSearch title="Add Vehicle">
          <VehicleForm />
        </AddAndSearch>
      </Row>
      <VehiclesTable />
    </>
  );
}
