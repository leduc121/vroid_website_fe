# Backend API Requirements - VRoid Website

TÃ i liá»‡u nÃ y mÃ´ táº£ táº¥t cáº£ cÃ¡c API endpoints mÃ  backend cáº§n pháº£i implement Ä‘á»ƒ há»— trá»£ frontend VRoid website.

## Base URL
```
https://api.vroid-market.com/v1
```

---

## 1. Authentication APIs

### 1.1 Register User
**Endpoint:** `POST /auth/register`

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "phone": "string (optional)",
  "password": "string",
  "confirmPassword": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "string",
    "username": "string",
    "email": "string",
    "token": "string"
  }
}
```

### 1.2 Login User
**Endpoint:** `POST /auth/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "string",
    "username": "string",
    "email": "string",
    "token": "string"
  }
}
```

### 1.3 OAuth Login (Facebook/Google)
**Endpoint:** `POST /auth/oauth/{provider}`

**Path Parameters:**
- `provider`: "facebook" | "google"

**Request Body:**
```json
{
  "accessToken": "string"
}
```

**Response:** Same as Login User

---

## 2. Product APIs

### 2.1 Get All Products
**Endpoint:** `GET /products`

**Query Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 20)
- `category`: string (optional) - "Top" | "Bottoms" | "Shoes" | "Accessories"
- `subCategory`: string (optional) - depends on category
- `search`: string (optional)
- `sortBy`: "newest" | "popular" | "price-low" | "price-high"

**Response:**
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": "string",
        "title": "string",
        "price": number,
        "image": "string (URL)",
        "category": "string",
        "subCategory": "string",
        "author": "string",
        "rating": number,
        "reviews": number,
        "tags": ["string"],
        "imageColor": "string",
        "shadowColor": "string",
        "tag": "string"
      }
    ],
    "pagination": {
      "currentPage": number,
      "totalPages": number,
      "totalItems": number
    }
  }
}
```

### 2.2 Get Product Detail
**Endpoint:** `GET /products/{productId}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "images": ["string (URLs)"],
    "variants": [
      {
        "id": number,
        "name": "string",
        "price": number,
        "stock": number
      }
    ],
    "rating": number,
    "reviews": number,
    "specs": [
      {
        "label": "string",
        "value": "string"
      }
    ],
    "tags": ["string"]
  }
}
```

### 2.3 Get Related Products
**Endpoint:** `GET /products/{productId}/related`

**Query Parameters:**
- `limit`: number (default: 4)

**Response:** Same structure as Get All Products

---

## 3. AI Studio APIs

### 3.1 Generate Asset
**Endpoint:** `POST /ai/generate`

**Request Body:**
```json
{
  "prompt": "string",
  "stylePreset": "Anime" | "Cyberpunk" | "Kawaii" | "Gothic",
  "category": "Top" | "Bottoms" | "Shoes" | "Accessories",
  "subCategory": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "imageUrl": "string",
    "generationId": "string",
    "metadata": {
      "category": "string",
      "subCategory": "string",
      "stylePreset": "string"
    }
  }
}
```

**Note:** 
- Backend cáº§n cÃ³ logic Ä‘á»ƒ chá»n template image phÃ¹ há»£p dá»±a trÃªn `category` vÃ  `subCategory`
- VÃ­ dá»¥: category="Top" + subCategory="Shirt" â†’ chá»n template shirt
- Image-to-Image model sáº½ sá»­ dá»¥ng template nÃ y kÃ¨m prompt Ä‘á»ƒ generate

### 3.2 Download Generated Asset
**Endpoint:** `GET /ai/download/{generationId}`

**Response:** Binary file (image)

### 3.3 Publish to Shop
**Endpoint:** `POST /ai/publish`

**Request Body:**
```json
{
  "generationId": "string",
  "title": "string",
  "price": number,
  "category": "string",
  "subCategory": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "productId": "string",
    "message": "Published to Shop successfully"
  }
}
```

---

## 4. User Profile APIs

### 4.1 Get User Profile
**Endpoint:** `GET /users/profile`

**Headers:**
- `Authorization`: "Bearer {token}"

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "string",
    "username": "string",
    "email": "string",
    "phone": "string",
    "avatar": "string (URL)",
    "createdAt": "string (ISO date)"
  }
}
```

### 4.2 Update User Profile
**Endpoint:** `PUT /users/profile`

**Headers:**
- `Authorization`: "Bearer {token}"

**Request Body:**
```json
{
  "username": "string (optional)",
  "phone": "string (optional)",
  "avatar": "string (optional)"
}
```

**Response:** Same as Get User Profile

### 4.3 Get User's Published Assets
**Endpoint:** `GET /users/assets`

**Headers:**
- `Authorization`: "Bearer {token}"

**Query Parameters:**
- `page`: number
- `limit`: number

**Response:** Same structure as Get All Products

---

## 5. Wishlist APIs

### 5.1 Get Wishlist
**Endpoint:** `GET /wishlist`

**Headers:**
- `Authorization`: "Bearer {token}"

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "productId": "string",
        "product": {
          // Same as product object
        },
        "addedAt": "string (ISO date)"
      }
    ]
  }
}
```

