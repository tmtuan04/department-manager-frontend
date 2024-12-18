import Tag from "../../components/Tag";
import { capitalize } from "../../utils/helpers";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import ApartmentForm from "./ApartmentForm";

interface ApartmentProps {
  apartment: {
    addressNumber: string;
    owner: {
      id: number;
      name: string;
      // Add other properties if necessary
    };
    ownerPhone: string;
    numberOfMembers: number;
    status: "Business" | "Residential" | "Vacant"; // Adjust the status types if needed
  };
}

export default function ApartmentRow({ apartment }: ApartmentProps) {
  const { addressNumber, owner, ownerPhone, numberOfMembers, status } = apartment;

  const statusStyled = {
    Vacant: "red",
    Business: "blue",
    Residential: "green",
  };

  return (
    <Table.Row>
      <div>{addressNumber}</div>
      <div>{owner?.name || owner?.id}</div> {/* If owner is available, display the name */}
      <div>0{ownerPhone}</div> {/* Display ownerPhone as contact */}
      <div>{numberOfMembers}</div> {/* Display number of residents */}
      <Tag type={statusStyled[status] || "gray"}> {/* Default to "gray" if status doesn't match */}
        {capitalize(status)}
      </Tag>
      <Modal>
        <Modal.Open id="details">
          <button>Details</button>
        </Modal.Open>

        <Modal.Window id="details" name="Apartment Details">
          <ApartmentForm apartment={apartment} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
