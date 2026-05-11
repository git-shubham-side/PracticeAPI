# 🧪 PracticeAPI

**A self-hosted fake-data REST API — built for frontend learners, API testers, and AI practitioners who need realistic JSON data without building a backend.**

No sign-ups. No API keys. No third-party rate limits. Run it locally and hit endpoints instantly.

---

## 🤔 Who Is This For?

| You are...                                              | How PracticeAPI helps you                              |
| ------------------------------------------------------- | ------------------------------------------------------ |
| A **frontend beginner** learning `fetch` or `axios`     | Real JSON responses without building any backend       |
| A **React / Vue learner** rendering lists and cards     | Structured data ready to map over and display          |
| An **AI / LLM practitioner** building prompts or agents | Clean, structured datasets to feed into your workflows |
| A **Postman / Thunder Client learner**                  | Ready-made endpoints to practice API testing           |
| A **backend student** reading a real Express project    | Production-style Node.js codebase to learn from        |

---

## ⚡ Quick Start

> **Requirements:** Node.js + MongoDB running locally

```bash
# 1. Clone the repo
git clone https://github.com/git-shubham-side/PracticeAPI.git
cd PracticeAPI

# 2. Install dependencies
cd src
npm install

# 3. Setup environment
cp ../.env.example .env

# 4. Start the server
npm run dev
```

Server is live at → **`http://localhost:3000`**

```env
# Default .env values (no changes needed to get started)
MONGODB_URI=mongodb://127.0.0.1:27017/practiceAPI
PORT=3000
ALLOWED_ORIGIN=*
```

> **Auto-seeding:** On first start, the server checks MongoDB and fills every collection automatically using Faker. You don't run any seed command manually.

---

## 📦 Available Datasets

Hit any endpoint and get back realistic, structured JSON right away.

### Core Datasets (100 records seeded)

| Endpoint            | Fields you get                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| `/api/v1/users`     | `userId`, `username`, `email`, `avatar`, `birthdate`                                               |
| `/api/v1/animals`   | `owner`, `city`, `breed`, `type`, `color`, `age`, `adopted` — India-focused breeds & birds         |
| `/api/v1/locations` | `country`, `state`, `city`, `street`, `zipCode`, `latitude`, `longitude`                           |
| `/api/v1/finance`   | `account`, `transaction`, `upiId`, `pan`, `creditScore`, `loan`, `ifsc` — India-style finance data |

### Category Datasets (80 records seeded)

| Endpoint                | Alias           | What you get                       |
| ----------------------- | --------------- | ---------------------------------- |
| `/api/v1/books`         | `/book`         | Titles, authors, genres, ISBNs     |
| `/api/v1/colors`        | `/color`        | Color names, hex codes, RGB values |
| `/api/v1/vehicles`      | `/vehicle`      | Makes, models, fuel types, VIN     |
| `/api/v1/science`       | —               | Elements, units, chemical data     |
| `/api/v1/companies`     | `/company`      | Names, industries, catch phrases   |
| `/api/v1/foods`         | `/food`         | Food names, categories             |
| `/api/v1/music`         | —               | Song names, genres, artists        |
| `/api/v1/airlines`      | `/airline`      | Airline names, IATA codes          |
| `/api/v1/commerce`      | —               | Products, prices, departments      |
| `/api/v1/databases`     | `/database`     | DB names, engines, versions        |
| `/api/v1/images`        | `/image`        | Image URLs and metadata            |
| `/api/v1/lorem`         | —               | Placeholder text paragraphs        |
| `/api/v1/phones`        | `/phone`        | Phone numbers in various formats   |
| `/api/v1/words`         | `/word`         | Random words                       |
| `/api/v1/dates`         | `/date`         | Dates in various formats           |
| `/api/v1/localizations` | `/localization` | Locale codes, languages, regions   |

---

## 🔢 Query Parameters

Every dataset endpoint supports pagination and sorting:

```
GET /api/v1/users?limit=5&skip=0                    → First 5 users
GET /api/v1/books?limit=20&skip=20&sort=-createdAt  → Next 20 books, newest first
GET /api/v1/finance?limit=10                         → 10 records (default)
```

| Parameter | Type   | Default      | Max   | Description                                                   |
| --------- | ------ | ------------ | ----- | ------------------------------------------------------------- |
| `limit`   | Number | `10`         | `100` | Records per page                                              |
| `skip`    | Number | `0`          | —     | Records to skip (for pagination)                              |
| `sort`    | String | `-createdAt` | —     | Sort field (e.g., `createdAt` or `-createdAt` for descending) |