### 5.2 Add to Wishlist
**Endpoint:** `POST /wishlist`

**Headers:**
- `Authorization`: "Bearer {token}"

**Request Body:**
```json
{
  "productId": "string",
  "variantId": number
}
```

**Response:**
```json
{
  "success": true,
  "message": "Added to wishlist"
}
```

### 5.3 Remove from Wishlist
**Endpoint:** `DELETE /wishlist/{productId}`

**Headers:**
- `Authorization`: "Bearer {token}"

**Response:**
```json
{
  "success": true,
  "message": "Removed from wishlist"
}
```

---

## 6. Cart & Checkout APIs

### 6.1 Get Cart
**Endpoint:** `GET /cart`

**Headers:**
- `Authorization`: "Bearer {token}"

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "cartItemId": "string",
        "productId": "string",
        "variantId": number,
        "quantity": number,
        "product": {
          // Product details
        },
        "variant": {
          // Variant details
        }
      }
    ],
    "total": number
  }
}
```

### 6.2 Add to Cart
**Endpoint:** `POST /cart`

**Headers:**
- `Authorization`: "Bearer {token}"

**Request Body:**
```json
{
  "productId": "string",
  "variantId": number,
  "quantity": number
}
```

**Response:**
```json
{
  "success": true,
  "message": "Added to cart",
  "data": {
    "cartItemId": "string"
  }
}
```

### 6.3 Update Cart Item
**Endpoint:** `PUT /cart/{cartItemId}`

**Headers:**
- `Authorization`: "Bearer {token}"

**Request Body:**
```json
{
  "quantity": number
}
```

**Response:**
```json
{
  "success": true,
  "message": "Cart updated"
}
```

### 6.4 Remove from Cart
**Endpoint:** `DELETE /cart/{cartItemId}`

**Headers:**
- `Authorization`: "Bearer {token}"

**Response:**
```json
{
  "success": true,
  "message": "Removed from cart"
}
```

### 6.5 Checkout
**Endpoint:** `POST /checkout`

**Headers:**
- `Authorization`: "Bearer {token}"

**Request Body:**
```json
{
  "shippingAddress": {
    "fullName": "string",
    "address": "string",
    "city": "string",
    "postalCode": "string",
    "country": "string"
  },
  "paymentMethod": "credit_card" | "paypal" | "bank_transfer"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orderId": "string",
    "total": number,
    "status": "pending" | "completed",
    "paymentUrl": "string (optional)"
  }
}
```

---

## 7. Reviews APIs

### 7.1 Get Product Reviews
**Endpoint:** `GET /products/{productId}/reviews`

**Query Parameters:**
- `page`: number
- `limit`: number

**Response:**
```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "reviewId": "string",
        "userId": "string",
        "username": "string",
        "rating": number,
        "comment": "string",
        "createdAt": "string (ISO date)"
      }
    ],
    "pagination": {
      "currentPage": number,
      "totalPages": number
    }
  }
}
```

### 7.2 Add Review
**Endpoint:** `POST /products/{productId}/reviews`

**Headers:**
- `Authorization`: "Bearer {token}"

**Request Body:**
```json
{
  "rating": number (1-5),
  "comment": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "reviewId": "string"
  }
}
```

---

## 8. Search & Filter APIs

### 8.1 Search Products
**Endpoint:** `GET /search`

**Query Parameters:**
- `q`: string (search query)
- `category`: string (optional)
- `subCategory`: string (optional)
- `minPrice`: number (optional)
- `maxPrice`: number (optional)
- `page`: number
- `limit`: number

**Response:** Same structure as Get All Products

---

## Important Notes

### Category & Sub-Category Structure

Backend cáº§n maintain cáº¥u trÃºc category/sub-category nhÆ° sau:

```javascript
{
  "Top": ["Shirt", "Coat", "Hoodies", "Blazer", "Jacket", "T-Shirt"],
  "Bottoms": ["Pants", "Long Pants", "Short", "Skirt", "Jeans"],
  "Shoes": ["Sneakers", "Boots", "Sandals", "Heels"],
  "Accessories": ["Hair", "Hat", "Glasses", "Jewelry", "Bag"]
}
```

### AI Generation Template Mapping

Äá»‘i vá»›i AI Studio, backend cáº§n:
1. CÃ³ sáºµn template images cho má»—i sub-category
2. Khi nháº­n request generate, chá»n template dá»±a trÃªn `category` + `subCategory`
3. Pass template image + prompt vÃ o Image-to-Image model
4. Return generated image URL

### Authentication

Táº¥t cáº£ endpoints cÃ³ `Authorization` header Ä‘á»u cáº§n verify JWT token vÃ  return 401 náº¿u invalid.

### Error Responses

Táº¥t cáº£ errors nÃªn follow format:
```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

### Pagination

Default pagination: page=1, limit=20
Max limit: 100
