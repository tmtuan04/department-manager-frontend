import { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";

export default function VehicleForm({ vehicle }: any) {
  // const { room, ownerName, vehicleNumber, type } = vehicle ?? {};
  const [formValues, setFormValues] = useState({
    room: vehicle?.room || "",
    ownerName: vehicle?.ownerName || "",
    vehicleNumber: vehicle?.vehicleNumber || "",
    type: vehicle?.type || "",
  });
  const vehicleTypeOptions = ["Motorbike", "Car"];

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
  return (
    <Form width="400px" onSubmit={handleSubmit}>
      <Form.Fields>
        <FormField>
          <FormField.Label label={"Room"} />
          <FormField.Input
            id="room"
            type="text"
            value={formValues.room}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <FormField.Label label={"Owner"} />
          <FormField.Input
            id="ownerName"
            type="text"
            value={formValues.ownerName}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <FormField.Label label={"Number"} />
          <FormField.Input
            id="vehicleNumber"
            type="text"
            value={formValues.vehicleNumber}
            onChange={handleChange}
          />
        </FormField>
      </Form.Fields>

      <Selector
        value={formValues.type}
        onChange={handleChange}
        id="type"
        options={vehicleTypeOptions}
        label={"Type:"}
      ></Selector>

      {vehicle ? (
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
