import { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { toast } from "react-toastify";

const StatisticsForm = () => {
  // Lưu trữ thông tin Invoice
  const [dataInvoice, setDataInvoice] = useState<any[]>([]);
  // Lưu trữ thông tin
  const [dataUtility, setDataUtility] = useState<any[]>([]);

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

  // Invoice API cho từng căn hộ
  const apiInvoice = async () => {

    try {
      const response = await axios.get(`http://localhost:8080/api/v1/invoiceapartment/100`);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    apiInvoice();
  }, []);

  return (
    <div className="wra">
      <div className="cts">
        <p className="invoiceText">Invoice (Fee and Fund):</p>
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

        <p className="invoiceText">Utility Bill:</p>
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
            <p className="pText">
              All payments for August have been completed.
            </p>
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
            <p className="text-black">
              All payments for July have been completed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsForm;
