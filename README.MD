# Giới thiệu
- EMR (Electronic Medical Record):là một nền tảng phần mềm cho phép nhập, lưu trữ và duy trì dữ liệu y tế kỹ thuật số bằng điện tử.
# mô tả architecture (Client: React/NextJS → API: NestJS → DB: MongoDB).
Client (Frontend - React/NextJS)
        |
        |  HTTP Request (REST API)
        |
Backend (NestJS API)
        |
        |
Database (MongoDB)
- Client: Sử dụng React/NextJS để xây dựng giao diện người dùng tương tác và thân thiện.    
- API: Sử dụng NestJS để xây dựng các API RESTful, xử lý logic nghiệp vụ và giao tiếp giữa client và cơ sở dữ liệu.
- DB: Sử dụng MongoDB để lưu trữ dữ liệu y tế một cách linh hoạt và hiệu quả.
