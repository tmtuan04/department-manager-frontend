import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import StatisticsRow from "./StatisticsRow";

interface StatisticsTableProps {
  keyword: string;
}

const StatisticsTable = ({keyword}: StatisticsTableProps) => {
    const [statistics, setStatistics] = useState([]);

    const apiStatistics = async () => {
        try {
          let url: string;
          if(keyword) {
            url= `http://localhost:8080/api/v1/apartments/${keyword}`
          }
          else {
            url= `http://localhost:8080/api/v1/apartments`
          }

          const response = await axios.get(url);

          if(keyword) {
            setStatistics([response.data.data])
          }
          else {
            setStatistics(response.data.data.result)
          }
          
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        apiStatistics();
    }, [keyword]);

  return (
    <Table columns="1fr 1fr">
        <Table.Header>
            <div>Room</div>
            <div>Actions</div>
        </Table.Header>

      {statistics.map((statistic: any) => (
        <StatisticsRow key={statistic.addressNumber} statistic={statistic} />
      ))}

        {/* <Table.Footer>
          <Pagination count={statistics.length} />
        </Table.Footer>        */}
    </Table>
  )
}

export default StatisticsTable