import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { capitalize } from "../../utils/helpers";
import Modal from "../../components/Modal";
import FeeAndFundForm from "./FeeAndFundForm";

export default function FeeAndFundRow({ feeOrFund }: any) {
  const { id, name, description, unitCost, type } = feeOrFund;

  const statusStyled = {
    Fee: "red",
    Fund: "green",
  };

  return (
    <Table.Row>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{unitCost}</div>
      <Tag type={statusStyled[(type as "Fee") || "Fund"]}>
        {capitalize(type)}
      </Tag>
      <Modal>
        <Modal.Open id="details">
          <button>Details</button>
        </Modal.Open>

        <Modal.Window id="details" name="Vehicle Details">
          <FeeAndFundForm feeOrFund={feeOrFund} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
