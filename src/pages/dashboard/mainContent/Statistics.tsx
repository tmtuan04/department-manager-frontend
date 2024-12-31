import Row from "../../../components/Row";
import Heading from "../../../components/Heading";
import AddAndSearch from "../../../components/AddAndSearch";
import StatisticsForm from "../../../features/statistics/StatisticsForm";
import StatisticsTable from "../../../features/statistics/StatisticsTable";
import { useState } from "react";

export default function Apartments() {
   const [keyword, setKeyword] = useState('');
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Statistics</Heading>
        <AddAndSearch title="Add Appartment" setKeyword={setKeyword} keyword={keyword}>
          <StatisticsForm />
        </AddAndSearch>
      </Row>
      <StatisticsTable keyword={keyword}/>
    </>
  );
}