# MERN Task Distribution System

A full-stack application built using MERN (MongoDB, Express.js, React, Node.js) that allows an admin to:

- Securely login
- Create agents
- Upload a CSV/XLS/XLSX file 
- Distribute tasks evenly among agents
- View distributed lists per agent

---

##  Tech Stack

- **Frontend**: React.js with module.css
- **Backend**: Express.js with JWT-based auth
- **Database**: MongoDB
- **CSV Parsing**: `csv-parser`, `xlsx`
- **File Uploads**: Multer

---

##  Features

- Admin Login (JWT)
- Agent Creation & Management
- File Upload with Validation
- Auto Task Distribution
- Agent-wise Task Listing

---

##  Project Structure

/client → React Frontend
/server → Node.js + Express Backend
/models → Mongoose Models
/controllers → Business Logic
/routes → Backend API Routes

---

##  Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/PunithParamesh/task-distributor.git
cd task-distributor

### 2. Backend Setup

cd server
npm install

# Fill in your PORT, Mongo URI and JWT secret in .env
.env Example 

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key\

npm start

### 3. Frontend Setup
cd client
npm install
npm start


Admin Credentials (Default)
You have to insert manually via MongoDB Compass under users collection in your database ( Must required )

Example

{
  "email": "admin@admin.com",
  "password": "admin123"
}


Demo Walkthrough

-Admin Login → /login
-Add Agent → /add-agent
-view Agents → /agents
-Upload File → /upload
-View Tasks → /tasks