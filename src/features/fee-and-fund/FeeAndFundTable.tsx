import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import FeeAndFundRow from "./FeeAndFundRow";
import { useEffect, useState } from "react";
import axios from "axios";
import FeeAndFundForm from "./FeeAndFundForm";


interface FeeAndFundTableProps {
  keyword: string;
}

export default function FeeAndFundTable({keyword}: FeeAndFundTableProps) {
  const [feesAndFunds, setFeesAndFunds] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false); // State điều khiển việc hiển thị form


  const apiFeesAndFunds = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/fees?filter=name~'${keyword}'`)
      console.log(response.data.data.result);

      setFeesAndFunds(response.data.data.result);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    apiFeesAndFunds();
  }, [keyword]);

  return (
    <>

    <Table columns="0.5fr 1.5fr 2.5fr 2fr 2fr 1.2fr">
      <Table.Header>
        <div>ID</div>
        <div>Name</div>
        <div>Description</div>
        <div>Unit Price</div>
        <div>Type</div>
        <div>Actions</div>
      </Table.Header>

      {feesAndFunds.map((feeOrFund: any) => (
        <FeeAndFundRow key={feeOrFund.id} feeOrFund={feeOrFund} />
      ))}
      {/* <Table.Footer>
        <Pagination count={feesAndFunds.length} />
      </Table.Footer> */}
    </Table>
    </>
  );
}
