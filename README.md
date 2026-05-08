# 📡 PracticeAPI

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-blue?style=flat)
![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-brightgreen?style=flat)

A free, open REST API built for beginners who want to practice real-world API integration — no signup, no auth headaches, just clean endpoints returning real JSON.

---

## ✅ What you can do

- Fetch, create, update & delete sample user data using standard HTTP methods
- Understand request/response structure with clean, readable JSON responses
- Practice error handling — wrong routes & bad inputs return proper status codes
- Test with any tool — Postman, Thunder Client, Axios, or plain `fetch()`

---

## 🌐 Base URL

```
https://localhost:3000/api/v1
```

---

## 📋 Endpoints

| Method   | Endpoint     | Description             |
| -------- | ------------ | ----------------------- |
| `GET`    | `/users`     | Fetch all users         |
| `GET`    | `/users/:id` | Fetch single user by ID |
| `POST`   | `/users`     | Create a new user       |
| `PUT`    | `/users/:id` | Update an existing user |
| `DELETE` | `/users/:id` | Delete a user           |

---

## ⚡ Quick Example

**Request:**

```http
GET /api/v1/users/1
```

**Response:**

```json
{
  "id": 1,
  "name": "Riya Sharma",
  "email": "riya@example.com",
  "role": "user",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## 🛠️ Test With

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code Extension)
- Axios
- Native `fetch()`
- curl

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/git-shubham-side/PracticeAPI

# Install dependencies
cd PracticeAPI && npm install

# Start the server
npm start
```

Server will start at `http://localhost:3000`

---

## 📁 Project Structure

```
PracticeAPI/
├── src/
│   ├── routes/
│   │   └── users/
│   │       ├── user.controller.js
│   │       ├── user.routes.js
│   │       ├── user.schema.js
│   │       └── user.service.js
│   ├── server.js
│   └── package.json
└── README.md
```

---

## 🤝 Contributing

Pull requests are welcome! If you're a beginner and want to add more endpoints or improve docs, feel free to open an issue.

---

Built for beginners by [@git-shubham-side](https://github.com/git-shubham-side)
