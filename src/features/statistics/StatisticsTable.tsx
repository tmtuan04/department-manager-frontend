import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import StatisticsRow from "./StatisticsRow";

const StatisticsTable = () => {
    const [statistics, setStatistics] = useState([]);

    const apiStatistics = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/apartments");
              console.log(response.data.data.result);
              setStatistics(response.data.data.result);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        apiStatistics();
    }, []);

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