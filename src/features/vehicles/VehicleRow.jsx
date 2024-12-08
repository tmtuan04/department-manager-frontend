import styled from "styled-components";
import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { capitalize } from "../../utils/helpers";
import Modal from "../../components/Modal";
import VehicleForm from "./VehicleForm";

export default function VehicleRow({ vehicle }) {
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
