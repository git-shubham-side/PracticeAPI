# PracticeAPI

> A beginner-friendly REST API server that serves fake but realistic datasets — perfect for frontend practice, API testing, and learning backend structure.

---

## Overview

PracticeAPI is built with **Express** and **MongoDB**. It auto-seeds realistic dummy data using `@faker-js/faker` on startup and exposes clean, category-based REST endpoints under `/api/v1`.

No setup headaches — just clone, install, and start hitting endpoints.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express |
| Database | MongoDB + Mongoose |
| Data Generation | `@faker-js/faker` |
| Templating | EJS |
| Security & Utilities | Helmet, CORS, Morgan, Express Rate Limit |

---

## Features

- 20+ dataset categories under `/api/v1`
- Auto-seeding on server start — no manual seed step needed
- MongoDB-backed persistent storage
- Health check endpoint
- Consistent JSON response structure
- Rate limiting on all `/api/*` routes
- `?count=` query param to control result size
- EJS-rendered landing page at `/api/v1/home`

---

## Project Structure

```
PracticeAPI/
├── README.md
├── .env.example
├── categories.txt
└── src/
    ├── app.js                  ← Entry point
    ├── package.json
    ├── connectDB/
    │   └── db.js               ← MongoDB connection
    ├── controllers/
    │   └── datasets.js         ← Route handlers
    ├── middlewares/
    │   ├── asyncHandler.js
    │   ├── errorHandler.js     ← JSON error responses
    │   ├── notFound.js         ← 404 handler
    │   └── validate.js
    ├── models/
    │   ├── Users.js
    │   ├── Animals.js
    │   ├── Location.js
    │   ├── Finance.js
    │   └── ...                 ← One model per category
    ├── services/
    │   └── datasets.js         ← Core dataset logic & seeding
    ├── utils/
    │   └── ...                 ← Data generation helpers
    └── views/
        ├── landing.ejs
        ├── notfound.ejs
        └── under-construction.ejs
```

---

## Getting Started

### Prerequisites

- Node.js v16+
- MongoDB running locally (default: `mongodb://127.0.0.1:27017`)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd PracticeAPI

# Install dependencies
cd src
npm install
```

### Environment Setup

Create `src/.env` based on the provided example:

```bash
cp .env.example src/.env
```

Default values:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/practiceAPI
PORT=3000
ALLOWED_ORIGIN=*
```

### Run the Server

```bash
# Development (with auto-reload)
cd src
npm run dev

# Production
cd src
npm start
```

Server will be available at: `http://localhost:3000`

---

## How Auto-Seeding Works

On every server start:

1. MongoDB connection is established
2. Each dataset collection is checked for minimum record count
3. Any missing documents are generated with Faker and inserted automatically

**Seed targets:**

| Collections | Minimum Records |
|---|---|
| `users`, `animals`, `locations`, `finance` | 100 |
| All other categories | 80 |

---

## API Reference

### Base URLs

| Purpose | URL |
|---|---|
| App root | `http://localhost:3000/` |
| API landing page | `http://localhost:3000/api/v1/home` |
| API base | `http://localhost:3000/api/v1` |

---

### Utility Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/api/v1/health` | API health status and uptime |
| `GET` | `/api/v1/categories` | All available categories with routes and aliases |
| `GET` | `/api/v1/home` | Rendered landing page |

---

### Dataset Endpoints

All dataset routes support the `?count=` query parameter (default: `10`, max: `100`).

| Method | Route | Alias | Description |
|---|---|---|---|
| `GET` | `/api/v1/users` | — | User profiles |
| `GET` | `/api/v1/animals` | — | Animal records |
| `GET` | `/api/v1/locations` | — | Location data |
| `GET` | `/api/v1/finance` | — | Finance records |
| `GET` | `/api/v1/date` | `/dates` | Date data |
| `GET` | `/api/v1/commerce` | — | Commerce data |
| `GET` | `/api/v1/localization` | `/localizations` | Localization data |
| `GET` | `/api/v1/airline` | `/airlines` | Airline data |
| `GET` | `/api/v1/book` | `/books` | Book records |
| `GET` | `/api/v1/color` | `/colors` | Color data |
| `GET` | `/api/v1/company` | `/companies` | Company records |
| `GET` | `/api/v1/database` | `/databases` | Database metadata |
| `GET` | `/api/v1/food` | `/foods` | Food items |
| `GET` | `/api/v1/image` | `/images` | Image metadata |
| `GET` | `/api/v1/lorem` | — | Lorem text blocks |
| `GET` | `/api/v1/music` | — | Music records |
| `GET` | `/api/v1/phone` | `/phones` | Phone numbers |
| `GET` | `/api/v1/science` | — | Science data |
| `GET` | `/api/v1/vehicle` | `/vehicles` | Vehicle records |
| `GET` | `/api/v1/word` | `/words` | Word data |

---

## Query Parameters

| Parameter | Type | Default | Max | Description |
|---|---|---|---|---|
| `count` | `number` | `10` | `100` | Number of records to return |

Invalid or missing values fall back to `10`.

**Example:**

```http
GET /api/v1/books?count=5
GET /api/v1/users?count=25
```

---

## Response Format

All dataset endpoints return a consistent JSON structure:

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

## Example Requests

```bash
# Get 3 users
curl "http://localhost:3000/api/v1/users?count=3"

# Get 5 finance records
curl "http://localhost:3000/api/v1/finance?count=5"

# Get 2 books
curl "http://localhost:3000/api/v1/books?count=2"

# Get all available categories
curl "http://localhost:3000/api/v1/categories"

# Check API health
curl "http://localhost:3000/api/v1/health"
```

You can also test with **Postman**, **Thunder Client**, **Axios**, or the browser `fetch` API.

---

## Middleware

| Middleware | Purpose |
|---|---|
| `helmet` | Sets common security headers |
| `cors` | Allows cross-origin requests via `ALLOWED_ORIGIN` |
| `morgan` | HTTP request logging |
| `express-rate-limit` | Rate limits all `/api/*` routes |
| `notFound` | Catches unmatched routes and returns 404 |
| `errorHandler` | Returns structured JSON for runtime errors |

---

## Key Files

| File | Role |
|---|---|
| `src/app.js` | Application entry point |
| `src/services/datasets.js` | Core dataset logic and auto-seeding |
| `src/controllers/datasets.js` | Route handlers |
| `src/connectDB/db.js` | MongoDB connection setup |
| `src/middlewares/errorHandler.js` | Global error handler |
| `src/middlewares/notFound.js` | 404 fallback handler |

---

## Roadmap

- [ ] Pagination support (`?page=` and `?limit=`)
- [ ] Field-level filtering (`?filter[name]=John`)
- [ ] Swagger / OpenAPI documentation
- [ ] Unit and integration test coverage
- [ ] Clean up legacy seed helper files

---

## License

This project is intended for **learning and practice purposes only**.
