import Row from "../../../components/Row";
import Heading from "../../../components/Heading";
import AddAndSearch from "../../../components/AddAndSearch";
import ApartmentsTable from "../../../features/apartments/ApartmentsTable";
import ApartmentForm from "../../../features/apartments/ApartmentForm";
import { useState } from "react";

export default function Apartments() {
  const [keyword, setKeyword] = useState('');
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Apartments Management</Heading>
        <AddAndSearch title="Add Appartment" setKeyword={setKeyword} keyword={keyword}>
          <ApartmentForm />
        </AddAndSearch>
      </Row>

      <ApartmentsTable keyword={keyword}/>
    </>
  );
}
