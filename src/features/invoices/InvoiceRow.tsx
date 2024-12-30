import Table from "../../components/Table";
import Modal from "../../components/Modal";

export default function InvoiceRow({ invoice }: any) {
  const { id, name, description, lastUpdated } = invoice;

  return (
    <Table.Row>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{lastUpdated}</div>
    </Table.Row>
  );
}
