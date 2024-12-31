import { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import axios from "axios";
import { toast } from "react-toastify";


export default function FeeAndFundForm({ feeOrFund }: any) {
  const [formValues, setFormValues] = useState({
    id: feeOrFund?.id || "",
    name: feeOrFund?.name || "",
    unitPrice: feeOrFund?.unitPrice || "",
    description: feeOrFund?.description || "",
    feeTypeEnum: feeOrFund?.feeTypeEnum || "",
    createdAt: feeOrFund?.createdAt || "",
  });
  const typeOptions = ["DepartmentFee", "ContributionFund", "VehicleFee"];

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const data = {
      id: feeOrFund.id,
      name: formValues.name,
      unitPrice: formValues.unitPrice,
      description: formValues.description,
      feeTypeEnum: formValues.feeTypeEnum,
    }

    try {
      const response = await axios.put("http://localhost:8080/api/v1/fees", data);

      setTimeout(() => {
        window.location.reload();
      }, 1500);

      toast.success("Update Successfull!")
    } catch (err) {
      toast.error("Có lỗi xảy ra");
    }
  }

  const handleDelete = async (e: any) => {
    e.preventDefault();

    try {
      // Xoá Fee-Fund theo ID
      const response = await axios.delete(`http://localhost:8080/api/v1/fees/${formValues.id}`);

      setTimeout(() => {
        window.location.reload();
      }, 1500);

      toast.success("Delete Sucessfull!!");
    } catch (err) {
      toast.error("Có lỗi xảy ra");
      console.log(err);
    }

  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(formValues);
    
    const data = {
      name: formValues.name,
      unitPrice: formValues.unitPrice,
      description: formValues.description,
      feeTypeEnum: formValues.feeTypeEnum,
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/fees", data);

      setTimeout(() => {
        window.location.reload();
      }, 1500);

      toast.success(`Add ${formValues.name} Successfull!`);
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form width="500px">
      <Selector
        value={formValues.feeTypeEnum}
        onChange={handleChange}
        id="feeTypeEnum"
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
        <FormField.Label label={"Unit Price"} />
        <FormField.Input
          id="unitPrice"
          type="text"
          value={formValues.unitPrice}
          onChange={handleChange}
        />
      </FormField>

      <FormField>
        <FormField.Label label={"Created At"} />
        <FormField.Input
          id="createdAt"
          type="text"
          value={formValues.createdAt}
          onChange={handleChange}
          readOnly
        />
      </FormField>

      <label>Description: </label>
      <Form.TextArea
        id="description"
        value={formValues.description}
        onChange={handleChange}
      />

      {feeOrFund ? (
        <Form.Buttons>
          <Button variation="danger" size="medium" onClick={handleDelete}>
            Delete
            <span>
              <HiTrash />
            </span>
          </Button>
          <Button variation="secondary" size="medium" onClick={handleUpdate}>
            Update
            <span>
              <HiPencil />
            </span>
          </Button>
        </Form.Buttons>
      ) : (
        <Form.Buttons>
          <Button size="medium" variation="primary" onClick={handleSubmit}>
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
