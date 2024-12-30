import { useState } from "react";
import "./utility.css";
import Table from "./Table";
import * as XLSX from "xlsx";
import axios from "axios";
import { toast } from "react-toastify";

const UtilityBill = () => {
  // State lưu trữ dữ liệu từ file excel
  const [dataExcel, setDataExcel] = useState<any[]>([]);
  const [fileName, setFileName] = useState(""); // Lưu tên file
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Lưu file được chọn
  const [billName, setBillName] = useState(""); // Lưu tên hóa đơn

  // Xử lý khi người dùng chọn file
  const handleFileChange = (e: any) => {
    const file = e.target.files[0]; // Lấy file đầu tiên
    if (file) {
      setFileName(file.name); // Lưu tên file
      setSelectedFile(file); // Lưu file
      readExcel(file); // Đọc file
    }
  };

  // Xử lý khi gửi dữ liệu
  const handleSubmit = async () => {

    if (!selectedFile || !billName) {
      toast.error("Please select a file and enter a bill name.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile); // Thêm file vào formData
      formData.append("name", billName); // Thêm tên hóa đơn vào formData

      const response = await axios.post(
        "http://localhost:8080/api/v1/utilitybills/import",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Hiển thị thông báo thành công
      toast.success("Add Utility Bill Successfully!");
      console.log(response.data); // In dữ liệu phản hồi từ server
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while uploading the file.");
    }
  };

  // Hàm đọc và parse file excel
  const readExcel = (file: any) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Lấy sheet đầu tiên
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      // Chuyển dữ liệu từ sheet thành JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setDataExcel(jsonData); // Lưu dữ liệu vào state
    };
    reader.readAsArrayBuffer(file); // Đọc file Excel
  };

  return (
    <div className="ctn-tdn">
      <input
        type="file"
        id="upload"
        style={{ display: "none" }}
        onChange={handleFileChange} // Gọi hàm xử lý khi chọn file
      />
      <label id="uploadLabel" htmlFor="upload">
        <i className="bx bx-upload"></i> Upload File
      </label>

      {/* Hiển thị tên file nếu người dùng đã chọn */}
      {fileName && <p className="file-name">Selected File: {fileName}</p>}

      <div className="table-tdn">
        <label id="utilityLabel" htmlFor="">
          Utility Bill
        </label>

        <Table columns="1fr 1.4fr 1.4fr 1.4fr">
          <Table.Header size="small">
            <div>Apartment</div>
            <div>Electricity</div>
            <div>Water</div>
            <div>Internet</div>
          </Table.Header>

          {dataExcel.map((room, index) => (
            <Table.Row size="small" key={index}>
              <div>{room.apartment}</div>
              <div>{room.electricity}</div>
              <div>{room.water}</div>
              <div>{room.internet}</div>
            </Table.Row>
          ))}
        </Table>
        <div className="inputName">
          <label id="lbName" htmlFor="billName">
            Bill Name:{" "}
          </label>
          <input
            id="billName"
            type="text"
            value={billName}
            onChange={(e) => setBillName(e.target.value)} // Cập nhật state
          />
        </div>
        <button type="submit" className="saveBtn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UtilityBill;
