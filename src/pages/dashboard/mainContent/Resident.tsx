import AddAndSearch from "../../../components/AddAndSearch";
import Heading from "../../../components/Heading";
import Row from "../../../components/Row";
import ResidentsTable from "../../../features/residents/ResidentsTable";
import ResidentForm from "../../../features/residents/ResidentForm";

export default function Residents() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Residents Management</Heading>
        <AddAndSearch title="Add Resident">
          <ResidentForm />
        </AddAndSearch>
      </Row>
      <ResidentsTable />
    </>
  );
}
