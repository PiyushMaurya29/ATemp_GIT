const express = require("express");
const users = require("./MOCK_DATA.json");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true })); // 👈 form data
app.use(express.json());
app.use(cookieParser());

// Serve HTML files
app.use(express.static("views"));

/* ================= AUTH MIDDLEWARE ================= */

function isAuthenticated(req, res, next) {
  const uid = req.cookies.uid;
  if (!uid) return res.redirect("/login.html");

  const user = users.find(u => u.id === uid);
  if (!user) return res.redirect("/login.html");

  req.user = user;
  next();
}

/* ================= ROUTES ================= */

// SIGNUP PAGE
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views/signup.html"));
});

// SIGNUP LOGIC
app.post("/signup", async (req, res) => {
  const { name, gmail, password } = req.body;

  if (!name || !gmail || !password) {
    return res.send("All fields required");
  }

  const exists = users.find(u => u.gmail === gmail);
  if (exists) return res.send("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: String(users.length + 1),
    name,
    gmail,
    password: hashedPassword
  });

  res.redirect("/login.html");
});

// LOGIN PAGE
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

// LOGIN LOGIC
app.post("/login", async (req, res) => {
  const { gmail, password } = req.body;

  const user = users.find(u => u.gmail === gmail);
  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Wrong password");

  res.cookie("uid", user.id, { httpOnly: true });
  res.redirect("/home");
});

// HOME (PROTECTED)
app.get("/home", isAuthenticated, (req, res) => {
  res.send(`
    <h1>Welcome ${req.user.name}</h1>
    <p>${req.user.gmail}</p>
    <a href="/logout">Logout</a>
  `);
});

// LOGOUT
app.get("/logout", (req, res) => {
  res.clearCookie("uid");
  res.redirect("/login.html");
});

/* ================= SERVER ================= */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
