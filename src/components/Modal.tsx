import {
  cloneElement,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

// Styled components
const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  max-height: 650px;
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
    color: white;
  }
`;

const Title = styled.label`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  color: #374151;
  text-decoration: underline;
`;

// Context and modal logic
interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  children: ReactNode;
  id: string;
}

function Open({ children, id: opensWindowName }: OpenProps) {
  const { open } = useContext(ModalContext)!;

  return cloneElement(children as React.ReactElement, {
    onClick: () => open(opensWindowName),
  });
}

interface WindowProps {
  children: ReactNode;
  id: string;
  name: string;
}

function Window({ children, id, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext)!;
  if (id !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Title>{name}</Title>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>
          {cloneElement(children as React.ReactElement, {
            onCloseModal: close,
          })}
        </div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
