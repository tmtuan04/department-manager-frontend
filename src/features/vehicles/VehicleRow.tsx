import Table from "../../components/Table";
import Modal from "../../components/Modal";
import VehicleForm from "./VehicleForm";

export default function VehicleRow({ vehicle }: any) {
  const { id, apartmentId, category, registerDate } = vehicle;

  function formatDate(dateString: any) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Lấy ngày, thêm 0 nếu nhỏ hơn 10
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Lấy tháng (bắt đầu từ 0)
    const year = date.getFullYear(); // Lấy năm
    return `${day}-${month}-${year}`;
  }

  return (
    <Table.Row>
      <div>{id}</div>
      <div>{apartmentId}</div>
      <div>{category}</div>
      <div>{formatDate(registerDate)}</div>
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
