# PracticeAPI

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-blue?style=flat)
![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-brightgreen?style=flat)

A free, open REST API project built for beginners who want to practice real-world API integration with clean JSON, MongoDB-backed fake data, and simple category-based endpoints.

---

## What you can do

- Fetch realistic sample data for users, animals, locations, finance, books, colors, science, vehicles, and more
- Practice API integration with `fetch`, Axios, Postman, or Thunder Client
- Explore structured JSON responses with category-based routes
- Use query params like `?count=10` to control result size
- Learn a clean Express + MongoDB + Faker project structure

---

## Base URL

```text
http://localhost:3000/api/v1
```

---

## Main Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/health` | API health status |
| `GET` | `/categories` | Available dataset categories |
| `GET` | `/users` | User data |
| `GET` | `/animals` | Animal data |
| `GET` | `/locations` | Location data |
| `GET` | `/finance` | Finance data |
| `GET` | `/books` | Book data |
| `GET` | `/science` | Science data |
| `GET` | `/vehicles` | Vehicle data |
| `GET` | `/words` | Word data |

Other supported category routes:

- `/date` and `/dates`
- `/commerce`
- `/localization` and `/localizations`
- `/airline` and `/airlines`
- `/book` and `/books`
- `/color` and `/colors`
- `/company` and `/companies`
- `/database` and `/databases`
- `/food` and `/foods`
- `/image` and `/images`
- `/lorem`
- `/music`
- `/phone` and `/phones`
- `/science`
- `/vehicle` and `/vehicles`
- `/word` and `/words`

---

## Quick Example

**Request:**

```http
GET /api/v1/books?count=2
```

**Response:**

```json
{
  "success": true,
  "dataset": "books",
  "count": 2,
  "data": [
    {
      "_id": "6820c4d8f893dbdf2fc8658c",
      "entryId": "9ca4e18a-338e-4ad9-865a-8ff8cefebaf2",
      "title": "Example Title"
    }
  ]
}
```

---

## Auto Seeding

The app connects to MongoDB on startup and automatically fills missing records using Faker.

- `users`, `animals`, `locations`, `finance`: minimum `100`
- most other categories: minimum `80`

If you hit an endpoint and the dataset is below its minimum size, the project fills it automatically.

---

## Test With

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/)
- Axios
- Native `fetch()`
- `curl`

---

## Run Locally

```bash
# Clone the repo
git clone https://github.com/git-shubham-side/PracticeAPI

# Install dependencies
cd PracticeAPI/src
npm install

# Create env file
# add src/.env using values from ../.env.example

# Start the server
npm run dev
```

Server will start at `http://localhost:3000`

---

## Environment Variables

Example `src/.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/practiceAPI
PORT=3000
ALLOWED_ORIGIN=*
```

---

## Project Structure

```text
PracticeAPI/
|-- README.md
|-- .env.example
|-- categories.txt
`-- src/
    |-- app.js
    |-- connectDB/
    |   `-- db.js
    |-- controllers/
    |   `-- datasets.js
    |-- middlewares/
    |-- models/
    |-- services/
    |   `-- datasets.js
    |-- utils/
    `-- views/
```

---

## Notes

- The active API flow runs from `src/app.js`
- Dataset generation and seeding logic lives in `src/services/datasets.js`
- All dataset endpoints are `GET` based right now
- `count` defaults to `10` and is capped at `100`

---

## Contributing

Pull requests are welcome. If you want to add more datasets, improve docs, or clean legacy helpers, feel free to open an issue or PR.

---

Built for beginners by [@git-shubham-side](https://github.com/git-shubham-side)
