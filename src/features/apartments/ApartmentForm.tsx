import { useState } from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import ResidentAddModal from "./ResidentAddModal";
import axios from "axios";
import { toast } from "react-toastify";

interface Resident {
  id: number;
  name: string;
  dob: string;
}

interface Vehicle {
  id: number;
  category: string;
}

interface ApartmentFormProps {
  apartment?: {
    addressNumber: string;
    status: "Business" | "Residential" | "Vacant" | "";
    area: string;
    ownerName: string;
    ownerPhone: string;
    owner: { id: number };
    residentList: Resident[];
    vehicleList: Vehicle[];
  };
  fetchApartments: () => void; // A function to refresh the apartment list after adding a new apartment
}

export default function ApartmentForm({
  apartment,
  fetchApartments,
}: ApartmentFormProps) {
  const [formValues, setFormValues] = useState({
    addressNumber: apartment?.addressNumber || "",
    status: apartment?.status || "",
    area: apartment?.area || "",
    ownerName: apartment?.ownerName || "",
    ownerPhone: apartment?.ownerPhone || "",
    ownerId: apartment?.owner?.id || "",
    memberIds: apartment?.residentList?.map((resident) => resident.id) || [],
  });

  const [selectedResidents, setSelectedResidents] = useState<Resident[]>(
    apartment?.residentList || []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleResidentsSelect = (newResidents: Resident[]) => {
    // Gộp danh sách cư dân hiện tại với danh sách cư dân mới, loại bỏ trùng lặp theo ID
    const updatedResidents = [
      ...selectedResidents,
      ...newResidents.filter(
        (newResident) =>
          !selectedResidents.some(
            (existingResident) => existingResident.id === newResident.id
          )
      ),
    ];

    setSelectedResidents(updatedResidents);

    // Cập nhật memberIds để gửi API
    setFormValues((prevValues) => ({
      ...prevValues,
      memberIds: updatedResidents.map((resident) => resident.id),
    }));
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    try {
      const data = {
        area: formValues.area,
        status: formValues.status,
        ownerId: formValues.ownerId,
        residents: formValues.memberIds,
        ownerPhone: formValues.ownerPhone,
      };
      // console.log(data);

      const response = await axios.put(
        `http://localhost:8080/api/v1/apartments/${formValues.addressNumber}`,
        data
      );

      setTimeout(() => {
        window.location.reload();
      }, 1500);

      toast.success("Update Sucessfull");
    } catch (err) {
      toast.error(`Có lỗi xảy ra`);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const apartmentData = {
      addressNumber: formValues.addressNumber,
      area: formValues.area,
      status: formValues.status,
      ownerId: formValues.ownerId,
      ownerPhone: formValues.ownerPhone,
      memberIds: formValues.memberIds,
    };

    try {
      await axios.post(
        "http://localhost:8080/api/v1/apartments",
        apartmentData
      );

      toast.success("Add Apartment Successful");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      fetchApartments();
      setFormValues({
        addressNumber: "",
        status: "",
        area: "",
        ownerName: "",
        ownerId: "",
        ownerPhone: "",
        memberIds: [],
      });
      setSelectedResidents([]);
    } catch (error) {
      // toast.error(`Có lỗi xảy ra`);
      console.error(error);
    }
  };

  const statusOptions = ["Business", "Residential"];

  // API xoá căn hộ (delete)

  // const handleDelete = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.delete(``)
  //   } catch (err) {
  //     toast.error("Có lỗi xảy ra");
  //   }

  // }

  return (
    <Form width="800px">
      <label>Room:</label>
      <Form.Fields type="horizontal">
        <FormField>
          <FormField.Label label="Room" />
          <FormField.Input
            id="addressNumber"
            type="text"
            value={formValues.addressNumber}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <FormField.Label label="Room Area" />
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
        label="Status"
      />

      <label>Owner:</label>
      <Form.Fields type="horizontal">
        <FormField>
          <FormField.Label label="Owner ID" />
          <FormField.Input
            id="ownerId"
            type="text"
            value={formValues.ownerId}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <FormField.Label label="Phone:" />
          <FormField.Input
            id="ownerPhone"
            type="text"
            value={formValues.ownerPhone}
            onChange={handleChange}
          />
        </FormField>
      </Form.Fields>

      <label>Resident:</label>
      <Table columns="1fr 1fr">
        <Table.Header size="small">
          <div>Name</div>
          <div>DOB</div>
        </Table.Header>
        {selectedResidents.map((resident) => (
          <Table.Row size="small" key={resident.id}>
            <div>{resident.name}</div>
            <div>{resident.dob}</div>
          </Table.Row>
        ))}
      </Table>

      <Modal>
        <Modal.Open id="openAddResident">
          <i className="bx bx-plus-circle"></i>
        </Modal.Open>

        <Modal.Window id="openAddResident" name="Add Residents">
          <ResidentAddModal onResidentsSelect={handleResidentsSelect} />
        </Modal.Window>
      </Modal>
      {apartment?.vehicleList && (
        <>
          <label>Vehicle:</label>
          <Table columns="1fr 1fr">
            <Table.Header size="small">
              <div>Number</div>
              <div>Type</div>
            </Table.Header>
            {apartment.vehicleList.map((vehicle) => (
              <Table.Row size="small">
                <div>{vehicle.id}</div>
                <div>{vehicle.category}</div>
              </Table.Row>
            ))}
          </Table>
        </>
      )}

      {/* Action Buttons */}
      {apartment ? (
        <Form.Buttons>
          {/* <Button type="button" variation="danger" size="medium">
            Delete
            <span>
              <HiTrash />
            </span>
          </Button> */}
          <Button
            onClick={handleUpdate}
            type="button"
            variation="secondary"
            size="medium"
          >
            Update
            <span>
              <HiPencil />
            </span>
          </Button>
        </Form.Buttons>
      ) : (
        <Form.Buttons>
          <Button
            type="button"
            onClick={handleSubmit}
            size="medium"
            variation="primary"
          >
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
