import Table from "../../components/Table";
import Modal from "../../components/Modal";
import VehicleForm from "./VehicleForm";

export default function VehicleRow({ vehicle }: any) {
  const { id, vehicleNumber, ownerName, room, type, registrationDate } =
    vehicle;

  return (
    <Table.Row>
      <div>{id}</div>
      <div>{vehicleNumber}</div>
      <div>{ownerName}</div>
      <div>{room}</div>
      <div>{type}</div>
      <div>{registrationDate}</div>
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
