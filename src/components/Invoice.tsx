import './invoice.css'

export default function AddInvoice() {
  //   const [formData, setFormData] = useState({
  //     id: "",
  //     name: "",
  //     feeType: "Maintenance Fee",
  //     fundType: "Reserve Fund",
  //     description: "",
  //   });
  //   const [selectedItems, setSelectedItems] = useState([]);

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [id]: value,
  //   }));
  // };

  // Hàm thêm mục đã chọn
  //   const addToSelected = (type) => {
  //     const value = formData[type];
  //     setSelectedItems((prevItems) => [...prevItems, value]);
  //   };

  return (
    // <div>
    //     <h2 classNameName="text-center text-2xl text-gray-700 font-extrabold">Create Invoice</h2>
    //     <div classNameName="form-group">
    //       <div classNameName="left-group">
    //         <input classNameName="w-5" type="text" />
    //         <input type="text" />
    //         <input type="text" />
    //         <input type="text" />
    //       </div>
    //     </div>
    // </div>
    <div className="modal">
      <div className="modal-header">
        <h2>Add Invoice</h2>
        <button className="close-btn">&times;</button>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group with-add">
          <label htmlFor="fee-type">Fee Type</label>
          <select id="fee-type">
            <option value="">Select</option>
          </select>
          <a href="#" className="add-link">
            Add +
          </a>
        </div>
        <div className="form-group with-add">
          <label htmlFor="fund-type">Fund Type</label>
          <select id="fund-type">
            <option value="">Select</option>
          </select>
          <a href="#" className="add-link">
            Add +
          </a>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description"></textarea>
        </div>
        <div className="selected-section">
          <h3>Selected:</h3>
          <div className="selected-items"></div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
}