import styled, { css } from "styled-components";
import React, {
  createContext,
  useContext,
  ReactNode,
  ReactElement,
} from "react";

type CommonRowProps = {
  columns?: string;
  size?: "small" | "normal";
};

type TableProps = {
  columns: string;
  children: ReactNode;
};

type HeaderProps = {
  size?: "small" | "normal";
  children: ReactNode;
};

type RowProps = {
  size?: "small" | "normal";
  children: ReactNode;
};

type BodyProps<T> = {
  data: T[];
  render: (item: T, index: number) => ReactElement;
};

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: 14px;
  font-size: 14px;
  background-color: var(--color-grey-0);
  overflow: hidden;
  text-align: center;
`;

const CommonRow = styled.div<CommonRowProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 24px;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)<CommonRowProps>`
  ${(props) =>
    props.size === "small" &&
    css`
      padding: 4px 24px;
    `}

  ${(props) =>
    props.size === "normal" &&
    css`
      padding: 12px 24px;
    `}

  background-color: var(--color-grey-700);
  border-bottom: 1px solid var(--color-grey-100);
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-0);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

StyledHeader.defaultProps = {
  size: "normal",
};

const StyledRow = styled(CommonRow)<CommonRowProps>`
  ${(props) =>
    props.size === "small" &&
    css`
      padding: 4px 24px;
    `}

  ${(props) =>
    props.size === "normal" &&
    css`
      padding: 12px 24px;
    `}

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

StyledRow.defaultProps = {
  size: "normal",
};

const StyledBody = styled.section`
  margin: 4px 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-0);
  color: var(--color-grey-0);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  display: flex;
  justify-content: center;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin: 24px;
`;

const TableContext = createContext<{ columns?: string }>({});

export default function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table" as="header">
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children, size }: HeaderProps) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} size={size}>
      {children}
    </StyledHeader>
  );
}

function Row({ children, size }: RowProps) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns} size={size}>
      {children}
    </StyledRow>
  );
}

function Body<T>({ data, render }: BodyProps<T>) {
  if (!data.length) return <Empty>No data at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
