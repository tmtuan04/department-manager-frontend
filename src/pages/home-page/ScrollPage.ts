export const highlightMenuOnScroll = () => {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll(".inner-menu li");
    const menuLinks = document.querySelectorAll(".inner-menu li a");

    if (sections.length === 0 || menuItems.length === 0) {
        console.warn("Elements not found, delaying scroll effect");
        return;
    }
    // Tạo IntersectionObserver để theo dõi sự xuất hiện của các phần tử trong viewport
    const observerOptions = {
        root: null, // viewport của trình duyệt
        threshold: 0.5, // Khi 50% của phần tử xuất hiện trong viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const targetId = entry.target.id;
            const menuLink = document.querySelector(`.inner-menu li a[href="#${targetId}"]`);

            if (entry.isIntersecting) {
                // Nếu phần tử xuất hiện trong viewport, thêm class 'active'
                menuLink?.parentElement?.classList.add("active");
            } else {
                // Nếu phần tử không còn trong viewport, bỏ class 'active'
                menuLink?.parentElement?.classList.remove("active");
            }
        });
    }, observerOptions);

    // Đăng ký các phần tử cần theo dõi
    sections.forEach((section) => {
        observer.observe(section);
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định (chuyển trang)
            const targetId = link.getAttribute("href")?.substring(1); // Lấy id từ href (bỏ dấu #)
            console.log(targetId);
            
            const targetSection = document.getElementById(targetId || "");
            console.log(targetSection);
            
            if (targetSection) {
                // Scroll xuống phần tử
                targetSection.scrollIntoView({
                    behavior: "smooth", // Cuộn mượt
                    block: "start", // Căn phần tử ở trên cùng
                });
            }
        });
    });
};
