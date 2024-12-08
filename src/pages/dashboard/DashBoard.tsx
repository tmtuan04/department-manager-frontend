import styled from "styled-components";
import MainDashBoard from "./mainContent/MainDashBoard";
import SideBar from "./sideBar/SideBar";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 40px 48px 64px;
  overflow: scroll;
`;

const StyledDashBoard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  width: 100%;
  margin: 10px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const DashBoard = () => {
  return (
    <StyledDashBoard>
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledDashBoard>
  );
};

export default DashBoard;
