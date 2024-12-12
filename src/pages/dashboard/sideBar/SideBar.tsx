import "./sideBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  // active la full
  return (
    <div className={extended ? "sidebar active" : "sidebar"}>
      <div className="logo_content">
        <div className="logo">
          {/* <img src={assets.logo} alt="" /> */}
          <div className="logo_name">HustCity.</div>
        </div>
        <i
          className="bx bx-menu"
          id="btn"
          onClick={() => setExtended((prev) => !prev)}
        ></i>
      </div>
      <ul className="nav_list">
        <li>
          <a href="#">
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
          </a>
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/dashboard/residents">
            <i className="bx bxs-grid-alt"></i>
            <span className="links_name">Resident Management</span>
          </Link>
          <span className="tooltip">Resident Management</span>
        </li>
        <li>
          <Link to="/dashboard/apartments">
            <i className="bx bxs-grid-alt"></i>
            <span className="links_name">Apartment Management</span>
          </Link>
          <span className="tooltip">Apartment Management</span>
        </li>
        <li>
          <Link to="/dashboard/vehicles">
            <i className="bx bx-user"></i>
            <span className="links_name">Vehicle Management</span>
          </Link>
          <span className="tooltip">Vehicle Management</span>
        </li>
        <li>
          <Link to="/dashboard/fee-and-fund">
            <i className="bx bx-chat"></i>
            <span className="links_name">Fee and Fund</span>
          </Link>
          <span className="tooltip">Fee and Fund</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-folder"></i>
            <span className="links_name">Statistics</span>
          </a>
          <span className="tooltip">Statistics</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img
              src="https://i.pinimg.com/564x/5e/7b/9c/5e7b9c338994683cdadd9b52d95223cc.jpg"
              alt="Tuan dep trai profile"
            />
            <div className="name_role">
              <div className="name">Tu Minh Tuan</div>
              <div className="role">Manager</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