**Examples:**

- `?limit=5&skip=0` → First page (5 records)
- `?limit=5&skip=5` → Second page (next 5 records)
- `?sort=createdAt` → Sort ascending (oldest first)
- `?sort=-createdAt` → Sort descending (newest first)

---

## 📬 Response Structure

Every dataset endpoint returns the same consistent shape with pagination info:

```json
{
  "success": true,
  "status": 200,
  "dataset": "finance",
  "data": [
    {
      "_id": "6820c4d8f893dbdf2fc8658c",
      "entryId": "9ca4e18a-338e-4ad9-865a-8ff8cefebaf2",
      "account": {
        "number": "9234812345",
        "ifsc": "SBIN0001234",
        "type": "Savings"
      },
      "upiId": "rahul.sharma@upi",
      "pan": "ABCDE1234F",
      "creditScore": 742
    }
  ],
  "pagination": {
    "totalCount": 100,
    "limit": 10,
    "skip": 0,
    "totalPages": 10,
    "currentPage": 1
  },
  "message": "Retrieved 1 records from finance"
}
```

| Field                    | Description                            |
| ------------------------ | -------------------------------------- |
| `success`                | `true` if request worked               |
| `status`                 | HTTP status code (200, 400, 404, etc.) |
| `dataset`                | Which category this is                 |
| `data`                   | Your array of records                  |
| `pagination.totalCount`  | Total records in the dataset           |
| `pagination.limit`       | Records per page                       |
| `pagination.skip`        | Records skipped                        |
| `pagination.totalPages`  | Total pages available                  |
| `pagination.currentPage` | Current page number                    |
| `message`                | Human-readable status message          |

---

## 🖥️ Code Examples

### Vanilla JavaScript — `fetch`

```javascript
fetch("http://localhost:3000/api/v1/users?limit=5&skip=0")
  .then((res) => res.json())
  .then((json) => {
    console.log(json.data); // 5 users
    console.log(json.pagination); // { totalCount: 100, limit: 5, skip: 0, ... }
  });
```

### Pagination with Sorting

```javascript
async function getPagedBooks(page = 1, pageSize = 10) {
  const skip = (page - 1) * pageSize;
  const url = new URL("http://localhost:3000/api/v1/books");
  url.searchParams.append("limit", pageSize);
  url.searchParams.append("skip", skip);
  url.searchParams.append("sort", "-createdAt"); // newest first

  const res = await fetch(url);
  const json = await res.json();
  return json; // includes both data and pagination info
}
```

### Axios

```javascript
const response = await axios.get("http://localhost:3000/api/v1/finance", {
  params: {
    limit: 10,
    skip: 0,
    sort: "-createdAt",
  },
});
console.log(response.data.data); // finance records
console.log(response.data.pagination); // pagination info
```

### Python

```python
import requests

url = "http://localhost:3000/api/v1/animals"
params = {"limit": 5, "skip": 0, "sort": "-createdAt"}
res = requests.get(url, params=params)
data = res.json()
animals = data["data"]
print(f"Page {data['pagination']['currentPage']} of {data['pagination']['totalPages']}")
print(animals)
```

### cURL

```bash
curl "http://localhost:3000/api/v1/companies?limit=10&skip=0&sort=-createdAt"
```

---

## 🤖 Using PracticeAPI for AI Practice

PracticeAPI works great as a data source for anyone building LLM applications, AI agents, or prompt engineering workflows.

### Feed structured data into prompts

```python
import requests

users = requests.get("http://localhost:3000/api/v1/users?count=10").json()["data"]

prompt = f"""
Here is a list of users: {users}

Identify any patterns in their job titles and suggest a team structure.
"""
# Send this to Claude, GPT-4, Gemini, or any LLM
```

### Test RAG pipelines and vector stores

```python
# Pull data, embed it, push to a vector DB — all with realistic fake records
finance_data = requests.get("http://localhost:3000/api/v1/finance?count=50").json()["data"]

# Great for testing chunking, retrieval, and embedding pipelines
# before you connect to real production data
```

### Mock backend tools for AI agents

The consistent endpoint structure and response format make PracticeAPI a clean fit as a **mock tool** for AI agents — realistic enough to build and test real workflows without touching real data.

---

## 🔧 Utility Endpoints

