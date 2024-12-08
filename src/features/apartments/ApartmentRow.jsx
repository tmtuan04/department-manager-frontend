import React from "react";
import Tag from "../../components/Tag";
import { capitalize } from "../../utils/helpers";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import ApartmentForm from "./ApartmentForm";

export default function ApartmentRow({ apartment }) {
  const { room, ownerName, contact, residentCount, status } = apartment;

  const statusStyled = {
    occupied: "red",
    available: "green",
  };

  return (
    <Table.Row>
      <div>{room}</div>
      <div>{ownerName}</div>
      <div>{contact}</div>
      <div>{residentCount}</div>
      <Tag type={statusStyled[status]}>{capitalize(status)}</Tag>
      <Modal>
        <Modal.Open id="details">
          <button>Details</button>
        </Modal.Open>

        <Modal.Window id="details" name="Apartment Details">
          <ApartmentForm apartment={apartment} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
