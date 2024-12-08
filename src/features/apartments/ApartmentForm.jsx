import React from "react";
import Form from "../../components/Form";
import FormField from "../../components/FormField";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { HiOutlinePlusCircle, HiPencil, HiTrash } from "react-icons/hi2";
import Table from "../../components/Table";

export default function ApartmentForm({ apartment }) {
  const { room, status, roomArea, ownerName } = apartment ?? {};
  const residents = [
    {
      name: "Nguyen Thi A",
      dob: "20/12/2000",
    },
  ];

  const vehicles = [];
  const statusOptions = ["available", "occupied"];
  return (
    <Form width="800px">
      <label>Room:</label>
      <Form.Fields type="horizontal">
        <FormField>
          <FormField.Label label={"Room"} />
          <FormField.Input type="search" value={room ?? ""} />
        </FormField>

        <FormField>
          <FormField.Label label={"Room Area"} />
          <FormField.Input value={roomArea ?? ""} />
        </FormField>
      </Form.Fields>

      <Selector
        id="status"
        value={status ?? ""}
        options={statusOptions}
        label="Status"
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
                <div>{resident.name === ownerName ? "Owner" : "Member"}</div>
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
