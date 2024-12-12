import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { capitalize } from "../../utils/helpers";
import Modal from "../../components/Modal";
import ResidentForm from "./ResidentForm";

export default function ResidentRow({ resident }: any) {
  const { id, roomId, name, cic, gender, dob, status } = resident;

  const statusStyled = {
    active: "green",
    moved: "red",
  };

  const genderStyled = {
    male: "blue",
    female: "pink",
    other: "purple",
  };

  return (
    <Table.Row key={id}>
      {" "}
      {/* Ensure the row is uniquely identified */}
      <div>{id}</div>
      <div>{roomId}</div>
      <div>{name}</div>
      <div>{cic}</div>
      <Tag type={genderStyled[gender as "male" | "female" | "other"] || "grey"}>
        {capitalize(gender) || "Unknown"}
      </Tag>
      <div>{dob}</div>
      <Tag type={statusStyled[status as "active" | "moved"] || "grey"}>
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
