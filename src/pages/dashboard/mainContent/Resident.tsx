import "./resident.css";
import { useState } from "react";

const MainDashBoard = () => {
  const [showPopup, setShowPopup] = useState(false); // Trạng thái popup

  const togglePopup = () => {
    setShowPopup((prev) => !prev); // Toggle popup khi nhấn vào "Details"
  };

  return (
    <div className="main">
      <h1 className="text-3xl font-bold text-[#31363F]">Resident Management</h1>
      <div className="header">
        <button>Add +</button>
        <input type="text" placeholder="Search..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Room</th>
            <th>Name</th>
            <th>CIC</th>
            <th>DOB</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TC-312A</td>
            <td>Tu Minh Tuan</td>
            <td>010203040506</td>
            <td>23/02/2004</td>
            <td className="status-resident">Resident</td>
            <td className="actions">
              <a href="#" onClick={togglePopup}>
                Details
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TC-312A</td>
            <td>Tu Minh Tuan</td>
            <td>010203040506</td>
            <td>23/02/2004</td>
            <td className="status-moved">Moved</td>
            <td className="actions">
              <a href="#" onClick={togglePopup}>
                Details
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TC-312A</td>
            <td>Tu Minh Tuan</td>
            <td>010203040506</td>
            <td>23/02/2004</td>
            <td className="status-active">Active</td>
            <td className="actions">
              <a href="#" onClick={togglePopup}>
                Details
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Details</h2>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" value="Tran Trong Nguyen" readOnly />
              </div>
              <div className="form-group">
                <label>CIC:</label>
                <input type="text" value="0102030405060708" readOnly />
              </div>
              <div className="form-group">
                <label>DOB:</label>
                <input type="date" value="2024-01-01" readOnly />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <div className="gender-options">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked
                    readOnly
                  />{" "}
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    readOnly
                  />{" "}
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    readOnly
                  />{" "}
                  Other
                </div>
              </div>
              <div className="form-group">
                <label>Room:</label>
                <input type="text" value="TC-312A" readOnly />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <select value="Residential" disabled>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Vacant">Vacant</option>
                </select>
              </div>
              <div className="popup-actions">
                <button className="delete-btn" type="button">
                  Delete
                </button>
                <button className="update-btn" type="button">
                  Update
                </button>
              </div>
            </form>
            <button className="close-btn" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDashBoard;
