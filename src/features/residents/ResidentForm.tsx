import { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import Selector from "../../components/Selector";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import axios from "axios";
import { toast } from "react-toastify";

export default function ResidentForm({ resident, onCloseModal }: any) {
  const [formValues, setFormValues] = useState({
    name: resident?.name || "",
    dob: resident?.dob || "",
    apartmentId: resident?.apartmentId || "",
    status: resident?.status || "",
    cic: resident?.cic || "",
    gender: resident?.gender || "",
  });

  const statusOptions = ["Resident", "Moved", "Temporary", "Absent"];
  const genderOptions = ["Male", "Female"];

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // const handleDelete = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.delete(`http://localhost:8080/api/v1/vehicles/${formValues.apartmentId}`)
  //   }

  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formValues);
    
    const data = {
      id: formValues.cic,
      name: formValues.name,
      dob: formValues.dob,
      apartmentId: formValues.apartmentId,
      status: formValues.status,
      gender: formValues.gender
    }

    console.log(data);  

    try {
      const response = await axios.post("http://localhost:8080/api/v1/residents", data);
      toast.success(`Add ${formValues.name} Successfull!`);
      
    } catch (err) {
      console.error(err);
      toast.error("Có lỗi xảy ra!!")
    }
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
          <FormField>
            <FormField.Label label={"CCCD"} />
            <FormField.Input
              id="cic"
              type="text"
              value={formValues.cic}
              onChange={handleChange}
            />
          </FormField>
          <Selector
            value={formValues.gender}
            onChange={handleChange}
            id="gender"
            options={genderOptions}
            label={"Type:"}
          ></Selector>
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
          <Button onClick={handleSubmit} size="medium" variation="primary" type="submit">
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
