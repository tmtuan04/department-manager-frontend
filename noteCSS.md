# Về vấn đề sử dụng body, html, *

Đúng vậy! Việc sử dụng selector toàn cục như `body {}, html {}, hoặc * {}` trong CSS sẽ ảnh hưởng đến toàn bộ ứng dụng, vì chúng áp dụng trên toàn trang, không giới hạn trong một **component** cụ thể. Khi bạn import các file CSS có sử dụng body {}, các styles này sẽ áp dụng cho mọi thành phần trong ứng dụng, không chỉ giới hạn ở **component** nơi bạn import.

Cách khắc phục:
- Định nghĩa styles cho một class wrapper bao quanh **component** thay vì `body {}`, và chỉ áp dụng class đó trong **component** cụ thể.

- **Dùng CSS Modules hoặc CSS-in-JS để đảm bảo các styles chỉ áp dụng cục bộ trong component**. (Hiện tại đang dùng cách này)

- Hạn chế việc thay đổi `body {}` trực tiếp trong CSS của **component**; thay vào đó, hãy đặt style trên một `div `wrapper hoặc một class khác để tránh ảnh hưởng đến toàn bộ ứng dụng.

**Vậy ta dùng `body` ở những đâu**?
- Chỉ nên dùng ở `App.tsx`
- Thật ra dùng đến `body` rất nhiều, mình vẫn nên xem lại xem sao