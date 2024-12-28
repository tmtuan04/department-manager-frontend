import Row from "../../../components/Row";
import Heading from "../../../components/Heading";
import AddAndSearch from "../../../components/AddAndSearch";
import StatisticsForm from "../../../features/statistics/StatisticsForm";
import StatisticsTable from "../../../features/statistics/StatisticsTable";

export default function Apartments() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Statistics</Heading>
        <AddAndSearch title="Add Appartment">
          <StatisticsForm />
        </AddAndSearch>
      </Row>
      <StatisticsTable />
    </>
  );
}