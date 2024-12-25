import Heading from "../../../components/Heading";
import AddAndSearch from "../../../components/AddAndSearch";
import FeeAndFundTable from "../../../features/fee-and-fund/FeeAndFundTable";
import Row from "../../../components/Row";
import FeeAndFundForm from "../../../features/fee-and-fund/FeeAndFundForm";
import Modal from "../../../components/Modal";

export default function FeesAndFunds() {
  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h1">Fee and Fund</Heading>
        <AddAndSearch title="Add Fee/Fund">
          <FeeAndFundForm />
        </AddAndSearch>
      </Row>

      <FeeAndFundTable />
    </Modal>
  );
}