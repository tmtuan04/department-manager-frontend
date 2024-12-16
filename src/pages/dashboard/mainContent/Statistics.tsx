import { useState } from "react";
import "./statistics.css";
import AddAndSearch from "../../../components/AddAndSearch";

const Statistics = () => {
  const [showPopup, setShowPopup] = useState(false); // Trạng thái popup

  const togglePopup = () => {
    setShowPopup((prev) => !prev); // Toggle popup khi nhấn vào "Details"
  };

  const [activeTab, setActiveTab] = useState("billing");

  return (
    <div className="main">
      <div className="header-tdn">
        <h1 className="text-4xl font-bold text-[#31363F]">Statistics</h1>
        <AddAndSearch></AddAndSearch>
      </div>
      {/* Toggle Buttons */}
      <div className="switch">
        <button
          className={`px-4 py-1 rounded-l-lg ${
            activeTab === "billing" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("billing")}
        >
          Billing List
        </button>
        <button
          className={`px-3 py-1 rounded-r-lg ${
            activeTab === "summary" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("summary")}
        >
          Monthly Summary
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Room</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TC-312A</td>
            <td className="actions">
              <a href="#" onClick={togglePopup}>
                Details
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TC-312A</td>
            <td className="actions">
              <a href="#" onClick={togglePopup}>
                Details
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TC-312A</td>
            <td className="actions">
              <a href="#" onClick={togglePopup}>
                Details
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div className="toggle-container">
          <button className={`toggle-btn ${activeTab === "billing" ? "active" : ""}`} onClick={() => setActiveTab("billing")} >
            Billing List
          </button>
          <button className={`toggle-btn ${activeTab === "summary" ? "active" : ""}`} onClick={() => setActiveTab("summary")} >
            Monthly Summary
          </button>
        </div> */}

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2 className="font-bold text-gray-700">
              List of Billing for apartment{" "}
              <span className="text-red-700">TC-312A</span>
            </h2>
            <div className="switch">
              <button
                className={`px-4 py-1 rounded-l-lg ${
                  activeTab === "billing"
                    ? "bg-green-500 text-white"
                    : "bg-gray-50"
                }`}
                onClick={() => setActiveTab("billing")}
              >
                Billing List
              </button>
              <button
                className={`px-3 py-1 rounded-r-lg ${
                  activeTab === "summary"
                    ? "bg-green-500 text-white"
                    : "bg-gray-50"
                }`}
                onClick={() => setActiveTab("summary")}
              >
                Monthly Summary
              </button>
            </div>
            {/* <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" value="Tran Trong Nguyen" readOnly />
              </div>
              <div className="form-group">
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
            </form> */}
            {/* <button className="close-btn" onClick={togglePopup}>
              Close
            </button> */}
            <div className="wrap"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
