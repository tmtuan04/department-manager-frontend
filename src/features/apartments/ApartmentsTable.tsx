import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import ApartmentRow from "./ApartmentRow";

const PAGE_SIZE = 5;

interface ApartmentsTableProps {
  keyword: string;
}


export default function ApartmentsTable({keyword}: ApartmentsTableProps) {
  const [apartments, setApartments] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);

  const apiApartments = async (page: number = 1) => {
    try {
      let url: string;
      if(keyword) {
        url= `http://localhost:8080/api/v1/apartments/${keyword}`
      }
      else {
        url= `http://localhost:8080/api/v1/apartments?page=${page}&size=${PAGE_SIZE}`
      }
      const response = await axios.get(url);

      if(keyword) {
        
        setApartments([response.data.data]);
        setTotalPages(1);
        setTotalElements(1);
      }
      else {
        
        setApartments(response.data.data.result);
        setTotalPages(response.data.data.totalPages);
        setTotalElements(response.data.data.totalElements);
      }
      
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
  };

  useEffect(() => {
    apiApartments(curPage);
    console.log(keyword);
    
  }, [curPage, keyword]);

  const handlePageChange = (page: number) => {
    setCurPage(page);
  };

  return (
    <Table columns="1.5fr 2fr 2fr 1.5fr 1.2fr 1.2fr">
      <Table.Header>
        <div>Room</div>
        <div>Owner Name</div>
        <div>Contact</div>
        <div>ResidentCount</div>
        <div>Status</div>
        <div>Actions</div>
      </Table.Header>

      {apartments.map((apartment: any) => (
        <ApartmentRow key={apartment.addressNumber} apartment={apartment} />
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
}
