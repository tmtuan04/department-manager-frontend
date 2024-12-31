import AddAndSearch from "../../../components/AddAndSearch";
import Heading from "../../../components/Heading";
import Row from "../../../components/Row";
import ResidentsTable from "../../../features/residents/ResidentsTable";
import ResidentForm from "../../../features/residents/ResidentForm";
import { useEffect, useState } from "react";

export default function Residents() {

  const [keyword, setKeyword] = useState('');

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Residents Management</Heading>
        <AddAndSearch title="Add Resident" setKeyword={setKeyword} keyword={keyword}>
          <ResidentForm />
        </AddAndSearch>
      </Row>
      <ResidentsTable keyword={keyword}/>
    </>
  );
}
