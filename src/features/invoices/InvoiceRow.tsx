import Table from "../../components/Table";
import Modal from "../../components/Modal";

export default function InvoiceRow({ invoice }: any) {
  const { id, name, description, lastUpdated } = invoice;

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
      <div>{name}</div>
      <div>{description}</div>
      <div>{formatDate(lastUpdated)}</div>
    </Table.Row>
  );
}
