import Button from "./Button";
import Modal from "./Modal";
import { HiOutlinePlusCircle } from "react-icons/hi2";

export default function Add({ children, title }) {
  return (
    <Modal>
      <Modal.Open id="add">
        <Button size="small" variation="primary">
          Add
          <span>
            <HiOutlinePlusCircle />
          </span>
        </Button>
      </Modal.Open>

      <Modal.Window id="add" name={title}>
        {children}
      </Modal.Window>
    </Modal>
  );
}
