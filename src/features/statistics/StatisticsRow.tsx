import Table from "../../components/Table";
import Modal from "../../components/Modal";
import StatisticsForm from "./StatisticsForm";

interface StatisticsProps {
  statistic: {
    addressNumber: string;
  };
}

export default function StatisticsRow({ statistic }: StatisticsProps) {
  const { addressNumber } = statistic;

  return (
    <Table.Row>
      <div>{addressNumber}</div>
      <Modal>
        <Modal.Open id="details">
          <button>Details</button>
        </Modal.Open>

        <Modal.Window id="details" name="List of Billing">
          <StatisticsForm statistic={statistic} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
