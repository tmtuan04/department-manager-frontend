import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import StatisticsRow from "./StatisticsRow";

interface StatisticsTableProps {
  keyword: string;
}

const StatisticsTable = ({ keyword }: StatisticsTableProps) => {
  const [statistics, setStatistics] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);

  const apiStatistics = async (page: number = 1) => {
    try {
      let url: string;
      if (keyword) {
        url = `http://localhost:8080/api/v1/apartments/${keyword}`;
      } else {
        url = `http://localhost:8080/api/v1/apartments?page=${page}&size=10`;
      }

      const response = await axios.get(url);

      if (keyword) {
        setStatistics([response.data.data]);
        setTotalPages(1);
        setTotalElements(1);
      } else {
        setStatistics(response.data.data.result);
        setTotalPages(response.data.data.totalPages);
        setTotalElements(response.data.data.totalElements);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    apiStatistics(curPage);
  }, [keyword, curPage]);

  const handlePageChange = (page: number) => {
    setCurPage(page);
  };

  return (
    <Table columns="1fr 1fr">
      <Table.Header>
        <div>Room</div>
        <div>Actions</div>
      </Table.Header>

      {statistics.map((statistic: any) => (
        <StatisticsRow key={statistic.addressNumber} statistic={statistic} />
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

export default StatisticsTable;
