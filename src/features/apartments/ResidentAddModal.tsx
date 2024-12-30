import React, { useState, useEffect } from "react";
import "./style.css";
import { toast } from "react-toastify";
import axios from "axios";

interface ResidentAddModalProps {
  onResidentsSelect: (residents: { id: number; name: string; dob: string }[]) => void;
}

export default function ResidentAddModal({ onResidentsSelect }: ResidentAddModalProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]); // Chỉ lưu danh sách tên cho gợi ý
  const [residents, setResidents] = useState<{ id: number; name: string; dob: string }[]>([]);
  const [selectedResidents, setSelectedResidents] = useState<{ id: number; name: string; dob: string }[]>([]);

  // Hàm gọi API để lấy danh sách residents
  const apiAllResidents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/residents?size=100&page=1`);
      const residentsData = response.data.data.result;

      // Trích xuất id, name, và dob từ API
      const residentsList = residentsData.map((resident: any) => ({
        id: resident.id,
        name: resident.name,
        dob: resident.statusDate, // Hoặc resident.dob, tùy API
      }));

      setResidents(residentsList); // Lưu danh sách đầy đủ
      setSuggestions(residentsList.map((resident) => resident.name)); // Chỉ lưu danh sách tên cho gợi ý
    } catch (err) {
      toast.error("Có lỗi xảy ra khi tải danh sách residents");
    }
  };

  useEffect(() => {
    apiAllResidents();
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = residents
        .filter((resident) => resident.name.toLowerCase().includes(value.toLowerCase()))
        .map((resident) => resident.name); // Chỉ lấy tên để hiển thị trong gợi ý
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSelect = (residentName: string) => {
    // Tìm resident trong danh sách đầy đủ
    const selectedResident = residents.find((resident) => resident.name === residentName);
    if (selectedResident && !selectedResidents.some((r) => r.id === selectedResident.id)) {
      setSelectedResidents([...selectedResidents, selectedResident]);
    }
    setSearchValue(""); // Clear input field
    setSuggestions([]); // Clear suggestions
  };

  const handleRemove = (residentId: number) => {
    setSelectedResidents(selectedResidents.filter((item) => item.id !== residentId));
  };

  const handleSave = () => {
    onResidentsSelect(selectedResidents); // Trả danh sách residents đã chọn về parent component
    toast.success("Residents added successfully");
  };

  return (
    <div className="wrp">
      <div className="searchDiv">
        <p className="text-cpn">Search Resident:</p>
        <div className="search-ctn">
          <input
            type="text"
            id="searchInput"
            className="search-input"
            placeholder="Search here..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <ul
            id="suggestions"
            className={`suggestions ${suggestions.length === 0 ? "hidden" : ""}`}
          >
            {suggestions.map((name, index) => (
              <li
                key={index}
                onClick={() => handleSelect(name)}
                className="suggestion-item"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="inforDiv">
        <p className="text-cpn">Selected Residents:</p>
        <div className="selectedRes">
          {selectedResidents.length > 0 ? (
            selectedResidents.map((resident) => (
              <div key={resident.id} className="selectedResidentItem">
                {resident.name} (ID: {resident.id})
                <span
                  className="remove-icon"
                  onClick={() => handleRemove(resident.id)}
                >
                  &times;
                </span>
              </div>
            ))
          ) : (
            <p>No residents selected</p>
          )}
        </div>
      </div>

      <div className="wrp-btn">
        <button className="saveButton" type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
