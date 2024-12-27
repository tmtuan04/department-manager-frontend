import Table from "../../components/Table";
import Modal from "../../components/Modal";
import VehicleForm from "./VehicleForm";

export default function VehicleRow({ vehicle }: any) {
  const { id, apartmentId, category, registerDate } = vehicle;

  return (
    <Table.Row>
      <div>{id}</div>
      <div>{apartmentId}</div>
      <div>{category}</div>
      <div>{registerDate}</div>
      <Modal>
        <Modal.Open id="details">
          <button>Details</button>
        </Modal.Open>

        <Modal.Window id="details" name="Vehicle Details">
          <VehicleForm vehicle={vehicle} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
