import "./sideBar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    toast.success("Logout successful!");
    navigate("/");
  };

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
          <Link to="/dashboard/">
            <i className="bx bxs-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/dashboard/residents">
            <i className="bx bx-user"></i>
            <span className="links_name">Resident Management</span>
          </Link>
          <span className="tooltip">Resident Management</span>
        </li>
        <li>
          <Link to="/dashboard/apartments">
            <i className='bx bxs-home'></i>
            <span className="links_name">Apartment Management</span>
          </Link>
          <span className="tooltip">Apartment Management</span>
        </li>
        <li>
          <Link to="/dashboard/vehicles">
            <i className='bx bxs-car'></i>
            <span className="links_name">Vehicle Management</span>
          </Link>
          <span className="tooltip">Vehicle Management</span>
        </li>
        <li>
          <Link to="/dashboard/fee-and-fund">
            <i className='bx bx-money-withdraw'></i>
            <span className="links_name">Fee and Fund</span>
          </Link>
          <span className="tooltip">Fee and Fund</span>
        </li>
        <li>
          <Link to="/dashboard/statistics">
            <i className="bx bx-folder"></i>
            <span className="links_name">Statistics</span>
          </Link>
          <span className="tooltip">Statistics</span>
        </li>
        <li>
          <Link to="/dashboard/invoices">
            <i className='bx bxs-file-plus'></i>
            <span className="links_name">Invoices</span>
          </Link>
          <span className="tooltip">Invoices</span>
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img
              src="https://i.pinimg.com/564x/5e/7b/9c/5e7b9c338994683cdadd9b52d95223cc.jpg"
              alt="Admin profile"
            />
            <div className="name_role">
              <div className="name">{name || "Unknown User"}</div>
              <div className="role">Manager</div>
            </div>
          </div>
          <i
            title="Logout"
            className="bx bx-log-out"
            id="log_out"
            onClick={handleLogout}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
