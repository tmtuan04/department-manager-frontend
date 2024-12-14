import { useState, useEffect } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import Table from "../../components/Table";

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
    residentList: Resident[];
    vehicleList: Vehicle[];
  };
}

export default function ApartmentForm({ apartment }: ApartmentFormProps) {
  const [formValues, setFormValues] = useState({
    addressNumber: apartment?.addressNumber || "",
    status: apartment?.status || "",
    area: apartment?.area || "",
    ownerName: apartment?.ownerName || "",
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
    // Add submit logic here
  };

  const statusOptions = ["Business", "Vacant", "Residential"];

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
                <div>{resident.name === apartment.ownerName ? "Owner" : "Member"}</div>
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
          <Button size="medium" variation="primary">
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
