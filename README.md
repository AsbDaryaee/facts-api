# Facts API

A high-performance REST API for interesting facts across multiple domains, built with Bun.

## 📚 Overview

This API provides access to a curated collection of 200 fascinating facts across six categories:

- 🌌 Astronomy
- 🔬 Biology
- ⚛️ Physics
- 🦁 Animals
- 📜 History
- 💻 Technology

Each fact includes detailed metadata such as verification status, sources, discovery year, and interest rating.

## Endpoints

### Get All Facts

Retrieves a list of facts with optional filtering.

**URL:** `/api/facts`  
**Method:** `GET`  
**Query Parameters:**

- `limit` (optional): Maximum number of facts to return
- `verified` (optional): Filter by verification status (true/false)

**Success Response:**

- **Code:** 200
- **Content:** Array of Fact objects

**Example Request:**

```
GET /api/facts?limit=5&verified=true
```

### Get Fact by ID

Retrieves a specific fact by its ID.

**URL:** `/api/facts/:id`  
**Method:** `GET`  
**URL Parameters:**

- `id`: The numeric ID of the fact

**Success Response:**

- **Code:** 200
- **Content:** Fact object

**Error Response:**

- **Code:** 404
- **Content:** `{ "error": "Fact not found" }`

**Example Request:**

```
GET /api/facts/42
```

### Get Facts by Category

Retrieves all facts belonging to a specific category.

**URL:** `/api/facts/category/:category`  
**Method:** `GET`  
**URL Parameters:**

- `category`: The category name

**Success Response:**

- **Code:** 200
- **Content:** Array of Fact objects

**Example Request:**

```
GET /api/facts/category/science
```

### Search Facts

Searches for facts containing the specified query in title, content, or category.

**URL:** `/api/facts/search`  
**Method:** `GET`  
**Query Parameters:**

- `q`: The search query

**Success Response:**

- **Code:** 200
- **Content:** Array of Fact objects

**Example Request:**

```
GET /api/facts/search?q=dinosaur
```

## Fact Object Structure

```typescript
interface Fact {
  id: number;
  category: Categories;
  title: string;
  fact: string;
  verified: boolean;
  source: string;
  year_discovered: number;
  interesting_rating: number;
}
```

## 📝 Data Attribution

All facts in this API were curated and provided by Claude AI (Anthropic Claude 3.7 Sonnet).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with ❤️ and powered by [Bun](https://bun.sh/).
