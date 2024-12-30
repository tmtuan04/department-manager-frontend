const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');

// Dữ liệu mẫu
const data = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew"
];

// Hàm hiển thị gợi ý
function showSuggestions(value) {
  // Lọc nội dung khớp
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  // Làm rỗng danh sách trước
  suggestionsList.innerHTML = '';

  if (filteredData.length > 0) {
    // Hiển thị danh sách gợi ý
    filteredData.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('click', () => {
        searchInput.value = item;
        suggestionsList.classList.add('hidden');
      });
      suggestionsList.appendChild(li);
    });
    suggestionsList.classList.remove('hidden');
  } else {
    suggestionsList.classList.add('hidden');
  }
}

// Lắng nghe sự kiện khi gõ phím
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.trim();
  if (value) {
    showSuggestions(value);
  } else {
    suggestionsList.classList.add('hidden');
  }
});

// Ẩn gợi ý khi nhấn bên ngoài
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    suggestionsList.classList.add('hidden');
  }
});
