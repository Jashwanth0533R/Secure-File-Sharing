# 🔐 Secure File Sharing System

![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-3.1-black?logo=flask)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightblue?logo=sqlite)
![HTML](https://img.shields.io/badge/Frontend-HTML5-orange?logo=html5)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript)
![Deployment](https://img.shields.io/badge/Deployment-Flask-success)
![Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-Academic-lightgrey)

---

## 📌 Project Overview

This project presents a secure web-based file sharing application that allows users to upload, manage, and share files safely over the internet.

The system integrates:

- Secure User Authentication using JWT
- Flask Backend Development
- SQLite Database Integration
- REST API Development
- File Upload & Download Functionality
- Role-Based Access Control

The application provides a simple and user-friendly interface for secure file management and sharing between authenticated users.

---

## 🚀 Application Features

- 🔐 User Registration & Login System
- 🔑 JWT-Based Authentication
- 📁 Secure File Upload & Download
- 👥 Role-Based Access Control
- 🗂️ File Permission Management
- 🌐 REST API Support
- ⚡ Flask Backend Integration
- 💾 SQLite Database Support

---

## 🧠 System Workflow

1. User registers and logs into the system
2. JWT token is generated for secure authentication
3. Authenticated users can upload files securely
4. Files are stored safely in local/cloud storage
5. Authorized users can access and download files
6. Access permissions prevent unauthorized usage

---

## 🏗️ Technology Stack

### Backend
- Python 3
- Flask
- Flask-JWT-Extended
- REST APIs

### Frontend
- HTML
- CSS
- JavaScript

### Database
- SQLite

### Tools & Libraries
- Werkzeug
- Requests
- JWT Authentication

### Deployment
- Flask Development Server
- Gunicorn

---

## 📂 Project Structure

```bash

Secure-File-Sharing-System/
├── .gitignore
├── backend
│   ├── .env
│   ├── app.py
│   ├── config.py
│   ├── models
│   │   ├── audit_model.py
│   │   └── file_model.py
│   ├── requirements.txt
│   ├── routes
│   │   ├── auth_routes.py
│   │   └── file_routes.py
│   ├── services
│   │   ├── audit_service.py
│   │   ├── encryption_service.py
│   │   ├── s3_services.py
│   │   └── __init__.py
│   └── utils
│       ├── password_hash.py
│       └── rbac.py
├── database
│   └── schema.sql
├── frontend
│   ├── about.css
│   ├── about.html
│   ├── assets
│   │   ├── background.mp4
│   │   └── cloud-logo.gif
│   ├── dashboard.css
│   ├── dashboard.js
│   ├── index.html
│   ├── login
│   │   ├── login.css
│   │   ├── login.html
│   │   ├── login.js
│   │   └── register.html
│   ├── script.js
│   ├── share.html
│   ├── style.css
│   ├── upload.css
│   ├── upload.html
│   ├── upload.js
│   └── user_data.html
├── README.md
├── render.yaml
├── app.py
├── requirements.txt
├── README.md

```


## ⚙️ Local Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Jashwanth0533R/Secure-File-Sharing-System.git

cd Secure-File-Sharing-System
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

Activate:

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run Application

```bash
python app.py
```

Open in browser:

```bash
http://127.0.0.1:5000
```

---

## 🔐 Authentication & Security

The project implements secure authentication mechanisms including:

- JWT Token Authentication
- Protected Flask Routes
- Password Validation
- User Authorization
- Role-Based Access Control
- Secure Session Handling

These features ensure safe and secure file sharing between users.

---

## 📊 Database Management

The application uses SQLite Database for:

- User Registration Data
- Login Credentials
- File Information
- User Permissions
- Access Management

---

## 🌐 REST API Features

The backend APIs handle:

- User Authentication
- File Upload Requests
- File Download Requests
- User Validation
- Secure Access Handling

---

## 📸 Application Modules

### 🔹 Login Module
Allows users to securely log into the system.

### 🔹 Registration Module
Allows new users to create accounts securely.

### 🔹 File Upload Module
Authenticated users can upload files securely.

### 🔹 File Sharing Module
Files can be shared with authorized users.

### 🔹 Dashboard
Displays uploaded files and user activities.

---

## ☁️ Deployment Configuration

### Build Command

```bash
pip install -r requirements.txt
```

### Start Command

```bash
gunicorn app:app
```

Application runs on:

```bash
0.0.0.0:$PORT
```

---

## 📈 Future Enhancements

- End-to-End File Encryption
- Multi-Factor Authentication
- Docker Containerization
- Cloud Storage Integration
- Admin Dashboard
- Email Notifications
- File Expiration Links
- AI-Based Threat Detection

---

## 💡 Learning Outcomes

Through this project, I gained practical experience in:

- Flask Backend Development
- Authentication Systems
- REST API Development
- Database Integration
- Secure File Handling
- Web Application Security
- Full Stack Development

---

## 👨‍💻 Author

### Jashwanth Kumar Gutta

AI & ML Student | Backend Developer | Python Programmer

📧 Email: gjashwanthkumar711@gmail.com

🔗 GitHub:  
https://github.com/Jashwanth0533R

🔗 LinkedIn:  
https://www.linkedin.com/in/jashwanth-kumar-g-431477383/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📜 License

Developed for educational and academic purposes only.
