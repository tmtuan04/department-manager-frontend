import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: var(--color-grey-0);
  border-radius: 15px;
  padding: 30px 15px;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 4px;
  border-radius: 50%;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 12px;
  right: 19px;
  background-color: var(--color-red-500);

  &:hover {
    background-color: var(--color-red-700);
  }

  & svg {
    width: 14px;
    height: 14px;
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: white;
  }
`;

const Title = styled.label`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  text-decoration: underline;
`;

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, id: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, id, name }) {
  const { openName, close } = useContext(ModalContext);
  if (id !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Title>{name}</Title>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
