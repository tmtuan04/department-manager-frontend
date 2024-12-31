import { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import InvoiceRow from "./InvoiceRow";
import Pagination from "../../components/Pagination";

interface InvoicesTableProps {
  keyword: string;
}

const InvoiceTable = ({ keyword }: InvoicesTableProps) => {
  const [invoices, setInvoices] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);

  const [isFormVisible, setIsFormVisible] = useState(false); // State điều khiển việc hiển thị form

  // GET: All Invoices
  const apiInvoices = async (page: number = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/invoices?page=${page}&size=10&filter=name~'${keyword}'`
      );
      // console.log(response.data.data.result);

      setInvoices(response.data.data.result);
      setTotalPages(response.data.data.totalPages);
      setTotalElements(response.data.data.totalElements);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiInvoices(curPage);
  }, [keyword, curPage]);

  const handlePageChange = (page: number) => {
    setCurPage(page);
  };

  return (
    <Table columns="0.5fr 1.5fr 1fr 1fr">
      <Table.Header>
        <div>ID</div>
        <div>Name</div>
        <div>Description</div>
        <div>Created At</div>
      </Table.Header>

      {/* Báo lỗi vì chưa định nghĩa ở Row */}
      {invoices.map((invoice: any) => (
        <InvoiceRow key={invoice.id} invoice={invoice} />
      ))}
      <Table.Footer>
        <Pagination
          totalPages={totalPages}
          curPage={curPage}
          totalElements={totalElements}
          onPageChange={handlePageChange}
        />
      </Table.Footer>
    </Table>
  );
};

export default InvoiceTable;
