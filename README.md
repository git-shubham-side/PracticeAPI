# PracticeAPI

PracticeAPI is a beginner-friendly Express and MongoDB project that serves fake but realistic dataset APIs for frontend practice, API testing, and learning backend structure.

The app boots with MongoDB, auto-seeds missing records with `@faker-js/faker`, and exposes category-based REST endpoints like users, animals, locations, finance, books, colors, science, vehicles, and more.

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- Faker (`@faker-js/faker`)
- EJS
- Helmet, CORS, Morgan, Express Rate Limit

## Features

- Category-based REST API under `/api/v1`
- Auto-seeding for all supported datasets
- MongoDB-backed data storage
- Health check endpoint
- JSON error handling
- Landing page at `/api/v1/home`
- Rate limiting on `/api/*`
- Query-based result limiting with `?count=`

## Project Layout

```text
PracticeAPI/
|-- README.md
|-- .env.example
|-- categories.txt
`-- src/
    |-- app.js
    |-- package.json
    |-- connectDB/
    |   `-- db.js
    |-- controllers/
    |   `-- datasets.js
    |-- middlewares/
    |   |-- asyncHandler.js
    |   |-- errorHandler.js
    |   |-- notFound.js
    |   `-- validate.js
    |-- models/
    |   |-- Users.js
    |   |-- Animals.js
    |   |-- Location.js
    |   |-- Finance.js
    |   `-- category-specific models
    |-- services/
    |   `-- datasets.js
    |-- utils/
    |   `-- data generation and legacy seed helpers
    `-- views/
        |-- landing.ejs
        |-- notfound.ejs
        `-- under-construction.ejs
```

## Environment Variables

Create `src/.env` from the example below:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/practiceAPI
PORT=3000
ALLOWED_ORIGIN=*
```

The project already includes `.env.example` with the same values.

## Installation

From the project root:

```bash
cd src
npm install
```

## Run Locally

```bash
cd src
npm run dev
```

Or:

```bash
cd src
npm start
```

The server runs on:

```text
http://localhost:3000
```

## Base URLs

- App home: `http://localhost:3000/`
- API home page: `http://localhost:3000/api/v1/home`
- API base: `http://localhost:3000/api/v1`

## How Seeding Works

When the server starts:

1. MongoDB connection is established.
2. Each dataset is checked for minimum records.
3. Missing documents are generated with Faker and inserted automatically.

Current minimum seed targets:

- `users`, `animals`, `locations`, `finance`: 100
- `dates`, `commerce`, `localizations`, `airlines`, `books`, `colors`, `companies`, `databases`, `foods`, `images`, `lorem`, `music`, `phones`, `science`, `vehicles`, `words`: 80

## Response Pattern

Most dataset endpoints return this structure:

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

## Query Parameters

Supported on dataset routes:

- `count`

Example:

```http
GET /api/v1/books?count=5
```

Rules:

- Default count is `10`
- Maximum count is `100`
- Invalid or missing values fall back to `10`

## API Endpoints

### Utility Endpoints

| Method | Route                | Description                                            |
| ------ | -------------------- | ------------------------------------------------------ |
| `GET`  | `/api/v1/health`     | Returns API health status and uptime                   |
| `GET`  | `/api/v1/categories` | Returns all dataset categories with routes and aliases |
| `GET`  | `/api/v1/home`       | Renders the landing page                               |

### Dataset Endpoints

| Method | Route                   | Description               |
| ------ | ----------------------- | ------------------------- |
| `GET`  | `/api/v1/users`         | Returns user data         |
| `GET`  | `/api/v1/animals`       | Returns animal data       |
| `GET`  | `/api/v1/locations`     | Returns location data     |
| `GET`  | `/api/v1/finance`       | Returns finance data      |
| `GET`  | `/api/v1/date`          | Returns date data         |
| `GET`  | `/api/v1/dates`         | Alias of `/date`          |
| `GET`  | `/api/v1/commerce`      | Returns commerce data     |
| `GET`  | `/api/v1/localization`  | Returns localization data |
| `GET`  | `/api/v1/localizations` | Alias of `/localization`  |
| `GET`  | `/api/v1/airline`       | Returns airline data      |
| `GET`  | `/api/v1/airlines`      | Alias of `/airline`       |
| `GET`  | `/api/v1/book`          | Returns book data         |
| `GET`  | `/api/v1/books`         | Alias of `/book`          |
| `GET`  | `/api/v1/color`         | Returns color data        |
| `GET`  | `/api/v1/colors`        | Alias of `/color`         |
| `GET`  | `/api/v1/company`       | Returns company data      |
| `GET`  | `/api/v1/companies`     | Alias of `/company`       |
| `GET`  | `/api/v1/database`      | Returns database data     |
| `GET`  | `/api/v1/databases`     | Alias of `/database`      |
| `GET`  | `/api/v1/food`          | Returns food data         |
| `GET`  | `/api/v1/foods`         | Alias of `/food`          |
| `GET`  | `/api/v1/image`         | Returns image data        |
| `GET`  | `/api/v1/images`        | Alias of `/image`         |
| `GET`  | `/api/v1/lorem`         | Returns lorem text data   |
| `GET`  | `/api/v1/music`         | Returns music data        |
| `GET`  | `/api/v1/phone`         | Returns phone data        |
| `GET`  | `/api/v1/phones`        | Alias of `/phone`         |
| `GET`  | `/api/v1/science`       | Returns science data      |
| `GET`  | `/api/v1/vehicle`       | Returns vehicle data      |
| `GET`  | `/api/v1/vehicles`      | Alias of `/vehicle`       |
| `GET`  | `/api/v1/word`          | Returns word data         |
| `GET`  | `/api/v1/words`         | Alias of `/word`          |

## Example Requests

```http
GET /api/v1/users?count=3
GET /api/v1/finance?count=5
GET /api/v1/books?count=2
GET /api/v1/science?count=10
GET /api/v1/categories
```

## Middleware Behavior

- `helmet` adds common security headers
- `cors` allows cross-origin requests using `ALLOWED_ORIGIN`
- `morgan` logs requests
- `express-rate-limit` protects `/api/*`
- `notFound` handles unmatched routes
- `errorHandler` returns JSON errors for runtime failures

## Notes About This Repository

- The active API flow is driven from `src/app.js`
- Some older route and seed helper files still exist as legacy references
- The main live dataset logic is in `src/services/datasets.js`
- Views are only used for landing and fallback pages; dataset endpoints return JSON

## Useful Files

- Entry point: [src/app.js](src/app.js)
- Dataset service: [src/services/datasets.js](src/services/datasets.js)
- Dataset controller: [src/controllers/datasets.js](src/controllers/datasets.js)
- DB connector: [src/connectDB/db.js](src/connectDB/db.js)
- Middleware: [src/middlewares/notFound.js](src/middlewares/notFound.js), [src/middlewares/errorHandler.js](src/middlewares/errorHandler.js)

## Testing the API

You can test the API with:

- Postman
- Thunder Client
- `fetch`
- Axios
- `curl`

Example:

```bash
curl "http://localhost:3000/api/v1/companies?count=3"
```

## Future Improvements

- Add pagination and filtering
- Add search by fields
- Add Swagger or OpenAPI docs
- Add test coverage
- Remove legacy helper files

## License

This project is intended for learning and practice.
