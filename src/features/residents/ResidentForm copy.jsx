import React, { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import useAddResident from "./useAddResident";

export default function ResidentForm({ resident, onCloseModal }) {
  const genderOptions = ["male", "female", "other"];
  const statusOptions = ["active", "moved"];

  const [formData, setFormData] = useState({
    name: resident?.name || "",
    cic: resident?.cic || "",
    dob: resident?.dob || "",
    room: resident?.room || "",
    gender: resident?.gender || "",
    status: resident?.status || "",
  });

  const isDetailsSession = Boolean(resident?.id);

  const { addResident, isAdding } = useAddResident();

  function handleChange(event) {
    const { id, value } = event.target;
    console.log(id, value);
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", formData);

    if (!isDetailsSession) {
      addResident(
        { ...formData },
        {
          onSuccess: (formData) => {
            onCloseModal?.();
          },
        }
      );
    }
  }

  return (
    <Form width="400px" onSubmit={handleSubmit}>
      <div>
        <label>Information:</label>
        <Form.Fields>
          <FormField>
            <FormField.Label label={"Name"} />
            <FormField.Input
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormField.Label label={"CIC"} />
            <FormField.Input
              id="cic"
              value={formData.cic}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormField.Label label={"DOB"} />
            <FormField.Input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
          </FormField>
        </Form.Fields>
      </div>

      <Selector
        id="gender"
        value={formData.gender}
        onChange={(e) => handleChange(e)}
      >
        <label>Gender:</label>
        {genderOptions.map((option, index) => (
          <Selector.Option option={option} key={index} />
        ))}
      </Selector>

      <div>
        <label>Room:</label>
        <Form.Fields>
          <FormField>
            <FormField.Label label={"Room"} />
            <FormField.Input
              id="room"
              type="search"
              value={formData.room}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormField.Label label={"Status"} />
            <FormField.Select
              id="status"
              options={statusOptions}
              value={formData.status}
              onChange={handleChange}
            />
          </FormField>
        </Form.Fields>
      </div>

      {isDetailsSession ? (
        <Form.Buttons>
          <Button variation="danger" type="submit">
            Delete
            <span>
              <HiTrash />
            </span>
          </Button>
          <Button variation="secondary" type="submit">
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
