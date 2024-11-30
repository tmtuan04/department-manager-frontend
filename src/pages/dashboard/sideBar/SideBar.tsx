import "./sideBar.css";
import { assets } from "../../../assets/assets";
import { useState } from "react";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  // active la full
  return (
    <div className={extended ? "sidebar active" : "sidebar"}>
      <div className="logo_content">
        <div className="logo">
          <img src={assets.logo} alt="" />
          <div className="logo_name">Tuan Inc.</div>
        </div>
        <i className="bx bx-menu" id="btn" onClick={() => setExtended(prev => !prev)}></i>
      </div>
      <ul className="nav_list">
        <li>
          <a href="#">
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
          </a>
          <span className='tooltip'>Search</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-grid-alt"></i>
            <span className="links_name" >Dashboard</span>
          </a>
          <span className='tooltip'>Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i>
            <span className="links_name">User</span>
          </a>
          <span className='tooltip'>User</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </a>
          <span className='tooltip'>Messages</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </a>
          <span className='tooltip'>File Manager</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="links_name">Setting</span>
          </a>
          <span className='tooltip'>Setting</span>
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
