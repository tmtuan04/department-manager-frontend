import Row from "../../../components/Row";
import Heading from "../../../components/Heading";
import Modal from "../../../components/Modal";
import Search from "../../../components/Search";
import InvoiceTable from "../../../features/invoices/InvoiceTable";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../../../components/Form";
import FormField from "../../../components/FormField";
import UtilityBill from "../../../components/UtilityBill";
import { toast } from "react-toastify";

export default function Invoice() {

  const [keyword, setKeyword] = useState('')

  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h1">Invoices</Heading>
        <Search setKeyword={setKeyword} keyword={keyword}></Search>
      </Row>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <Modal.Open id="createInvoice">
          <button
            className="btTdn"
            style={{
              backgroundColor: "#667BC6",
              color: "white",
              fontWeight: "400",
              padding: "9px 8px",
              border: "none",
              borderRadius: "16px",
              fontSize: "16px",
              cursor: "pointer",
              width: "155px",
            }}
          >
            Create Invoice +
          </button>
        </Modal.Open>

        <Modal.Open id="addUtility">
          <button
            className="btTdn"
            style={{
              backgroundColor: "#708871",
              color: "white",
              fontWeight: "400",
              padding: "7px 8px",
              border: "none",
              borderRadius: "16px",
              fontSize: "16px",
              cursor: "pointer",
              width: "145px",
            }}
          >
            Add Utility Bill +
          </button>
        </Modal.Open>
      </div>

      <InvoiceTable keyword={keyword}/>

      <Modal.Window id="createInvoice" name="Create Invoice">
        <InvoiceTDN />
      </Modal.Window>

      <Modal.Window id="addUtility" name="Add Utility Bill">
        <UtilityBill />
      </Modal.Window>
    </Modal>
  );
}

function InvoiceTDN() {
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    feeType: "",
    fundType: "",
    description: "",
  });

  const [selectedFees, setSelectedFees] = useState<string[]>([]);
  const [selectedFunds, setSelectedFunds] = useState<string[]>([]);
  const [savedData, setSavedData] = useState<any[]>([]);

  const [feeOptions, setFeeOptions] = useState<any[]>([]); // Thay đổi thành any[] để lưu cả id và name
  const [fundOptions, setFundOptions] = useState<any[]>([]);
  const [feeIds, setFeeIds] = useState<string[]>([]); // Mảng lưu trữ id của fee
  const [fundIds, setFundIds] = useState<string[]>([]); // Mảng lưu trữ id của fund

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/fees");
        const data = response.data.data.result;

        const fees = data
          .filter((item: any) => item.feeTypeEnum === "DepartmentFee" || item.feeTypeEnum === "VehicleFee")
          .map((item: any) => ({ id: item.id, name: item.name }));
        const funds = data
          .filter((item: any) => item.feeTypeEnum === "ContributionFund")
          .map((item: any) => ({ id: item.id, name: item.name }));

        setFeeOptions(fees);
        setFundOptions(funds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const addFee = () => {
    const selectedFee = feeOptions.find(
      (fee) => fee.name === formValues.feeType
    );
    if (selectedFee && !selectedFees.includes(selectedFee.name)) {
      setSelectedFees((prev) => [...prev, selectedFee.name]);
      setFeeIds((prev) => [...prev, selectedFee.id]);
    }
  };

  const addFund = () => {
    const selectedFund = fundOptions.find(
      (fund) => fund.name === formValues.fundType
    );
    if (selectedFund && !selectedFunds.includes(selectedFund.name)) {
      setSelectedFunds((prev) => [...prev, selectedFund.name]);
      setFundIds((prev) => [...prev, selectedFund.id]);
    }
  };

  const saveForm = async (event: React.FormEvent) => {
    event.preventDefault();

    // Gộp feeIds và fundIds thành một mảng duy nhất
    const combinedFeeIds = [...feeIds, ...fundIds];

    // Chuẩn bị payload
    const payload = {
      invoiceId: formValues.id, // Map `id` thành `invoiceId`
      name: formValues.name,
      description: formValues.description,
      feeIds: combinedFeeIds, // Gửi mảng gộp
    };

    try {
      // Gửi dữ liệu tới API
      const response = await axios.post(
        "http://localhost:8080/api/v1/invoices",
        payload
      );
      // console.log("Response:", response.data);

      // Lưu phản hồi từ server (nếu cần)
      // setSavedData((prevData) => [...prevData, payload]);

      toast.success("Create Invoice Successfull");
    } catch (error) {
      toast.error("Có lỗi xảy ra");
      // console.error("Error saving invoice:", error);
    }

    setSavedData((prevData) => [...prevData, payload]);
    console.log(savedData);

    setFormValues({
      id: "",
      name: "",
      feeType: "",
      fundType: "",
      description: "",
    });
    setSelectedFees([]);
    setSelectedFunds([]);
    setFeeIds([]);
    setFundIds([]);
  };

  return (
    <div style={invoiceStyles.container}>
      <form style={invoiceStyles.form}>
        <div style={invoiceStyles.leftColumn}>
          <Form.Fields>
            <FormField>
              <FormField.Label label={"Invoice ID"} />
              <FormField.Input
                id="id"
                type="text"
                value={formValues.id}
                onChange={handleChange}
              />
            </FormField>

            <FormField>
              <FormField.Label label={"Name"} />
              <FormField.Input
                id="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
              />
            </FormField>
          </Form.Fields>

          <div style={invoiceStyles.row}>
            <label className="font-bold">Fee: </label>
            <select
              style={invoiceStyles.input}
              id="feeType"
              value={formValues.feeType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {feeOptions.map((fee, index) => (
                <option key={index} value={fee.name}>
                  {fee.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              style={invoiceStyles.addButton}
              onClick={addFee}
            >
              Add Fee
            </button>
          </div>

          <div style={invoiceStyles.row}>
            <label className="font-bold">Fund: </label>
            <select
              style={invoiceStyles.input}
              id="fundType"
              value={formValues.fundType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {fundOptions.map((fund, index) => (
                <option key={index} value={fund.name}>
                  {fund.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              style={invoiceStyles.addButton}
              onClick={addFund}
            >
              Add Fund
            </button>
          </div>

          <label>Description: </label>
          <Form.TextArea
            id="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div style={invoiceStyles.rightColumn}>
          <div>
            <strong>Selected Fees:</strong>
            <ul>
              {selectedFees.map((fee, index) => (
                <li key={index}>{fee}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Selected Funds:</strong>
            <ul>
              {selectedFunds.map((fund, index) => (
                <li key={index}>{fund}</li>
              ))}
            </ul>
          </div>
        </div>
      </form>

      <button style={invoiceStyles.saveButton} onClick={saveForm}>
        Save
      </button>
    </div>
  );
}

const UtilityBillStyles = {
  container: {
    width: "500px",
    hight: "300px",
  }
}

const invoiceStyles = {
  container: {
    position: "relative",
    top: "8px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  btTdn: {
    display: "inline-flex",
  },
  form: {
    width: "800px",
    display: "flex",
    gap: "20px",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "12px",
    flex: 1,
    width: "300px",
    border: "1px solid black",
    borderRadius: "12px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  addButton: {
    backgroundColor: "#18BB4C",
    color: "white",
    padding: "8px 8px",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
  },
  saveButton: {
    position: "relative",
    top: "15px",
    background: "#4caf50",
    color: "white",
    padding: "8px 28px",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    cursor: "pointer",
    alignSelf: "center",
  },
};
