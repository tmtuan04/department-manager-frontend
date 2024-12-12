import Row from "../../../components/Row";
import Heading from "../../../components/Heading";
import AddAndSearch from "../../../components/AddAndSearch";
import ApartmentsTable from "../../../features/apartments/ApartmentsTable";
import ApartmentForm from "../../../features/apartments/ApartmentForm";

export default function Apartments() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Apartments Management</Heading>
        <AddAndSearch title="Add Appartment">
          <ApartmentForm />
        </AddAndSearch>
      </Row>

      <ApartmentsTable />
    </>
  );
}
