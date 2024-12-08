import React from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";

export default function FeeAndFundForm({ feeOrFund }) {
  const { name, unitCost, description, type } = feeOrFund ?? {};
  const typeOptions = ["Fee", "Fund"];
  return (
    <Form width="400px">
      <Selector
        value={type ?? ""}
        id="type"
        options={typeOptions}
        label={"Type:"}
      ></Selector>

      <FormField>
        <FormField.Label label={"Name"} />
        <FormField.Input value={name ?? ""} />
      </FormField>

      <FormField>
        <FormField.Label label={"Unit Cost"} />
        <FormField.Input value={unitCost ?? ""} />
      </FormField>

      <label>Description: </label>
      <Form.TextArea value={description ?? ""} />

      {feeOrFund ? (
        <Form.Buttons>
          <Button variation="danger">
            Delete
            <span>
              <HiTrash />
            </span>
          </Button>
          <Button variation="secondary">
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
