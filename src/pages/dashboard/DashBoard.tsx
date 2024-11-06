import './DashBoard.css'
import MainDashBoard from './mainContent/MainDashBoard'
import SideBar from './sideBar/SideBar'

const DashBoard = () => {
  return (
    <div className="container">
        <SideBar />
        <MainDashBoard />
    </div>
  )
}

export default DashBoard