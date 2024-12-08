import React from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";

export default function VehicleForm({ vehicle }) {
  const { room, ownerName, vehicleNumber, type } = vehicle ?? {};
  const vehicleTypeOptions = ["Motorbike", "Car"];
  return (
    <Form width="400px">
      <Form.Fields>
        <FormField>
          <FormField.Label label={"Room"} />
          <FormField.Input value={room ?? ""} />
        </FormField>

        <FormField>
          <FormField.Label label={"Owner"} />
          <FormField.Input value={ownerName ?? ""} />
        </FormField>

        <FormField>
          <FormField.Label label={"Number"} />
          <FormField.Input value={vehicleNumber ?? ""} />
        </FormField>
      </Form.Fields>

      <Selector
        id="type"
        value={type ?? ""}
        options={vehicleTypeOptions}
        label="Type: "
      ></Selector>

      {vehicle ? (
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
