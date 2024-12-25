function toggleDropdown(header) {
    const details = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
  
    if (details.style.display === 'block') {
      details.style.display = 'none';
      arrow.classList.remove('open');
    } else {
      details.style.display = 'block';
      arrow.classList.add('open');
    }
  }
  