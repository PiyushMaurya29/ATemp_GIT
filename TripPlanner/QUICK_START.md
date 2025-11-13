# Quick Start Guide

## Step-by-Step Setup

### 1. Install Backend Dependencies

Open a terminal and run:
```bash
cd backend
npm install
```

### 2. Start the Backend Server

In the same terminal (still in the `backend` folder):
```bash
npm start
```

You should see: `Server is running on http://localhost:5000`

**Keep this terminal window open!**

### 3. Install Frontend Dependencies

Open a **NEW** terminal window and run:
```bash
npm install
```

### 4. Start the Frontend Server

In the new terminal (in the root folder):
```bash
npm run dev
```

You should see: `Ready on http://localhost:3000`

### 5. Open Your Browser

Visit: `http://localhost:3000`

## Troubleshooting

**Backend won't start?**
- Make sure port 5000 is not in use
- Check that you're in the `backend` folder when running `npm install`

**Frontend won't connect to backend?**
- Make sure the backend is running first
- Check that backend is on port 5000
- Check browser console for errors

**Products not showing?**
- Make sure both servers are running
- Check `backend/data/products.json` exists and has data
- Open browser DevTools → Network tab to see API calls

## Testing the API

You can test the API directly using:

**Get all products:**
```bash
curl http://localhost:5000/api/products
```

**Get single product:**
```bash
curl http://localhost:5000/api/products/1
```

Or use a tool like Postman or Thunder Client in VS Code.

