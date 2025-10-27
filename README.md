# 🛍️ Simple Product CRUD API (Node.js + Express + Mongoose)

A lightweight RESTful API built with **Node.js**, **Express**, and **Mongoose** for performing basic **CRUD (Create, Read, Update, Delete)** operations on a MongoDB collection of products.

---

## 🚀 Features

- Create, Read, Update, Delete products  
- Uses **Mongoose** for MongoDB interaction  
- Organized routes and controllers  
- Async/await + error handling  
- RESTful API structure  

---

## 🧩 Product Schema

```js
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
```

---

## 📦 API Endpoints

Base URL:  
```
/api/products
```

| Method | Endpoint | Description |
|---------|-----------|-------------|
| **GET** | `/api/products` | Fetch all products |
| **GET** | `/api/products/:id` | Fetch a single product by ID |
| **POST** | `/api/products` | Create a new product |
| **PUT** | `/api/products/:id` | Update an existing product by ID |
| **DELETE** | `/api/products/:id` | Delete a product by ID |

---

## 🧠 Example Usage (JSON)

### ➕ Create Product
**POST** `/api/products`

```json
{
  "name": "iPhone 15",
  "price": 999,
  "quantity": 10
}
```

---

### 📦 Get All Products
**GET** `/api/products`

Response:
```json
[
  {
    "_id": "652f123abc...",
    "name": "iPhone 15",
    "price": 999,
    "quantity": 10
  }
]
```

---

### 🔍 Get Product by ID
**GET** `/api/products/:id`

Example:
```
/api/products/652f123abc123
```

---

### ✏️ Update Product
**PUT** `/api/products/:id`

```json
{
  "price": 1099,
  "quantity": 8
}
```

---

### ❌ Delete Product
**DELETE** `/api/products/:id`

Response:
```json
{ "message": "Product deleted successfully" }
```

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/simple-crud-api.git

# 2. Install dependencies
npm install

# 3. Create a .env file
MONGO_URI=mongodb://localhost:27017/productsDB
PORT=5000

# 4. Start the server
npm start
```

Server runs on  
```
http://localhost:5000
```

---

## 🧩 Tech Stack

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---

💡 *Made with ❤️ using Node.js + Express + Mongoose.*
