# Giải thích cấu trúc thư mục

## 1. node_modules
Thư mục này **chứa tất cả các thư viện và package** mà bạn đã cài đặt cho dự án thông qua npm. Đây là nơi lưu trữ các **dependency** của dự án.

> ## 2. Public
File này mình thấy hiện tại chưa cần thiết nên tạm xoá đi, nếu cần sẽ thêm lại sau.

## 3. src
Đây là thư mục chính chứa toàn bộ code của ứng dụng.

components: Chứa các component React.
pages: Chứa các trang của ứng dụng.
hooks: Chứa các custom hook.
api: Chứa các hàm gọi API.
styles: Chứa các file stylesheet.

## 4. .gitignore
File này liệt kê các file hoặc thư mục mà bạn không muốn commit lên Git.

## 5. eslint.config.js:

File cấu hình cho ESLint, một công cụ giúp kiểm tra và đảm bảo chất lượng code. Nó định nghĩa các quy tắc viết code mà bạn muốn tuân thủ.

## 6. package.json
File này chứa các thông tin về dự án như tên, phiên bản, các dependency, script để chạy ứng dụng, ... Đây là file cấu hình chính của dự án.

## 7. package-lock.json
File này được tự động tạo ra khi bạn cài đặt các dependency. Nó lưu trữ thông tin chi tiết về phiên bản của từng dependency, giúp đảm bảo rằng khi bạn deploy ứng dụng lên một máy khác, các dependency sẽ được cài đặt chính xác.

## 8. README.md
File này chứa thông tin về dự án, hướng dẫn cài đặt và sử dụng.

## 9. tsconfig.json
File cấu hình cho TypeScript. Nó định nghĩa các tùy chọn biên dịch TypeScript như đường dẫn, module resolution, ...

## 10. tsconfig.app.json và tsconfig.node.json:

Đây là các file cấu hình bổ sung cho TypeScript, thường được sử dụng để cấu hình cho các môi trường khác nhau như môi trường phát triển và môi trường sản xuất.

## 11. vite.config.ts:

File cấu hình cho Vite, một build tool nhanh chóng và hiệu quả. Nó định nghĩa các tùy chọn build, server, ...