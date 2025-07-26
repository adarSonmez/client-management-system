# Client Management System

A comprehensive **Client-Project Management System** built with modern web technologies:
- **Frontend:** TypeScript, ReactJS, Bootstrap 5
- **Backend:** Node.js, GraphQL
- **Database:** MongoDB

Efficiently manage clients, projects, and collaborate with your team using a responsive, intuitive interface.

---

## Features

- **Client Management:** Add, view, edit, and delete client records.
- **Project Tracking:** Assign projects to clients, manage statuses, deadlines, and progress.
- **Team Collaboration:** Track team members and assign responsibilities.
- **GraphQL API:** Flexible data querying with GraphQL for fast and reliable communication between frontend and backend.
- **Responsive UI:** Built with ReactJS and Bootstrap 5 for seamless experience on any device.
- **Authentication:** Secure login and user management (customizable).

---

## Technologies Used

| Frontend            | Backend    | Database |
|---------------------|------------|----------|
| TypeScript          | Node.js    | MongoDB  |
| ReactJS             | GraphQL    |          |
| Bootstrap 5         |            |          |

---

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adarSonmez/client-management-system.git
   cd client-management-system
   ```

2. **Install dependencies**
   ```bash
   # For frontend
   cd client
   npm install
   # For backend
   cd ../server
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `server` directory and set your MongoDB URI and other required variables:
   ```env
   MONGO_URI=your_mongodb_uri
   PORT=5000
   ```

4. **Run the Application**

   - **Backend**
     ```bash
     cd server
     npm run dev
     ```
   - **Frontend**
     ```bash
     cd client
     npm start
     ```

   The frontend app will run on [http://localhost:3000](http://localhost:3000) and backend on [http://localhost:5000](http://localhost:5000).

---

## Project Structure

```
client-management-system/
├── client/     # ReactJS frontend
├── server/     # Node.js + GraphQL backend
├── README.md
```
---

## Author

Developed by [adarSonmez](https://github.com/adarSonmez)