| Method | Route                | What it does                                       |
| ------ | -------------------- | -------------------------------------------------- |
| `GET`  | `/api/v1/health`     | Server health status and uptime                    |
| `GET`  | `/api/v1/categories` | All datasets with routes, aliases, and seed counts |
| `GET`  | `/api/v1/home`       | Landing page (renders in browser)                  |
| `GET`  | `/api/v1/docs`       | Full API documentation with examples               |

---

## 🚦 Rate Limiting

All `/api/*` routes are rate-limited to **100 requests per 15 minutes** per IP. This is intentional — it simulates real-world API behavior so you can practice handling 429 errors too.

---

## 📁 Project Structure

```
PracticeAPI/
├── .env.example
└── src/
    ├── app.js                        ← Express app setup (middleware + route mounting)
    ├── server.js                     ← Server bootstrap, DB warmup, graceful shutdown
    ├── connectDB/
    │   └── db.js                     ← MongoDB connection (reuses existing connection)
    ├── routes/
    │   ├── index.js                  ← Central route composition
    │   ├── web.routes.js             ← Landing page routes
    │   └── api.routes.js             ← API endpoint routes
    ├── controllers/
    │   ├── datasets.js               ← Dataset API controller
    │   ├── pages.js                  ← Landing page controller
    │   └── system.js                 ← Health/status controller
    ├── services/
    │   └── datasets.js               ← Core logic: dataset registry, seeding, querying
    ├── models/
    │   ├── Users.js                  ← Dedicated schema (password field hidden by default)
    │   ├── Animals.js                ← Dedicated schema
    │   ├── Location.js               ← Dedicated schema
    │   ├── Finance.js                ← Dedicated schema (nested account/loan structure)
    │   └── categoryModelFactory.js   ← Generic schema factory for all other categories
    ├── utils/
    │   ├── generateData.js           ← User data generator
    │   ├── generateAnimals.js        ← India-focused animal data generator
    │   ├── genLocation.js            ← Location data generator
    │   └── DataGeneration/Finance/   ← Finance data generator (UPI, PAN, IFSC)
    ├── middlewares/
    │   ├── asyncHandler.js           ← Wraps async controllers, no try/catch needed
    │   ├── errorHandler.js           ← Returns JSON errors (+ stack trace in dev)
    │   ├── notFound.js               ← 404 handler
    │   └── validate.js
    └── views/
        ├── landing.ejs               ← Home page
        └── notfound.ejs              ← 404 page
```

> **If you want to understand this project**, start with these 4 files in order:
> `src/server.js` → `src/app.js` → `src/routes/api.routes.js` → `src/services/datasets.js`

---

## ⚙️ How It Works Internally

When the server starts:

1. MongoDB connects (connection is reused, never duplicated)
2. `warmDatasets()` runs and checks every collection
3. Any collection below minimum count gets auto-filled with Faker data
4. Server starts listening on `PORT`

When you make a request like `GET /api/v1/books?count=5`:

1. Route handler in `routes/api.routes.js` picks it up
2. `getDatasetRecords` passes it to the controller
3. Controller calls `listDatasetRecords("books", 5)`
4. Service sanitizes `count` (default 10, max 100)
5. `ensureMinimumDocuments()` checks if DB has enough records
6. If not, generates and inserts more via Faker
7. Returns latest records: `find().sort({ createdAt: -1 }).limit(5).lean()`
8. Controller responds with `{ success, dataset, count, data }`

---

## ❓ FAQ

**Do I need to know backend development to use this?**
No. Just run the server and send requests from your frontend, Postman, or Python script.

**Where does the data come from?**
Everything is generated by [`@faker-js/faker`](https://fakerjs.dev/). No real personal data — but realistic enough to build with.

**Does the data reset on every restart?**
No. Data lives in MongoDB and persists across restarts. New records are only added when a collection drops below its minimum count.

**Why is finance and animal data India-specific?**
Intentional. The finance data uses Indian formats (UPI IDs, PAN cards, IFSC codes). The animal data uses Indian breeds and birds. This makes it more relatable for Indian developers.

**Can I use this in production?**
This project is built for **learning and practice only**.

---

## 🛣️ Roadmap

- [ ] Pagination — `?page=2&limit=10`
- [ ] Field-level filtering — `?city=Mumbai`
- [ ] Search by field value
- [ ] OpenAPI / Swagger documentation
- [ ] Hosted public URL (no local setup needed)

---

## 🤝 Contributing

Found a bug? Want to add a new dataset category? PRs and issues are open.

---

## 📄 License

Made for learning. Use it, break it, build with it.
