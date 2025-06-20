# Custom API Server

This project is a custom RESTful API server built using Node.js, Express, and MongoDB. It supports full CRUD operations and provides API endpoints for managing users and posts. An optional React + Vite frontend is included to demonstrate interaction with the API.

---

## 1. APIs and Functionality

### Users API

- `GET /api/users` – Retrieve all users.
- `GET /api/users/:id` – Retrieve a user by ID.
- `POST /api/users` – Create a new user.
- `PUT /api/users/:id` – Update an existing user.
- `DELETE /api/users/:id` – Delete a user by ID.

### Posts API (Example)

- `GET /api/posts` – Retrieve all posts.
- `POST /api/posts` – Create a new post.
- `PUT /api/posts/:id` – Update a post.
- `DELETE /api/posts/:id` – Delete a post.

---

## 2. Database Integration

### Database Used

We use **MongoDB** as our database.

### Integration Details

The server uses **Mongoose**, an Object Data Modeling (ODM) library, to interact with MongoDB.

**Example Connection (server.js or db.js):**

```js
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

---

## 3. Running the Server

### Prerequisites

- Node.js (v16 or higher)
- npm
- MongoDB installed locally or running on the cloud (e.g., MongoDB Atlas)

### Instructions

#### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

#### Install Backend Dependencies

```bash
npm install
```

#### Start the Server

```bash
npm start
```

The server will run on: `http://localhost:3000`

---

## 4. Running the Frontend (Optional)

### Prerequisites

- Node.js
- npm

### Instructions

```bash
cd frontend
npm install
npm start
```

The frontend will run on: `http://localhost:5173`

---

## 5. Interacting with the API

### Sample Request

**POST /api/users**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

### Sample Response

```json
{
  "id": "60d21b4667d0d8992e610c85",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "createdAt": "2025-06-20T18:30:00.000Z"
}
```

---

## 📁 Project Structure

```
.
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── .env
├── frontend (optional)
│   ├── src
│   ├── public
│   └── package.json
└── README.md
```

---

## 🔧 Tools & Libraries

- Node.js
- Express
- MongoDB
- Mongoose
- (Optional) React + Vite for frontend

---

## 📌 Notes

- Use Postman, Insomnia, or curl to test your API endpoints.
- Make sure MongoDB is running before starting the server.
- Store sensitive data (like DB connection strings) in a `.env` file.
