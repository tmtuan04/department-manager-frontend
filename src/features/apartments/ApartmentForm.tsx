import { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import Table from "../../components/Table";

export default function ApartmentForm({ apartment }: any) {
  const [formValues, setFormValues] = useState({
    room: apartment?.room || "",
    status: apartment?.status || "",
    roomArea: apartment?.roomArea || "",
    ownerName: apartment?.ownerName || "",
  });
  const residents = [
    {
      name: "Nguyen Thi A",
      dob: "20/12/2000",
    },
  ];

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
    // Add submit logic here
  };

  const vehicles = [
    { ownerName: "Nguyen Thi A", number: "123ABC", type: "Car" },
    { ownerName: "Nguyen Thi B", number: "456XYZ", type: "Motorbike" },
  ];

  const statusOptions = ["available", "occupied"];

  return (
    <Form width="800px" onSubmit={handleSubmit}>
      <label>Room:</label>
      <Form.Fields type="horizontal">
        <FormField>
          <FormField.Label label={"Room"} />
          <FormField.Input
            id="room"
            type="search"
            value={formValues.room}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <FormField.Label label={"Room Area"} />
          <FormField.Input
            id="roomArea"
            type="text"
            value={formValues.roomArea}
            onChange={handleChange}
          />
        </FormField>
      </Form.Fields>

      <Selector
        id="status"
        value={formValues.status}
        onChange={(e: any) => handleChange(e)}
        options={statusOptions}
        label={"Status"}
      ></Selector>

      {apartment && (
        <>
          <label>Resident:</label>
          <Table columns="1fr 1fr 1fr">
            <Table.Header size="small">
              <div>Name</div>
              <div>DOB</div>
              <div>Role</div>
            </Table.Header>

            {residents.map((resident) => (
              <Table.Row size="small">
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

      {apartment && (
        <>
          <label>Vehicle:</label>
          <Table columns="1fr 1fr 1fr">
            <Table.Header size="small">
              <div>Owner Name</div>
              <div>Number</div>
              <div>Type</div>
            </Table.Header>

            {vehicles.map((vehicle) => (
              <Table.Row size="small">
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
