import { useState, useEffect } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import Table from "../../components/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Resident {
  name: string;
  dob: string;
}

interface Vehicle {
  ownerName: string;
  number: string;
  type: string;
}

interface ApartmentFormProps {
  apartment: {
    addressNumber: string;
    status: "Business" | "Residential" | "Vacant";
    area: string;
    ownerName: string;
    ownerPhone: string;
    owner: number;
    residentList: Resident[];
    vehicleList: Vehicle[];
  };
  fetchApartments: () => void; // A function to refresh the apartment list after adding a new apartment
}

export default function ApartmentForm({
  apartment,
  fetchApartments,
}: ApartmentFormProps) {
  const [formValues, setFormValues] = useState({
    addressNumber: apartment?.addressNumber || "",
    status: apartment?.status || "",
    area: apartment?.area || "",
    ownerName: apartment?.ownerName || "",
    ownerPhone: apartment?.ownerPhone || "",
    ownerId: apartment?.owner.id, // Added ownerId field
    memberIds: [],
  });

  // Handle form changes
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const apartmentData = {
      addressNumber: formValues.addressNumber,
      area: formValues.area,
      status: formValues.status,
      ownerId: formValues.ownerId,
      ownerPhone: formValues.ownerPhone,
      memberIds: formValues.memberIds,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/apartments",
        apartmentData
      );
      const data = await response.data;
      console.log("Apartment created successfully", data);

      // Reset the form after successful submission
      setFormValues({
        addressNumber: "",
        status: "Residential",
        area: "",
        ownerName: "",
        ownerId: "",
        ownerPhone: "",
        memberIds: [],
      });

      // Optionally, refresh the apartment list after adding the new apartment
      fetchApartments();
      // // window.location.reload();
      // const navigate = useNavigate();
      // navigate("/dashboard/apartments", { replace: true });

    } catch (error) {
      // const navigate = useNavigate();
      // navigate("/dashboard/apartments", { replace: true });
      console.error("Error: ", error);
    }
  };

  const statusOptions = ["Business", "Residential"];

  return (
    <Form width="800px" onSubmit={handleSubmit}>
      <label>Room:</label>
      <Form.Fields type="horizontal">
        <FormField>
          <FormField.Label label={"Room"} />
          <FormField.Input
            id="addressNumber"
            type="text"
            value={formValues.addressNumber}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <FormField.Label label={"Room Area"} />
          <FormField.Input
            id="area"
            type="text"
            value={formValues.area}
            onChange={handleChange}
          />
        </FormField>
      </Form.Fields>

      <Selector
        id="status"
        value={formValues.status}
        onChange={handleChange}
        options={statusOptions}
        label={"Status"}
      />

      <label>Owner:</label>
      <Form.Fields type="horizontal">
        <FormField>
          <FormField.Label label={"Owner ID:"} />
          <FormField.Input
            id="ownerId"
            type="text"
            value={formValues.ownerId}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <FormField.Label label={"PhoneNB:"} />
          <FormField.Input
            id="ownerPhone"
            type="text"
            value={formValues.ownerPhone}
            onChange={handleChange}
          />
        </FormField>
      </Form.Fields>
      {apartment?.residentList && (
        <>
          <label>Resident:</label>
          <Table columns="1fr 1fr 1fr">
            <Table.Header size="small">
              <div>Name</div>
              <div>DOB</div>
              <div>Role</div>
            </Table.Header>

            {apartment.residentList.map((resident) => (
              <Table.Row size="small" key={resident.name}>
                <div>{resident.name}</div>
                <div>{resident.dob}</div>
                <div>
                  {resident.name === apartment.ownerName ? "Owner" : "Member"}
                </div>
              </Table.Row>
            ))}
          </Table>
        </>
      )}

      {apartment?.vehicleList && (
        <>
          <label>Vehicle:</label>
          <Table columns="1fr 1fr 1fr">
            <Table.Header size="small">
              <div>Owner Name</div>
              <div>Number</div>
              <div>Type</div>
            </Table.Header>

            {apartment.vehicleList.map((vehicle) => (
              <Table.Row size="small" key={vehicle.number}>
                <div>{vehicle.ownerName}</div>
                <div>{vehicle.number}</div>
                <div>{vehicle.type}</div>
              </Table.Row>
            ))}
          </Table>
        </>
      )}

      {apartment ? (
        <Form.Buttons>
          <Button variation="danger" size="medium">
            Delete
            <span>
              <HiTrash />
            </span>
          </Button>
          <Button variation="secondary" size="medium">
            Update
            <span>
              <HiPencil />
            </span>
          </Button>
        </Form.Buttons>
      ) : (
        <Form.Buttons>
          <Button onClick={handleSubmit} size="medium" variation="primary">
            Add
            <span>
              <HiOutlinePlusCircle />
            </span>
          </Button>
        </Form.Buttons>
      )}
    </Form>
  );
}
