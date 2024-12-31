import './invoice.css'

export default function AddInvoice() {

  
  return (
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