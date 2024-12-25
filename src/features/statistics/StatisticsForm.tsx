import React, { useState } from "react";
import "./form.css";

const StatisticsForm = () => {
  // State to manage open/close status of each billing detail
  const [openDropdowns, setOpenDropdowns] = useState({
    september: false,
    august: false,
    july: false,
  });

  // Toggle dropdown based on the header clicked
  const toggleDropdown = (key: any) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific dropdown
    }));
  };

  return (
    <div className="wra">
      <div className="cts">
        {/* September Bill */}
        <div
          className="billing-header incomplete"
          onClick={() => toggleDropdown("september")}
        >
          <span className="spanText">September Bill</span>
          <span className="status">Not Completed</span>
          <span className={`arrow ${openDropdowns.september ? "open" : ""}`}>
            &#9662;
          </span>
        </div>
        {openDropdowns.september && (
          <div className="billing-details">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Payable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Parking Fee</td>
                  <td>100$</td>
                </tr>
                <tr>
                  <td>Housing Fee</td>
                  <td>1000$</td>
                </tr>
              </tbody>
            </table>
            <div className="total-due">Total amount due: 1000$</div>
          </div>
        )}

        {/* August Bill */}
        <div
          className="billing-header complete"
          onClick={() => toggleDropdown("august")}
        >
          <span className="spanText">August Bill</span>
          <span className="status">Completed &#10003;</span>
          <span className={`arrow ${openDropdowns.august ? "open" : ""}`}>
            &#9662;
          </span>
        </div>
        {openDropdowns.august && (
          <div className="billing-details">
            <p className="pText">All payments for August have been completed.</p>
          </div>
        )}

        {/* July Bill */}
        <div
          className="billing-header complete"
          onClick={() => toggleDropdown("july")}
        >
          <span className="spanText">July Bill</span>
          <span className="status">Completed &#10003;</span>
          <span className={`arrow ${openDropdowns.july ? "open" : ""}`}>
            &#9662;
          </span>
        </div>
        {openDropdowns.july && (
          <div className="billing-details">
            <p className="text-black">All payments for July have been completed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsForm;
