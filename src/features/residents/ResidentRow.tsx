import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { capitalize } from "../../utils/helpers";
import Modal from "../../components/Modal";
import ResidentForm from "./ResidentForm";

export default function ResidentRow({ resident }: any) {
  const { id, apartmentId, name, dob, status, gender } = resident;

  const statusStyled = {
    Resident: "green",
    Moved: "red",
    Temporary: "pink",
    Absent: "yellow",
  };

  return (
    <Table.Row key={id}>
      {" "}
      {/* Ensure the row is uniquely identified */}
      <div>{id}</div>
      <div>{apartmentId}</div>
      <div>{name}</div>
      <div>{gender}</div>
      <div>{dob}</div>
      <Tag
        type={
          statusStyled[
            status as "Resident" | "Moved" | "Temporary" | "Absent"
          ] || "grey"
        }
      >
        {capitalize(status) || "Unknown"}
      </Tag>
      <Modal>
        <Modal.Open id="details">
          <button>Details</button>
        </Modal.Open>

        <Modal.Window id="details" name="Resident Details">
          <ResidentForm resident={resident} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
