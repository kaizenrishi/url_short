# URL Shortener Backend (Auth-first Architecture)

## 📌 Project Overview

This project is a **backend-first URL Shortener** built with a clean, scalable architecture. The focus is not just on making it work, but on understanding **why each design decision exists**, so the project can scale and also be defended confidently in interviews.


## 🧠 High-Level Project Flow (Current)

```text
Client Request
   ↓
Express Server (server.js)
   ↓
Environment Variables Loaded (.env)
   ↓
MongoDB Connection
   ↓
Auth Layer (User model + routes)
   ↓
Business Logic (URL logic – upcoming)
```

---

## 🗂️ Folder Structure (Current)

```text

├── 📁 src
│ ├── 📁 controllers
│ │ └── 📄 auth.controller.js
│ ├── 📁 db
│ │ └── 📄 db.js
│ ├── 📁 middlewares
│ ├── 📁 models
│ │ └── 📄 userModel.js
│ ├── 📁 routes
│ │ ├── 📄 auth.routes.js
│ │ └── 📄 url.routes.js
│ ├── 📁 utils
│ │ ├── 📄 constant.js
│ │ ├── 📄 env.js
│ │ └── 📄 validator.js
│ ├── 📁 validators
│ │ └── 📄 auth.validator.js
│ └── 📄 server.js
├── ⚙️ .gitignore
├── 📄 app.js
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── 📝 readme.md


