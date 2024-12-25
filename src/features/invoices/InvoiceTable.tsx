import { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import InvoiceRow from "./InvoiceRow";
import Pagination from "../../components/Pagination";

const InvoiceTable = () => {
    const [invoices, setInvoices] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false); // State điều khiển việc hiển thị form

    // GET: All Invoices
    const apiInvoices = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/invoices");
            // console.log(response.data.data.result);

            setInvoices(response.data.data.result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        apiInvoices();
    }, [])

    return (
    <Table columns="0.5fr 1fr 2fr 1fr 1fr">
      <Table.Header>
        <div>ID</div>
        <div>Name</div>
        <div>Description</div>
        <div>Created At</div>
        <div>Actions</div>
      </Table.Header>

        {/* Báo lỗi vì chưa định nghĩa ở Row */}
      {invoices.map((invoice: any) => (
        <InvoiceRow key={invoice.id} invoice={invoice} />
      ))}
      <Table.Footer>
        <Pagination count={invoices.length} />
      </Table.Footer>
    </Table>
  );
};

export default InvoiceTable;