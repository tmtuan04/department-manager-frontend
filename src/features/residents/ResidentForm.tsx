import { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import Selector from "../../components/Selector";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";

export default function ResidentForm({ resident, onCloseModal }: any) {
  const [formValues, setFormValues] = useState({
    name: resident?.name || "",
    dob: resident?.dob || "",
    apartmentId: resident?.apartmentId || "",
    status: resident?.status || "",
  });

  const statusOptions = ["active", "moved"];

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
    <Form onSubmit={handleSubmit} width="400px">
      <div>
        <label>Information:</label>
        <Form.Fields>
          <FormField>
            <FormField.Label label={"Name"} />
            <FormField.Input
              id="name"
              type="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormField.Label label={"DOB"} />
            <FormField.Input
              id="dob"
              type="date"
              value={formValues.dob}
              onChange={handleChange}
            />
          </FormField>
        </Form.Fields>
      </div>
      <div>
        <label>Room:</label>
        <Form.Fields>
          <FormField>
            <FormField.Label label={"Room"} />
            <FormField.Input
              id="apartmentId"
              type="search"
              value={formValues.apartmentId}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormField.Label label={"Status"} />
            <FormField.Select
              id="status"
              options={statusOptions}
              value={formValues.status}
              onChange={handleChange}
            />
          </FormField>
        </Form.Fields>
      </div>

      {resident ? (
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
          <Button size="medium" variation="primary" type="submit">
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
