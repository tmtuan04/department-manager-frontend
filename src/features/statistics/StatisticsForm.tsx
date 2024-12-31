import { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { toast } from "react-toastify";

interface StatisticsFormProps {
  statistic: {
    addressNumber: string;
  };
}

const StatisticsForm = ({ statistic }: StatisticsFormProps) => {
  const { addressNumber } = statistic;

  const [dataInvoice, setDataInvoice] = useState<any[]>([]);
  const [dataUtility, setDataUtility] = useState<any[]>([]);
  const [openDropdowns, setOpenDropdowns] = useState<any>({});
  const [voluntaryFund, setVoluntaryFund] = useState<any>({}); // Lưu số tiền tự nguyện cho từng `Fund 2`

  const toggleDropdown = (key: any) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleVoluntaryFundChange = (invoiceId: string, value: string) => {
    setVoluntaryFund((prevState: any) => ({
      ...prevState,
      [invoiceId]: parseFloat(value) || 0, // Chuyển giá trị nhập sang số
    }));
  };

  const apiInvoice = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/invoiceapartment/${addressNumber}`
      );
      setDataInvoice(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const apiPayInvoice = async (invoiceId: string, feeList: any[]) => {
    try {
      // Tạo payload chứa fund ID và số tiền tự nguyện
      const payload = feeList.reduce((acc: any, fee: any) => {
        if (fee.feeType === "ContributionFund") {
          acc[fee.id] = voluntaryFund[invoiceId] || 0; // Lấy số tiền tự nguyện từ `voluntaryFund`
        }
        return acc;
      }, {});

      // Gửi request API
      const response = await axios.put(
        `http://localhost:8080/api/v1/invoiceapartment/update/${addressNumber}/${invoiceId}`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Invoice paid successfully!");
      apiInvoice(); // Reload dữ liệu sau khi thanh toán
    } catch (err) {
      console.error(err);
      toast.error("Failed to pay the invoice.");
    }
  };

  const apiUtility = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/utilitybills/${addressNumber}`
      );
      setDataUtility(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const apiPayUtility = async (utilityId: string) => {
    try {
      console.log(dataUtility[0].id);
      // Đoạn này
      const response = await axios.post(
        `http://localhost:8080/api/v1/utilitybills/update/${utilityId}`
      );
      toast.success("Pay Successfull");
      apiUtility();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    apiInvoice();
    apiUtility();
  }, []);

  return (
    <div className="wra">
      <div className="cts">
        <p className="invoiceText">Invoice (Fee and Fund):</p>
        {dataInvoice.map((invoice, index) => (
          <div key={index}>
            <div
              className={`billing-header ${
                invoice.paymentStatus === "Unpaid" ? "incomplete" : "complete"
              }`}
              onClick={() => toggleDropdown(invoice.id)}
            >
              <span className="spanText">{invoice.name}</span>
              <span className="status">
                {invoice.paymentStatus === "Unpaid" ? "Unpaid" : "Paid"}
              </span>
              <span
                className={`arrow ${openDropdowns[invoice.id] ? "open" : ""}`}
              >
                &#9662;
              </span>
            </div>
            {openDropdowns[invoice.id] && (
              <div className="billing-details">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.feeList.map((fee: any, feeIndex: number) => (
                      <tr key={feeIndex}>
                        <td>{fee.name}</td>
                        <td>{fee.feeType}</td>
                        <td>
                          {fee.name === "Fund 2"
                            ? (
                                fee.amount + (voluntaryFund[invoice.id] || 0)
                              ).toLocaleString()
                            : fee.amount.toLocaleString()}{" "}
                          VND
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Nhập số tiền tự nguyện */}
                {invoice.paymentStatus === "Unpaid" &&
                  invoice.feeList.map(
                    (fee: any) =>
                      fee.feeType === "ContributionFund" && (
                        <div className="voluntary-fund" key={fee.name}>
                          <label>
                            Enter voluntary contribution for{" "}
                            <strong>{fee.name}</strong>:{" "}
                            <input
                              className="inputFund"
                              type="text"
                              value={voluntaryFund[invoice.id] || ""}
                              onChange={(e) =>
                                handleVoluntaryFundChange(
                                  invoice.id,
                                  e.target.value
                                )
                              }
                            />
                          </label>
                        </div>
                      )
                  )}
                <div className="total-due">
                  Total amount:{" "}
                  {invoice.feeList
                    .reduce((sum: number, fee: any) => {
                      if (fee.feeType === "DepartmentFee") {
                        return (
                          sum + fee.amount + (voluntaryFund[invoice.id] || 0)
                        );
                      }
                      return sum + fee.amount;
                    }, 0)
                    .toLocaleString()}{" "}
                  VND
                </div>
                {/* Chỉ hiển thị nút "Pay" nếu trạng thái là "Unpaid" */}
                {invoice.paymentStatus === "Unpaid" && (
                  <div className="divPay">
                    <button
                      onClick={() => apiPayInvoice(invoice.id, invoice.feeList)} // Truyền feeList của hóa đơn
                      className="payButton"
                      type="submit"
                    >
                      Pay <i className="bx bxs-credit-card-alt"></i>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <p className="invoiceText">Utility Bill:</p>
        {dataUtility.map((utility, index) => (
          <div key={index}>
            <div
              className={`billing-header ${
                utility.paymentStatus === "Unpaid" ? "incomplete" : "complete"
              }`}
              onClick={() => toggleDropdown(utility.id)}
            >
              <span className="spanText">{utility.name}</span>
              <span className="status">
                {utility.paymentStatus === "Unpaid" ? "Unpaid" : "Paid"}
              </span>
              <span
                className={`arrow ${openDropdowns[utility.id] ? "open" : ""}`}
              >
                &#9662;
              </span>
            </div>
            {openDropdowns[utility.id] && (
              <div className="billing-details">
                <table>
                  <thead>
                    <tr>
                      <th>Electricity</th>
                      <th>Water</th>
                      <th>Internet</th>
                      <th>Created At</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{utility.electricity.toLocaleString()} VND</td>
                      <td>{utility.water.toLocaleString()} VND</td>
                      <td>{utility.internet.toLocaleString()} VND</td>
                      <td>
                        {new Date(utility.createdAt).toLocaleDateString()}
                      </td>
                      <td>
                        {(
                          utility.electricity +
                          utility.water +
                          utility.internet
                        ).toLocaleString()}{" "}
                        VND
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="divPay">
                  <button
                    onClick={() => apiPayUtility(utility.id)}
                    className="payButton"
                    type="submit"
                  >
                    Pay <i className="bx bxs-credit-card-alt"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsForm;
