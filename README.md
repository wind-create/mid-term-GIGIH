#Users

- User object

```
{
  id: integer
  username: string
  email: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

## **GET /users**

Returns all users in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  users: [
           {<user_object>},
           {<user_object>},
           {<user_object>}
         ]
}
```

## **GET /users/:id**

Returns the specified user.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "User doesn't exist" }`  
    OR
  - **Code:** 401

## **POST /users**

Creates a new User and returns the new object.

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
  {
    username: string,
    email: string
  }
```

- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`

## **PATCH /users/:id**

Updates fields on the specified user and returns the updated object.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**

```
  {
  	username: string,
    email: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "User doesn't exist" }`  
    OR
  - **Code:** 401

## **DELETE /users/:id**

Deletes the specified user.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 204
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "User doesn't exist" }`  
    OR
  - **Code:** 401

#Products

- Product object

```
{
  id: integer
  name: string
  cost: float(2)
  available_quantity: integer
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

## **GET /products**

Returns all products in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

## **GET /products/:id**

Returns the specified product.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <product_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Product doesn't exist" }`  
    OR
  - **Code:** 401

## **POST /products**

Creates a new Product and returns the new object.

- **URL Params**  
  None
- **Data Params**

```
  {
    name: string
    cost: float(2)
    available_quantity: integer
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <product_object> }`

## **PATCH /products/:id**

Updates fields on the specified product and returns the updated object.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**

```
  {
  	name: string
    cost: float(2)
    available_quantity: integer
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <product_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Product doesn't exist" }`  
    OR
  - **Code:** 401

## **DELETE /products/:id**

Deletes the specified product.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 204
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Product doesn't exist" }`  
    OR
  - **Code:** 401

#Video

- Video object

```
{
  videoTitle: string
  url: string;
  productId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
```

## **GET /videos**

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```

## **GET /videos/:id**

Returns the specified product.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <video_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "video doesn't exist" }`  
    OR
  - **Code:** 401

## **POST /videos**

Creates a new video and returns the new object.

- **URL Params**  
  None
- **Data Params**

```

{
  videoTitle: string
  url: string;
  productId: mongoose.Schema.Types.ObjectId;
}

```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <video_object> }`

## **PATCH /videos/:id**

Updates fields on the specified video and returns the updated object.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**

```
  {
  videoTitle: string
  url: string;
  productId: mongoose.Schema.Types.ObjectId;
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <video_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist" }`  
    OR
  - **Code:** 401

## **DELETE /videos/:id**

Deletes the specified video.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 204
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist" }`  
    OR
  - **Code:** 401
