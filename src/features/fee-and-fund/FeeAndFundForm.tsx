import { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";

export default function FeeAndFundForm({ feeOrFund }: any) {
  const [formValues, setFormValues] = useState({
    name: feeOrFund?.name || "",
    unitCost: feeOrFund?.unitCost || "",
    description: feeOrFund?.description || "",
    type: feeOrFund?.type || "",
  });
  const typeOptions = ["Fee", "Fund"];

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
      <Selector
        value={formValues.type}
        onChange={handleChange}
        id="type"
        options={typeOptions}
        label={"Type:"}
      ></Selector>

      <FormField>
        <FormField.Label label={"Name"} />
        <FormField.Input
          id="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
        />
      </FormField>

      <FormField>
        <FormField.Label label={"Unit Cost"} />
        <FormField.Input
          id="unitCost"
          type="text"
          value={formValues.unitCost}
          onChange={handleChange}
        />
      </FormField>

      <label>Description: </label>
      <Form.TextArea
        id="desciption"
        value={formValues.description}
        onChange={handleChange}
      />

      {feeOrFund ? (
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
