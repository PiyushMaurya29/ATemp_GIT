# E-Commerce Website

A simple yet functional e-commerce website built with Next.js (frontend) and Node.js/Express (backend).

## Features

- 🏠 **Homepage** - Display all products in a responsive grid
- 📦 **Product Details** - View individual product information
- 🛒 **Shopping Cart** - Add, update, and remove items from cart
- 🔌 **RESTful API** - Complete CRUD operations for products (Create, Read, Update, Delete)
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## Project Structure

```
TripPlanner/
├── backend/                 # Node.js/Express Backend
│   ├── data/
│   │   └── products.json    # Product data storage
│   ├── server.js            # Express server and API routes
│   └── package.json         # Backend dependencies
│
├── pages/                   # Next.js Pages
│   ├── index.js             # Homepage (product listing)
│   ├── product/
│   │   └── [id].js          # Product details page
│   ├── cart.js              # Shopping cart page
│   └── _app.js              # Next.js app wrapper
│
├── components/              # React Components
│   ├── ProductCard.js       # Product card component
│   └── CartItem.js          # Cart item component
│
├── styles/                  # CSS Styles
│   └── globals.css          # Global styles and responsive design
│
└── package.json             # Frontend dependencies
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate back to the root directory:
   ```bash
   cd ..
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Example API Usage

**Create a new product:**
```bash
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "name": "New Product",
  "price": 99.99,
  "description": "Product description",
  "image": "https://via.placeholder.com/300"
}
```

**Update a product:**
```bash
PUT http://localhost:5000/api/products/1
Content-Type: application/json

{
  "price": 89.99
}
```

## How It Works

### Frontend-Backend Connection

1. **Frontend (Next.js)** runs on port 3000 and makes HTTP requests to the backend API
2. **Backend (Express)** runs on port 5000 and serves JSON data
3. The frontend uses `fetch()` to communicate with the backend API endpoints
4. Product data is stored in `backend/data/products.json` (file-based storage for simplicity)
5. Shopping cart data is stored in the browser's `localStorage`

### Data Flow

1. User visits homepage → Frontend fetches products from `/api/products`
2. User clicks a product → Navigates to `/product/[id]` → Fetches product details
3. User adds to cart → Product stored in `localStorage`
4. User views cart → Cart items loaded from `localStorage`

## Technologies Used

- **Frontend:**
  - Next.js 14
  - React 18
  - CSS3 (Responsive Design)

- **Backend:**
  - Node.js
  - Express.js
  - CORS (for cross-origin requests)

## Customization

### Adding New Products

You can add products in two ways:

1. **Via API** (recommended for dynamic updates):
   ```bash
   POST http://localhost:5000/api/products
   ```

2. **Directly edit** `backend/data/products.json`

### Styling

All styles are in `styles/globals.css`. You can customize:
- Colors (search for `#0070f3` to change primary color)
- Fonts
- Spacing and layout
- Responsive breakpoints

## Future Enhancements

- User authentication
- Payment integration
- Order management
- Product search and filtering
- User reviews and ratings
- Database integration (MongoDB, PostgreSQL, etc.)

## License

This project is open source and available for learning purposes.

