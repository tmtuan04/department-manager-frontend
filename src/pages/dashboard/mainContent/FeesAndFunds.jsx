import React from "react";
import Heading from "../../../components/Heading";
import AddAndSearch from "../../../components/AddAndSearch";
import FeeAndFundTable from "../../../features/fee-and-fund/FeeAndFundTable";
import Row from "../../../components/Row";
import FeeAndFundForm from "../../../features/fee-and-fund/FeeAndFundForm";

export default function FeesAndFunds() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Fee and Fund</Heading>
        <AddAndSearch title="Add Fee/Fund">
          <FeeAndFundForm />
        </AddAndSearch>
      </Row>

      <FeeAndFundTable />
    </>
  );
}
