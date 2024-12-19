import Heading from "../../../components/Heading";
import AddAndSearch from "../../../components/AddAndSearch";
import FeeAndFundTable from "../../../features/fee-and-fund/FeeAndFundTable";
import Row from "../../../components/Row";
import FeeAndFundForm from "../../../features/fee-and-fund/FeeAndFundForm";
import { useState } from "react";

export default function FeesAndFunds() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Mở modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Đóng modal
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Fee and Fund</Heading>
        <AddAndSearch title="Add Fee/Fund">
          <FeeAndFundForm />
        </AddAndSearch>
      </Row>
      <button onClick={openModal} style={{
                  position: "relative",
                  bottom: "15px",
                  left: "10px",
                  backgroundColor: "#1565C0",
                  color: "white",
                  fontWeight: "400",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "165px"
      }}>Create Invoice +</button>
      <FeeAndFundTable />
    </>
  );
}
