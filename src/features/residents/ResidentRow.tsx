import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { capitalize } from "../../utils/helpers";
import Modal from "../../components/Modal";
import ResidentForm from "./ResidentForm";

export default function ResidentRow({ resident, index }:{ resident: any; index: number }) {
  const { id, apartmentId, name, dob, status, gender } = resident;

  const statusStyled = {
    Resident: "green",
    Moved: "red",
    Temporary: "pink",
    Absent: "yellow",
  };

  function formatDate(dateString: any) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Lấy ngày, thêm 0 nếu nhỏ hơn 10
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Lấy tháng (bắt đầu từ 0)
    const year = date.getFullYear(); // Lấy năm
    return `${day}-${month}-${year}`;
  }
  

  return (
    <Table.Row key={id}>
      {" "}
      {/* Ensure the row is uniquely identified */}
      <div>{index + 1}</div>
      <div>{apartmentId}</div>
      <div>{name}</div>
      <div>{id}</div>
      <div>{gender}</div>
      <div>{formatDate(dob)}</div>
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
